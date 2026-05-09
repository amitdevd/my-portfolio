export const supabaseConfig = {
  url: process.env.REACT_APP_SUPABASE_URL,
  anonKey: process.env.REACT_APP_SUPABASE_ANON_KEY,
};

export const adSenseClient = process.env.REACT_APP_ADSENSE_CLIENT || '';

export const fallbackBlogPosts = [
  {
    id: 'sample-post',
    title: 'Welcome to My Blog',
    slug: 'welcome-to-my-blog',
    excerpt: 'Fresh posts, videos, travel updates, and personal stories will appear here.',
    content:
      'This blog is ready for live posts from the admin panel. Connect Supabase, publish a post, and it will appear for visitors without changing code again.',
    cover_image: '',
    youtube_url: '',
    category: 'Update',
    published_at: '2026-05-07',
  },
];

export const createSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const formatDate = (value) => {
  if (!value) return 'Draft';
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value));
};

export const getYouTubeEmbedUrl = (url) => {
  if (!url) return '';
  const shortMatch = url.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/);
  const watchMatch = url.match(/[?&]v=([A-Za-z0-9_-]{11})/);
  const youtuMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  const videoId = shortMatch?.[1] || watchMatch?.[1] || youtuMatch?.[1] || '';
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
};

async function supabaseRequest(path, options = {}) {
  if (!supabaseConfig.url || !supabaseConfig.anonKey) {
    throw new Error('Supabase is not connected yet.');
  }

  const response = await fetch(`${supabaseConfig.url}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: supabaseConfig.anonKey,
      Authorization: `Bearer ${supabaseConfig.anonKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Supabase request failed.');
  }

  return response.json();
}

export async function fetchBlogPosts() {
  return supabaseRequest('blog_posts?select=*&is_published=eq.true&order=published_at.desc');
}

export async function createBlogPost(post) {
  const response = await fetch('/.netlify/functions/create-blog-post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new Error(result.error || 'Post could not be published.');
  }

  return response.json();
}
