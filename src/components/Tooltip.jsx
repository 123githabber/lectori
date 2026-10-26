import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Tooltip({ children, content }) {
  const id = useId()
  const triggerRef = useRef(null)
  const tooltipRef = useRef(null)
  const hideTimer = useRef(null)
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(null)

  function show() {
    clearTimeout(hideTimer.current)
    setOpen(true)
  }

  function hideSoon() {
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => {
      if (document.activeElement !== triggerRef.current) setOpen(false)
    }, 120)
  }

  useEffect(() => () => clearTimeout(hideTimer.current), [])

  useLayoutEffect(() => {
    if (!open) return

    function updatePosition() {
      const anchor = triggerRef.current.getBoundingClientRect()
      const tooltip = tooltipRef.current.getBoundingClientRect()
      const margin = 8
      const viewportWidth = document.documentElement.clientWidth
      const viewportHeight = window.innerHeight
      const above = anchor.top - tooltip.height - margin
      const top = above >= margin ? above : anchor.bottom + margin

      setPosition({
        left: Math.max(margin, Math.min(
          anchor.left + (anchor.width - tooltip.width) / 2,
          viewportWidth - tooltip.width - margin,
        )),
        top: Math.max(margin, Math.min(top, viewportHeight - tooltip.height - margin)),
        visibility: anchor.bottom > 0 && anchor.top < viewportHeight ? 'visible' : 'hidden',
      })
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    updatePosition()
    // Capture also catches scrolling inside nested containers.
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, content])

  return (
    <span
      ref={triggerRef}
      className="tooltip-trigger"
      tabIndex={0}
      aria-describedby={open ? id : undefined}
      onMouseEnter={show}
      onMouseLeave={hideSoon}
      onFocus={show}
      onBlur={hideSoon}
    >
      {children}
      {open && createPortal(
        <span
          ref={tooltipRef}
          id={id}
          role="tooltip"
          className="tooltip"
          style={position || { visibility: 'hidden' }}
          onMouseEnter={show}
          onMouseLeave={hideSoon}
        >
          {content}
        </span>,
        document.body,
      )}
    </span>
  )
}
