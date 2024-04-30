import React, { useEffect, useState } from 'react';

function InstagramPost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchInstagramPost() {
      try {
        const response = await fetch('/api/latestInstagramPost');
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching Instagram post:', error);
      }
    }

    fetchInstagramPost();
  }, []);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>Latest Instagram Post</h1>
      <img src={post.media_url} alt={post.caption} />
      <p>{post.caption}</p>
      <a href={post.permalink} target="_blank" rel="noopener noreferrer">View on Instagram</a>
    </div>
  );
}

export default InstagramPost;
