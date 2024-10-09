import React from 'react'

const Comparisons = ({ posts }) => {

  return (
    <div className=' flex-1'>
        <div>
            <h2 className=' bg-gray-800 text-white font-bold px-6 py-2 w-fit'>
                COMPARISONS
            </h2>
            <ul className=' mt-5 space-y-6'>
                {posts.map((post) => (
                    <li key={post.id}>
                        <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className=' h-[24rem] w-full object-cover'
                        />
                        <h3 className=' font-semibold text-xl md:text-2xl mt-2 leading-snug'>{post.title}</h3>
                    </li>
                ))}
            </ul>
            <button className=' bg-gray-500 hover:bg-gray-600 w-full text-white py-2 rounded-md mt-5'>
              More Comparisons
            </button>
        </div>
    </div>
  )
}

export default Comparisons