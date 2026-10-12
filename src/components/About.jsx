export default function About({ values }) {
  return (
    <div className="about">
      <p className="about__lead">
        Наша учебная платформа соединяет компании, образовательные учреждения и НКО
        с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс
        подбора, бронирования и организации лекций, помогая находить экспертов,
        которые не просто делятся знаниями, но и вдохновляют аудиторию.
      </p>
      <div className="about__values">
        {values.map((v) => (
          <div className="about__value" key={v.title}>
            <h3>{v.title}</h3>
            <p>{v.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
