import Hero from './Hero.jsx'
import Stats from './Stats.jsx'
import About from './About.jsx'
import HowItWorks from './HowItWorks.jsx'
import Partners from './Partners.jsx'
import Reviews from './Reviews.jsx'
import Faq from './Faq.jsx'
import BookingForm from './BookingForm.jsx'
import { lecturers, stats, steps, formats, values, partners, faq, reviews } from '../data.js'

export default function Home({ onFind }) {
  return (
    <>
      <Hero
        title="Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями."
        subtitle="Онлайн и офлайн лекции для компаний, вузов и НКО — от подбора эксперта до проведения мероприятия."
        buttonText="Найти лектора"
        onButtonClick={onFind}
      />
      <Section title="О нас" id="about">
        <About values={values} />
      </Section>
      <HowItWorks steps={steps} formats={formats} />
      <Partners partners={partners} />
      <Reviews reviews={reviews} />
      <Faq faq={faq} />
      <section className="section container" id="booking">
        <h2 className="section__title">Оставить заявку</h2>
        <p className="section__subtitle">Опишите задачу — подберём лектора и предложим программу в течение дня.</p>
        <BookingForm />
      </section>
      <Stats stats={stats} lecturers={lecturers} />
    </>
  )
}

function Section({ id, title, children }) {
  return (
    <section className="section container" id={id}>
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  )
}
