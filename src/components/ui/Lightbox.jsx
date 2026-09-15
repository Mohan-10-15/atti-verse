import { useEffect, useCallback, useRef } from 'react'
import Icon from './Icon.jsx'
import Img from './Img.jsx'

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]
  const touchX = useRef(null)

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!item) return null

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current === null || items.length < 2) return
    const diff = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(diff) > 48) {
      if (diff < 0) onNext()
      else onPrev()
    }
    touchX.current = null
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <span className="lightbox__counter">
        {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
      </span>
      <button
        type="button"
        className="lightbox__btn lightbox__btn--close"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <Icon name="close" size={20} />
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox__btn lightbox__btn--prev"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label="Previous image"
          >
            <Icon name="arrow-left" size={20} />
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__btn--next"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="Next image"
          >
            <Icon name="arrow-right" size={20} />
          </button>
        </>
      )}
      <div className="lightbox__media" onClick={(e) => e.stopPropagation()}>
        <Img src={item.src} alt={item.caption} priority />
        <div className="lightbox__cap">
          <div className="lightbox__cap-title">{item.caption}</div>
          <div className="lightbox__cap-cat">{item.category}</div>
        </div>
      </div>
    </div>
  )
}

export default Lightbox