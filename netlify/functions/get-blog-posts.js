exports.handler = async () => {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL;
  const apiKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.REACT_APP_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Blog reading is not configured yet.' }),
    };
  }

  const normalizedSupabaseUrl = supabaseUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');

  const response = await fetch(
    `${normalizedSupabaseUrl}/rest/v1/blog_posts?select=*&is_published=eq.true&order=published_at.desc`,
    {
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: await response.text() }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60',
    },
    body: JSON.stringify(await response.json()),
  };
};
