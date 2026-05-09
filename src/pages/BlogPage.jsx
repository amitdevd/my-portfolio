import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdSlot from '../components/AdSlot';
import BlogPostCard from '../components/BlogPostCard';
import YouTubeCard from '../components/YouTubeCard';
import { fallbackBlogPosts, fetchBlogPosts } from '../services/cms';
import { youtubeChannel, youtubeShorts, youtubeVideos } from '../data/youtube';
import '../styles/blog.css';

function BlogPage() {
  const [activeYoutubeTab, setActiveYoutubeTab] = useState('videos');
  const [posts, setPosts] = useState(fallbackBlogPosts);
  const [postStatus, setPostStatus] = useState('Loading live posts...');
  const latestVideo = youtubeVideos[0];
  const tabs = [
    { id: 'videos', label: 'Videos', url: youtubeChannel.videosUrl, items: youtubeVideos },
    { id: 'shorts', label: 'Shorts', url: youtubeChannel.shortsUrl, items: youtubeShorts },
    { id: 'playlists', label: 'Playlists', url: youtubeChannel.playlistsUrl, items: [] },
    { id: 'posts', label: 'Posts', url: youtubeChannel.postsUrl, items: [] },
  ];
  const activeTab = tabs.find((tab) => tab.id === activeYoutubeTab) || tabs[0];

  useEffect(() => {
    let isMounted = true;

    fetchBlogPosts()
      .then((items) => {
        if (!isMounted) return;
        setPosts(items.length ? items : fallbackBlogPosts);
        setPostStatus(items.length ? '' : 'No live posts yet. Showing starter content.');
      })
      .catch(() => {
        if (!isMounted) return;
        setPosts(fallbackBlogPosts);
        setPostStatus('Connect Supabase to show live posts from admin panel.');
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="blog-hero">
          <div>
            <p className="eyebrow">Blog</p>
            <h1>Live Blog & YouTube</h1>
            <p>New posts from the admin panel, YouTube videos, shorts, and earning-ready ad spaces.</p>
          </div>
        </section>

        <section className="section live-blog-section">
          <div className="section-heading">
            <p className="eyebrow">Live Posts</p>
            <h2>Latest Blog Updates</h2>
          </div>
          {postStatus && <p className="cms-status">{postStatus}</p>}
          <div className="blog-layout">
            <div className="live-post-grid">
              {posts.map((post) => (
                <BlogPostCard post={post} key={post.id || post.slug || post.title} />
              ))}
            </div>
            <div className="ad-column">
              <AdSlot />
              <AdSlot label="Sponsored Space" />
            </div>
          </div>
        </section>

        <section className="section youtube-section">
          <div className="section-heading">
            <p className="eyebrow">Latest Uploads</p>
            <h2>{youtubeChannel.name}</h2>
          </div>
          <div className="youtube-panel">
            {latestVideo.videoId ? (
              <iframe
                title={latestVideo.title}
                src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <a className="latest-video-link" href={youtubeChannel.videosUrl} target="_blank" rel="noreferrer">
                <span>Latest Video</span>
                <strong>{latestVideo.title}</strong>
              </a>
            )}
            <div className="youtube-copy">
              <h3>Videos, Shorts & Reels</h3>
              <p>Open the latest videos, shorts, playlists, and posts from my channel.</p>
              <a className="button primary" href={youtubeChannel.url} target="_blank" rel="noreferrer">
                Open YouTube Channel
              </a>
            </div>
          </div>

          <div className="youtube-tabs" aria-label="YouTube tabs">
            {tabs.map((tab) => (
              <button
                className={activeYoutubeTab === tab.id ? 'active' : ''}
                key={tab.id}
                type="button"
                onClick={() => setActiveYoutubeTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab.items.length > 0 ? (
            <div className={`youtube-grid ${activeTab.id === 'shorts' ? 'shorts-grid' : ''}`}>
              {activeTab.items.map((item) => (
                <YouTubeCard item={item} key={item.videoId || item.title} type={activeTab.id} />
              ))}
            </div>
          ) : (
            <a className="youtube-empty" href={activeTab.url} target="_blank" rel="noreferrer">
              Open {activeTab.label} on YouTube
            </a>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;
