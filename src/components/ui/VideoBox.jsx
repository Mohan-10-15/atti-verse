import { useState } from 'react'
import Icon from './Icon.jsx'
import Img from './Img.jsx'

function embedUrl(video) {
  if (!video) return null
  if (typeof video !== 'string') return null

  if (video.startsWith('youtube:')) return `https://www.youtube.com/embed/${video.replace('youtube:', '')}`
  if (video.startsWith('vimeo:')) return `https://player.vimeo.com/video/${video.replace('vimeo:', '')}`
  return video
}

function VideoBox({ video, poster, label = 'VIDEO PREVIEW' }) {
  const [playing, setPlaying] = useState(false)
  const url = embedUrl(video)

  if (!url) {
    return (
      <div className="video-box">
        {poster && <Img src={poster} alt={label} className="video-box__poster" style={{ position: 'absolute', inset: 0 }} />}
        <span className="video-box__label">{label} — TO BE ADDED</span>
      </div>
    )
  }

  return (
    <div className="video-box">
      {poster && !playing && <Img src={poster} alt={label} className="video-box__poster" style={{ position: 'absolute', inset: 0 }} />}
      {!playing && (
        <button type="button" className="video-box__play" aria-label={`Play ${label}`} onClick={() => setPlaying(true)}>
          <Icon name="play" size={26} />
        </button>
      )}
      <span className="video-box__label">{label}</span>
      {playing && <iframe src={url} title={label} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy" />}
    </div>
  )
}

export default VideoBox