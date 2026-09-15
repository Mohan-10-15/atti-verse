function FilterBar({ filters, active, onChange }) {
  return (
    <div className="filter-bar" role="tablist" aria-label="Filter content">
      {filters.map((f) => (
        <button
          key={f}
          type="button"
          role="tab"
          aria-selected={active === f}
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