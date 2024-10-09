import DOMPurify from 'dompurify'
import React from 'react'

const Trending = ({ posts }) => {

  return (
    <div className=' flex-[2]'>
        <div className=''>
            <h2 className='  border-b border-b-red-500'>
                <span className=' w-fit bg-red-500 text-white px-6 py-2 font-bold'>TRENDING</span>
            </h2>
            <ul className=' grid md:grid-cols-2 gap-5 mt-5'>
                {posts.slice(0, 6).map((post) => {
                  const date = new Date(post.date);
                  const month = date.toLocaleString('default', { month: 'short' });
                  const day = date.getDate();
                  const year = date.getFullYear();
                  const formattedDate = `${month} ${day}, ${year}`;
                
                return (
                  <li key={post.id} className=' flex gap-3'>
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className=' h-16 object-cover w-16 rounded-full mb-2'
                      />
                      <div className=''>
                        <h3 className=' font-semibold text-lg md:text-base leading-5 mb-1'>{post.title}</h3>
                        <p className=' text-[11px] text-gray-500 mb-3'>{formattedDate}</p>
                        <p className=' block text-sm text-gray-500 md:hidden'
                          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(
                            post.content.replace(/<(?!p|span).*?>|<br\/?>/g, '').substring(0, 150) + '...'
                          )}}
                        />
                      </div>
                  </li>
                )})}
            </ul>
        </div>
    </div>
  )
}

export default Trending