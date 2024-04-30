import React, { useEffect, useState } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import { FaHeart, FaComment, FaShareSquare } from 'react-icons/fa';
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

  if (!post) return <p className="text-center">Loading...</p>;

  return (
    <DeviceFrameset device="iPhone X" color="silver" width={375} height={667}>
      <div className="max-w-xs mx-auto p-4">
        <img src={post.media_url} alt={post.caption} className="w-full rounded-lg" />
        <div className="flex space-x-4 py-2">
          <FaHeart className="text-red-500" />
          <FaComment />
          <FaShareSquare />
        </div>
        <p className="text-sm">{post.likes} likes</p>
        <p className="text-sm">{post.caption}</p>
        <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          View on Instagram
        </a>
      </div>
    </DeviceFrameset>
  );
}

export default InstagramPost;
