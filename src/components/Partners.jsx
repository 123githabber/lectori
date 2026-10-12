export default function Partners({ partners }) {
  return (
    <section className="section container" id="partners">
      <h2 className="section__title">Партнёры</h2>
      <div className="partners">
        {partners.map((p) => (
          <a
            className="partner"
            key={p.id}
            href={p.site}
            target="_blank"
            rel="noreferrer"
            title={`Перейти на сайт ${p.name}`}
          >
            <div className="partner__head">
              <img className="partner__logo" src={p.logo} alt={p.name} loading="lazy" />
              <span className="partner__arrow" aria-hidden="true">↗</span>
            </div>
            <p>{p.description}</p>
          </a>
        ))}
      </div>
      <p className="partners__cta">
        Хотите стать партнёром платформы? Напишите нам — <a href="mailto:partners@lectorium.ru">partners@lectorium.ru</a>
      </p>
    </section>
  )
}
