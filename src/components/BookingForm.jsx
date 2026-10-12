import { useState } from 'react'

export default function BookingForm({ lecturer }) {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [format, setFormat] = useState('Онлайн')

  const submit = (e) => {
    e.preventDefault()
    console.log('Заявка:', { name, email, date, format, lecturer: lecturer?.name })
    setSent(true)
  }

  if (sent) {
    return (
      <div className="booking__done">
        <h3>Заявка отправлена!</h3>
        <p>
          {lecturer && <>Лектор: <b>{lecturer.name}</b>. </>}
          {name}, мы свяжемся с вами по адресу {email} в течение рабочего дня.
        </p>
      </div>
    )
  }

  return (
    <form className="booking" onSubmit={submit}>
      {lecturer && <p className="booking__lector">Лектор: <b>{lecturer.name}</b></p>}
      <div className="booking__row">
        <label>
          Ваше имя
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван Петров" />
        </label>
        <label>
          E-mail
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ivan@mail.ru" />
        </label>
      </div>
      <div className="booking__row">
        <label>
          Дата
          <input required type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Формат
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option>Онлайн</option>
            <option>Офлайн</option>
            <option>Корпоративный тренинг</option>
          </select>
        </label>
      </div>
      <button className="btn" type="submit">Отправить заявку</button>
    </form>
  )
}
