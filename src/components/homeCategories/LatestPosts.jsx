import DOMPurify from 'dompurify'
import React from 'react'

const LatestPosts = ({ posts }) => {
  return (
    <div className=' flex-1'>
        <div>
          <h2 className=' bg-green-500 text-white font-bold px-6 py-2 w-fit'>
              LATEST POSTS
          </h2>
          <ul className=' grid md:grid-cols-2 gap-5 md:gap-8 mt-5'>
              {posts.map((post) => {
                  const date = new Date(post.date)
                  const day = date.getDate()
                  const month = date.toLocaleString('default', { month: 'short' })
                  const year = date.getFullYear()
                  const formattedDate = `${month} ${day}, ${year}`

                  return (
                    <li key={post.id} className=' flex md:flex-col gap-3 md:gap-0'>
                        <img 
                          src={post.imageUrl} 
                          alt={post.title}
                          className=' h-20 md:h-40 object-cover w-32 md:w-full mb-2'
                        />
                        <div className=' flex-1'>
                          <h3 className=' font-semibold text-lg leading-5 mb-1'>{post.title}</h3>
                          <p className=' text-[11px] text-gray-500 mb-3'>{formattedDate}</p>
                          <p className=' hidden md:block text-sm text-gray-500'
                            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(
                              post.content.replace(/<(?!p|span).*?>|<br\/?>/g, '').substring(0, 150) + '...'
                            )}}
                          />
                        </div>
                    </li>
                  )
              })}
          </ul>
        </div>
    </div>
  )
}

export default LatestPosts