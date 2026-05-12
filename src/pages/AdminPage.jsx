import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { createBlogPost, createSlug, deleteBlogPost, fetchBlogPosts, supabaseConfig } from '../services/cms';
import '../styles/admin.css';

function AdminPage() {
  const [formStatus, setFormStatus] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [posts, setPosts] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState('');
  const isConnected = Boolean(supabaseConfig.url && supabaseConfig.anonKey);

  const loadPosts = () => {
    fetchBlogPosts()
      .then(setPosts)
      .catch(() => setPosts([]));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSaving(true);
    setFormStatus('');

    const formData = new FormData(form);
    const title = formData.get('title').trim();
    const excerpt = formData.get('excerpt').trim();
    const content = formData.get('content').trim();
    const category = formData.get('category').trim() || 'Blog';
    const youtubeUrl = formData.get('youtube_url').trim();
    const coverImage = formData.get('cover_image').trim();
    const adminPassword = formData.get('admin_password').trim();
    const slugBase = createSlug(title) || 'post';

    const post = {
      title,
      slug: `${slugBase}-${Date.now()}`,
      excerpt,
      content,
      category,
      youtube_url: youtubeUrl,
      cover_image: coverImage,
      admin_password: adminPassword,
      is_published: true,
      published_at: new Date().toISOString(),
    };

    try {
      await createBlogPost(post);
      form.reset();
      setFormStatus('Post published. It will appear on the blog for visitors.');
      loadPosts();
    } catch (error) {
      setFormStatus(error.message || 'Post could not be published.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (post) => {
    const adminPassword = window.prompt(`Admin password to delete "${post.title}"`);
    if (!adminPassword) return;

    try {
      await deleteBlogPost(post.id, adminPassword);
      setDeleteStatus('Post deleted.');
      setPosts((currentPosts) => currentPosts.filter((item) => item.id !== post.id));
    } catch (error) {
      setDeleteStatus(error.message || 'Post could not be deleted.');
    }
  };

  return (
    <div className="site-shell admin-shell">
      <Header />
      <main>
        <section className="admin-hero">
          <p className="eyebrow">Admin Panel</p>
          <h1>Publish Blog Posts</h1>
          <p>Write a post once and show it live on the blog from Supabase.</p>
        </section>

        <section className="section admin-layout">
          <form className="admin-form" onSubmit={handleSubmit}>
            <label>
              Title
              <input type="text" name="title" placeholder="Post title" required />
            </label>
            <label>
              Short Description
              <textarea name="excerpt" rows="3" placeholder="Small summary for the blog card" required />
            </label>
            <label>
              Full Post
              <textarea name="content" rows="8" placeholder="Write your full blog content" required />
            </label>
            <div className="form-row">
              <label>
                Category
                <input type="text" name="category" placeholder="Travel, Update, YouTube" />
              </label>
              <label>
                Cover Image URL
                <input type="url" name="cover_image" placeholder="https://..." />
              </label>
            </div>
            <label>
              YouTube Video or Short URL
              <input type="url" name="youtube_url" placeholder="https://youtube.com/shorts/..." />
            </label>
            <label>
              Admin Password
              <input type="password" name="admin_password" placeholder="Your publish password" required />
            </label>
            <button className="button primary" type="submit" disabled={isSaving}>
              {isSaving ? 'Publishing...' : 'Publish Post'}
            </button>
            {formStatus && <p className="form-status">{formStatus}</p>}
            {!isConnected && (
              <p className="admin-warning">
                Supabase env vars missing: REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY.
              </p>
            )}
          </form>

          <aside className="admin-guide">
            <h2>Live Earning Setup</h2>
            <p>After Supabase is connected, every published post appears on the blog without code changes.</p>
            <ul>
              <li>Add Google AdSense after approval.</li>
              <li>Post original content regularly.</li>
              <li>Use YouTube links to increase channel watch time.</li>
              <li>Add affiliate or sponsored links inside posts.</li>
            </ul>
          </aside>
        </section>

        <section className="section admin-posts-section">
          <div className="section-heading">
            <p className="eyebrow">Manage Posts</p>
            <h2>Delete Published Posts</h2>
          </div>
          {deleteStatus && <p className="cms-status">{deleteStatus}</p>}
          <div className="admin-post-list">
            {posts.length ? (
              posts.map((post) => (
                <article className="admin-post-row" key={post.id}>
                  <div>
                    <span>{post.category || 'Blog'}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                  <button type="button" onClick={() => handleDelete(post)}>
                    Delete
                  </button>
                </article>
              ))
            ) : (
              <p className="admin-warning">No posts found yet.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminPage;
