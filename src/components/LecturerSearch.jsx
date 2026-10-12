export default function LecturerSearch({ query, onQuery, disciplines, discipline, onDiscipline }) {
  return (
    <div className="search">
      <input
        id="lector-search"
        className="search__input"
        type="text"
        placeholder="Поиск по имени или дисциплине…"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
      <div className="search__chips">
        <button
          className={discipline === 'all' ? 'chip chip_active' : 'chip'}
          onClick={() => onDiscipline('all')}
        >
          Все дисциплины
        </button>
        {disciplines.map((d) => (
          <button
            key={d}
            className={discipline === d ? 'chip chip_active' : 'chip'}
            onClick={() => onDiscipline(d === discipline ? 'all' : d)}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  )
}
