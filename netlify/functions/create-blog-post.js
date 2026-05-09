exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const adminPassword = process.env.ADMIN_PANEL_PASSWORD;

  if (!supabaseUrl || !serviceRoleKey || !adminPassword) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Admin publishing is not configured yet.' }),
    };
  }

  let payload;

  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid post data.' }),
    };
  }

  if (payload.admin_password !== adminPassword) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Wrong admin password.' }),
    };
  }

  const post = {
    title: payload.title,
    slug: payload.slug,
    excerpt: payload.excerpt,
    content: payload.content,
    category: payload.category || 'Blog',
    cover_image: payload.cover_image || null,
    youtube_url: payload.youtube_url || null,
    is_published: true,
    published_at: payload.published_at || new Date().toISOString(),
  };

  const response = await fetch(`${supabaseUrl}/rest/v1/blog_posts`, {
    method: 'POST',
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify([post]),
  });

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: await response.text() }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ post: await response.json() }),
  };
};
