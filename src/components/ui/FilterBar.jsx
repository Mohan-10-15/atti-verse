function FilterBar({ filters, active, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter content">
      {filters.map((f) => (
        <button
          key={f}
          type="button"
          aria-pressed={active === f}
          aria-label={`Show ${f} content`}
          className={`filter-pill ${active === f ? 'is-active' : ''}`}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}

export default FilterBar