import React, { useEffect, useState } from 'react';
import { FaHeart, FaComment, FaShareSquare } from 'react-icons/fa';
import { BsThreeDots } from "react-icons/bs";
import Avatar from "../assets/Avatarinfo.png"

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
    <div className='h-auto w-auto flex flex-col border-2 border-gray-300 rounded-lg shadow-xl'>
        <div className='flex flex-row justify-between items-center px-4 mt-4 h-auto w-auto'>
                <img src={Avatar} alt="Avatar" className='h-auto w-auto object-cover' />
                <BsThreeDots />    
        </div>
      <div className="max-w-xs mx-auto p-4 ">
        <img src={post.media_url} alt={post.caption} className="w-full rounded-lg" />
        <div className="flex space-x-4 py-2">
          <FaHeart className="text-red-500" />
          <FaComment />
          <FaShareSquare />
        </div>
        <p className="text-sm">{post.likes}</p>
        <p className="text-sm">{post.caption}</p>
        <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          View on Instagram
        </a>
      </div>
    </div>
  );
}

export default InstagramPost;
