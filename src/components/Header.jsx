import { useState } from 'react'

export default function Header({ page, onOpenLectors, onGoSection }) {
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setOpen(false)
    onGoSection(id)
  }

  const openLectors = () => {
    setOpen(false)
    onOpenLectors()
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="logo" onClick={() => go('main')}>Лекториум</a>
        <button className="burger" aria-label="Меню" onClick={() => setOpen(!open)}>☰</button>
        <nav className={open ? 'nav nav_open' : 'nav'}>
          <button className="nav__link" onClick={() => go('main')}>Главная</button>
          <button className="nav__link" onClick={() => go('partners')}>Партнёры</button>
          <button className="nav__link" onClick={() => go('about')}>О нас</button>
          <button
            className={page === 'lectors' ? 'nav__link active' : 'nav__link'}
            onClick={openLectors}
          >
            Лекторы
          </button>
        </nav>
        <div className="header__contacts">
          <a className="header__phone" href="tel:+74951234567">+7 (495) 123-45-67</a>
          <button className="btn btn_small" onClick={() => go('booking')}>Оставить заявку</button>
        </div>
      </div>
    </header>
  )
}
