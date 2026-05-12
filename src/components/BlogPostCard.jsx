import { formatDate, getYouTubeEmbedUrl } from '../services/cms';

function Icon({ type }) {
  const icons = {
    like: (
      <path d="M7 21H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3m0 11V10m0 11h9.2a2 2 0 0 0 2-1.7l1-7A2 2 0 0 0 17.2 10H14V5.5A2.5 2.5 0 0 0 11.5 3L7 10" />
    ),
    dislike: (
      <path d="M17 3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3m0-11v11m0-11H7.8a2 2 0 0 0-2 1.7l-1 7A2 2 0 0 0 6.8 14H10v4.5a2.5 2.5 0 0 0 2.5 2.5L17 14" />
    ),
    share: (
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13" />
    ),
  };

  return (
    <svg aria-hidden="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
      {icons[type]}
    </svg>
  );
}

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
            <Icon type="like" />
            <strong>{post.likes || 0}</strong>
          </button>
          <button
            className={votedType === 'dislike' ? 'active' : ''}
            type="button"
            aria-label={`Dislike ${post.title}`}
            disabled={!canInteract || Boolean(votedType)}
            onClick={() => onVote(post, 'dislike')}
          >
            <Icon type="dislike" />
            <strong>{post.dislikes || 0}</strong>
          </button>
          <button type="button" aria-label={`Share ${post.title}`} onClick={() => onShare(post)}>
            <Icon type="share" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default BlogPostCard;
