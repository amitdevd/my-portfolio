import { formatDate, getYouTubeEmbedUrl } from '../services/cms';

function BlogPostCard({ post }) {
  const embedUrl = getYouTubeEmbedUrl(post.youtube_url);

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
      </div>
    </article>
  );
}

export default BlogPostCard;
