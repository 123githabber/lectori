export default function Faq({ faq }) {
  return (
    <section className="section container" id="faq">
      <h2 className="section__title">Частые вопросы</h2>
      <div className="faq">
        {faq.map((item) => (
          <details key={item.q} className="faq__item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
