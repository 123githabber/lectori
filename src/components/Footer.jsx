export default function Footer({ onGoSection, onOpenLectors }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="logo">Лекториум</p>
          <p className="footer__muted">Платформа, соединяющая компании, вузы и НКО с профессиональными лекторами.</p>
        </div>
        <nav className="footer__nav">
          <button onClick={() => onGoSection('main')}>Главная</button>
          <button onClick={() => onGoSection('partners')}>Партнёры</button>
          <button onClick={() => onGoSection('about')}>О нас</button>
          <button onClick={onOpenLectors}>Лекторы</button>
        </nav>
        <div className="footer__contacts">
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          <a href="mailto:hello@lectorium.ru">hello@lectorium.ru</a>
          <p className="footer__muted">© 2026 Лекториум. Учебный проект.</p>
        </div>
      </div>
    </footer>
  )
}
