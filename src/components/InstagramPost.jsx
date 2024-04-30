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

  if (!post) return <p className="text-center text-secondary text-lg font-laila">Loading...</p>;

  return (
    <div className="w-auto h-auto bg-white flex flex-col xl:flex-row mt-8 xl:mt-20 justify-center items-center xl:gap-x-32 ">
            <div className="flex flex-col">

            <div className="flex flex-col gap-y-8">
                <div className=" text-3xl xl:text-5xl text-secondary font-kalam font-bold text-center">Post Instagram</div>
                <p className="font-laila text-[#74A7BE] text-xl xl:text-2xl font-bold text-center px-4 xl:px-0">Retrouvez toutes nos publications
                    Instagram. <br />
                    Photos et story de nos meilleurs
                    moments !</p>
            </div>
            </div>
    <div className='h-auto w-auto xl:w-[390px] flex flex-col border-2 border-gray-300 rounded-lg shadow-xl mt-6 xl:mt-0'>
        <div className='flex flex-row justify-between items-center px-4 mt-4 h-auto w-auto'>
                <img src={Avatar} alt="Avatar" className='h-auto w-auto object-cover' />
                <BsThreeDots />    
        </div>
      <div className="max-w-sm xl:max-w-xl mt-4">
        <img src={post.media_url} alt={post.caption} className="w-full" />
        <div className="flex space-x-4 py-2 p-4">
          <FaHeart className="text-red-500" />
          <FaComment />
          <FaShareSquare />
        </div>
        <p className="text-sm px-4 py-2 overflow-hidden text-ellipsis text-nowrap xl:text-wrap">{post.caption}</p>
        <p className='text-gray-400 text-sm px-4'>View all 16 comments</p>
        <div className='flex justify-center items-center'>
        <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="text-secondary text-center underline py-2">
          Rejoins-nous sur instagram!
        </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default InstagramPost;
