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
      body: JSON.stringify({ error: 'Admin delete is not configured yet.' }),
    };
  }

  let payload;

  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid delete data.' }),
    };
  }

  if (payload.admin_password !== adminPassword) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Wrong admin password.' }),
    };
  }

  if (!payload.id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Post id is required.' }),
    };
  }

  const normalizedSupabaseUrl = supabaseUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
  const response = await fetch(`${normalizedSupabaseUrl}/rest/v1/blog_posts?id=eq.${encodeURIComponent(payload.id)}`, {
    method: 'DELETE',
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: 'return=representation',
    },
  });

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: await response.text() }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ deleted: await response.json() }),
  };
};
