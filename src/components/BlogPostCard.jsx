import { formatDate, getYouTubeEmbedUrl } from '../services/cms';

function BlogPostCard({ onShare, onVote, votedType, post }) {
  const embedUrl = getYouTubeEmbedUrl(post.youtube_url);
  const canInteract = Boolean(post.id && post.id !== 'sample-post');

  return (
    <article className="live-post-card">
      {post.cover_image && <img src={post.cover_image} alt={post.title} />}
      {embedUrl && (
        <iframe
          title={post.title}
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
      <div>
        <span>{post.category || 'Blog'} - {formatDate(post.published_at || post.created_at)}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt || post.content}</p>
        {post.youtube_url && (
          <a href={post.youtube_url} target="_blank" rel="noreferrer">
            Open Video
          </a>
        )}
        <div className="post-actions">
          <button
            className={votedType === 'like' ? 'active' : ''}
            type="button"
            aria-label={`Like ${post.title}`}
            disabled={!canInteract || Boolean(votedType)}
            onClick={() => onVote(post, 'like')}
          >
            <span aria-hidden="true">▲</span>
            <strong>{post.likes || 0}</strong>
          </button>
          <button
            className={votedType === 'dislike' ? 'active' : ''}
            type="button"
            aria-label={`Dislike ${post.title}`}
            disabled={!canInteract || Boolean(votedType)}
            onClick={() => onVote(post, 'dislike')}
          >
            <span aria-hidden="true">▼</span>
            <strong>{post.dislikes || 0}</strong>
          </button>
          <button type="button" aria-label={`Share ${post.title}`} onClick={() => onShare(post)}>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default BlogPostCard;
