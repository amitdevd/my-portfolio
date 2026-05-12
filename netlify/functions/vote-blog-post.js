exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.REACT_APP_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Voting is not configured yet.' }),
    };
  }

  let payload;

  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid vote data.' }),
    };
  }

  if (!payload.id || !['like', 'dislike'].includes(payload.vote_type)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Valid post id and vote type are required.' }),
    };
  }

  const normalizedSupabaseUrl = supabaseUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');
  const postUrl = `${normalizedSupabaseUrl}/rest/v1/blog_posts?id=eq.${encodeURIComponent(payload.id)}&select=id,likes,dislikes`;
  const headers = {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    'Content-Type': 'application/json',
  };

  const currentResponse = await fetch(postUrl, { headers });

  if (!currentResponse.ok) {
    return {
      statusCode: currentResponse.status,
      body: JSON.stringify({ error: await currentResponse.text() }),
    };
  }

  const [post] = await currentResponse.json();

  if (!post) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'Post not found.' }),
    };
  }

  const nextPost = {
    likes: Number(post.likes || 0) + (payload.vote_type === 'like' ? 1 : 0),
    dislikes: Number(post.dislikes || 0) + (payload.vote_type === 'dislike' ? 1 : 0),
  };

  const updateResponse = await fetch(`${normalizedSupabaseUrl}/rest/v1/blog_posts?id=eq.${encodeURIComponent(payload.id)}`, {
    method: 'PATCH',
    headers: {
      ...headers,
      Prefer: 'return=representation',
    },
    body: JSON.stringify(nextPost),
  });

  if (!updateResponse.ok) {
    return {
      statusCode: updateResponse.status,
      body: JSON.stringify({ error: await updateResponse.text() }),
    };
  }

  const [updatedPost] = await updateResponse.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ post: updatedPost }),
  };
};
