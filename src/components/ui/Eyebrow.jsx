function Eyebrow({ index, children, className = '', ...rest }) {
  return (
    <span className={`eyebrow ${className}`.trim()} {...rest}>
      {index ? (
        <>
          <span className="eyebrow__num" aria-hidden="true">
            {index}
          </span>
          <span className="eyebrow__rule" aria-hidden="true" />
        </>
      ) : null}
      <span className="eyebrow__label">{children}</span>
    </span>
  )
}

export default Eyebrow