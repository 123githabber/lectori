import { useState } from 'react'
import BookingForm from './BookingForm.jsx'
import Tooltip from './Tooltip.jsx'

export default function LecturerCard({ lecturer }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="card">
      <div className="card__top">
        <img className="card__photo" src={lecturer.photo} alt={`Фото: ${lecturer.name}`} />
        <div className="card__intro">
          <h3 className="card__name">{lecturer.name}</h3>
          <p className="card__meta">
            {lecturer.education} ·{' '}
            <Tooltip content={`Стаж преподавания: ${lecturer.experience} лет.`}>
              Стаж {lecturer.experience} лет
            </Tooltip>
            {lecturer.degree && (
              <>
                {' · '}
                <Tooltip content={`Учёная степень: ${lecturer.degree}.`}>
                  {lecturer.degree}
                </Tooltip>
              </>
            )}
          </p>
        </div>
      </div>
      <div className="card__body">
        <div className="card__disciplines">
          {lecturer.disciplines.map((d) => (
            <details key={d.title}>
              <summary>
                {d.title} <span className="card__subtitle">— {d.subtitle}</span>
              </summary>
              <ul>
                {d.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        <div className="card__tariffs">
          <h4>Тарифы</h4>
          <ul>
            {lecturer.tariffs.map((t) => (
              <li key={t.title}>
                <span>{t.title}</span>
                <b>{t.price}</b>
              </li>
            ))}
          </ul>
        </div>
        <button className="btn" onClick={() => setOpen(true)}>Забронировать</button>
      </div>
      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <div className="modal__box" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" aria-label="Закрыть" onClick={() => setOpen(false)}>×</button>
            <h3>Бронирование лекции</h3>
            <BookingForm lecturer={lecturer} />
          </div>
        </div>
      )}
    </article>
  )
}
