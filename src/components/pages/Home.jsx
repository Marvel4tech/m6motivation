import React, { useEffect } from 'react'
import Trending from '../homeCategories/Trending'
import Reviews from '../homeCategories/Reviews'
import LatestPosts from '../homeCategories/LatestPosts'
import useStore from '../../store'

const Home = () => {
  const { posts, fetchPosts } = useStore()

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className=' px-4 md:px-5 mt-8'>
        <div className=' max-w-6xl mx-auto flex flex-col-reverse md:flex-col gap-10'>
            <div className=' flex flex-col md:flex-row gap-5'>
                <Trending />
                <Reviews />
            </div>
            <div>
                <LatestPosts />
            </div>
        </div>
    </div>
  )
}

export default Home