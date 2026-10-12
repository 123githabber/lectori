import BookingForm from './BookingForm.jsx'

export default function HowItWorks({ steps, formats }) {
  return (
    <section className="section container" id="how">
      <h2 className="section__title">Как это работает</h2>
      <div className="steps">
        {steps.map((s, i) => (
          <div className="steps__item" key={s.title}>
            <span className="steps__num">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <div className="formats">
        {formats.map((f) => (
          <div className="formats__item" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
      <div className="how__booking" id="how-booking">
        <h3 className="how__booking-title">Оставить заявку</h3>
        <p className="section__subtitle">
          Опишите задачу — подберём лектора и предложим программу в течение дня.
        </p>
        <BookingForm />
      </div>
    </section>
  )
}
