function YouTubeCard({ item, type }) {
  const watchUrl = item.videoId
    ? type === 'shorts'
      ? `https://www.youtube.com/shorts/${item.videoId}`
      : `https://www.youtube.com/watch?v=${item.videoId}`
    : item.url;
  const thumbnailUrl = item.videoId
    ? type === 'shorts'
      ? `https://i.ytimg.com/vi/${item.videoId}/frame0.jpg`
      : `https://i.ytimg.com/vi/${item.videoId}/hqdefault.jpg`
    : '';

  return (
    <a className={`youtube-card ${type === 'shorts' ? 'short-card' : ''}`} href={watchUrl} target="_blank" rel="noreferrer">
      <span className="youtube-thumb">
        {thumbnailUrl ? <img src={thumbnailUrl} alt={item.title} /> : <span className="youtube-thumb-fallback">YouTube</span>}
        {item.duration && <small>{item.duration}</small>}
      </span>
      <strong>{item.title}</strong>
      <span>{item.meta}</span>
    </a>
  );
}

export default YouTubeCard;
