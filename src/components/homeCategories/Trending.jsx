import React from 'react'

const Trending = ({ posts }) => {
  return (
    <div className=' flex-[2]'>
        <div className='  '>
            <h2 className='  border-b border-b-red-500'>
                <span className=' w-fit bg-red-500 text-white px-6 py-2 font-bold'>TRENDING</span>
            </h2>
            <ul>
                {posts.map((post) => (
                  <li key={post.id}>
                      <img src={post.imageUrl} alt={post.title} />
                      <h3>{post.title}</h3>
                      <p>{post.content}</p>
                      <p>{post.date}</p>
                  </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Trending