// Reveal — kept for API compatibility; renders children plainly.
// Animations are intentionally disabled for the plain, no-nonsense look.
function Reveal({
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  )
}

export default Reveal