export default function Hero({ title, subtitle, buttonText, onButtonClick }) {
  return (
    <section className="hero" id="main">
      <div className="container hero__inner">
        <img className="hero__img" src="/images/hero.jpg" alt="Лектор проводит лекцию" />
        <div className="hero__text">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <button className="btn" onClick={onButtonClick}>{buttonText}</button>
        </div>
      </div>
    </section>
  )
}
