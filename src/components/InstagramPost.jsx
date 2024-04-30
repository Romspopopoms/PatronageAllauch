import React, { useEffect, useState } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';

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
    <DeviceFrameset device="iPhone X" color="silver">
      <div style={{ margin: 'auto', width: '90%', padding: '10px' }}>
        <h1 style={{ textAlign: 'center' }}>Latest Instagram Post</h1>
        <img src={post.media_url} alt={post.caption} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
        <p>{post.caption}</p>
        <a href={post.permalink} target="_blank" rel="noopener noreferrer">View on Instagram</a>
      </div>
    </DeviceFrameset>
  );
}

export default InstagramPost;
