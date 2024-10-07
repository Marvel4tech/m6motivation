import React, { useEffect } from 'react'
import Trending from '../homeCategories/Trending'
import Reviews from '../homeCategories/Reviews'
import LatestPosts from '../homeCategories/LatestPosts'
import useStore from '../../store'
import Comparisons from '../homeCategories/Comparisons'

const Home = () => {
  const { posts, fetchPosts } = useStore()

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Filter posts by category
  const trendingPosts = posts.filter((post) => post.categories.includes('TRENDING'));
  const reviewPosts = posts.filter((post) => post.categories.includes('REVIEWS'));
  
  // Get all posts
  const latestPosts = posts;

  return (
    <div className=' px-4 md:px-5 mt-8'>
        <div className=' max-w-6xl mx-auto flex flex-col-reverse md:flex-col gap-10'>
            <div className=' flex flex-col md:flex-row gap-8'>
                <Trending posts={trendingPosts} />
                <Reviews posts={reviewPosts} />
            </div>
            <div className=' flex flex-col md:flex-row gap-8'>
                <LatestPosts posts={latestPosts} />
                <Comparisons />
            </div>
        </div>
    </div>
  )
}

export default Home