import React from 'react'

const Reviews = ({ posts }) => {
  return (
    <div className=' flex-[1]'>
        <div className=' '>
            <h2 className=' border-b border-b-blue-500'>
                <span className=' w-fit bg-blue-500 text-white px-6 py-2 font-bold'>REVIEWS</span>
            </h2>
            <ul className=' mt-5'>
                {posts.map((post) => (
                    <li key={post.id}>
                        <img 
                          src={post.imageUrl} 
                          alt="post.title"
                          className=' h-40 w-full object-cover'
                        />
                        <h3 className=' font-semibold text-lg'>{post.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Reviews