export default function Stats({ stats, lecturers }) {
  const disciplines = new Set(lecturers.flatMap((l) => l.disciplines.map((d) => d.title)))
  return (
    <section className="section container" id="stats">
      <div className="stats">
        <div className="stats__item">
          <span className="stats__value">{lecturers.length}</span>
          <span className="stats__label">лекторов — экспертов своего дела</span>
        </div>
        <div className="stats__item">
          <span className="stats__value">{disciplines.size}+</span>
          <span className="stats__label">дисциплин: от IT до гуманитарных наук</span>
        </div>
        <div className="stats__item">
          <span className="stats__value">3</span>
          <span className="stats__label">формата: онлайн, офлайн и корпоративный</span>
        </div>
        <div className="stats__item">
          <span className="stats__value">7–16</span>
          <span className="stats__label">лет стажа у наших специалистов</span>
        </div>
      </div>
    </section>
  )
}
