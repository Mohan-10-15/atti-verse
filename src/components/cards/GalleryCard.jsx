import Img from '../ui/Img.jsx'

function GalleryCard({ item, onOpen }) {
  return (
    <button
      type="button"
      className="gallery-card"
      onClick={() => onOpen(item)}
      aria-label={`Open ${item.caption}`}
      style={{ width: '100%', textAlign: 'left', padding: 0 }}
    >
      <div className="gallery-card__media">
        <Img src={item.src} alt={item.caption} />
      </div>
      <div className="gallery-card__overlay">
        <div>
          <div className="gallery-card__caption">{item.caption}</div>
          <div className="gallery-card__cat">{item.category}</div>
        </div>
      </div>
    </button>
  )
}

export default GalleryCard