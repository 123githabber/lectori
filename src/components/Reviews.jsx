export default function Reviews({ reviews }) {
  return (
    <section className="section container" id="reviews">
      <h2 className="section__title">Отзывы</h2>
      <div className="reviews">
        {reviews.map((r) => (
          <figure className="review" key={r.name}>
            <blockquote>«{r.text}»</blockquote>
            <figcaption>
              <b>{r.name}</b>
              <span>{r.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
