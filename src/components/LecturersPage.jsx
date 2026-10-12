import { useEffect, useMemo, useState } from 'react'
import { lecturers } from '../data.js'
import LecturerSearch from './LecturerSearch.jsx'
import LecturerCard from './LecturerCard.jsx'

export default function LecturersPage() {
  const [query, setQuery] = useState('')
  const [discipline, setDiscipline] = useState('all')

  useEffect(() => {
    document.getElementById('lector-search')?.focus()
  }, [])

  const disciplines = useMemo(
    () => [...new Set(lecturers.flatMap((l) => l.disciplines.map((d) => d.title)))].sort(),
    []
  )

  const filtered = lecturers.filter((l) => {
    const q = query.trim().toLowerCase()
    const matchQuery =
      !q ||
      l.name.toLowerCase().includes(q) ||
      l.disciplines.some(
        (d) => d.title.toLowerCase().includes(q) || d.subtitle.toLowerCase().includes(q)
      )
    const matchDiscipline = discipline === 'all' || l.disciplines.some((d) => d.title === discipline)
    return matchQuery && matchDiscipline
  })

  return (
    <section className="section container" id="lectors">
      <h1 className="section__title">Наши лекторы</h1>
      <p className="section__subtitle">
        {lecturers.length} экспертов · {disciplines.length} дисциплин · выберите специалиста под вашу задачу
      </p>
      <LecturerSearch
        query={query}
        onQuery={setQuery}
        disciplines={disciplines}
        discipline={discipline}
        onDiscipline={setDiscipline}
      />
      <div className="lectors__grid">
        {filtered.map((l) => (
          <LecturerCard key={l.id} lecturer={l} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="empty">Ничего не найдено. Попробуйте изменить запрос или сбросить фильтр.</p>
      )}
    </section>
  )
}
