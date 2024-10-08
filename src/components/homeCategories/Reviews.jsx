import { useWindowSize } from "react-use"

const Reviews = ({ posts }) => {
  const { width } = useWindowSize();

  return (
    <div className=' flex-[1]'>
        <div className=' '>
            <h2 className=' border-b border-b-blue-500'>
                <span className=' w-fit bg-blue-500 text-white px-6 py-2 font-bold'>REVIEWS</span>
            </h2>
            <ul className=' mt-5 grid md:grid-cols-2 gap-5'>
                {posts.slice(0, width < 768 ? 5 : 2).map((post) => (
                    <li key={post.id}>
                        <img 
                          src={post.imageUrl} 
                          alt="post.title"
                          className=' h-40 md:h-32 w-full object-cover mb-2'
                        />
                        <h3 className=' font-medium text-lg leading-5'>{post.title}</h3>
                    </li>
                ))}
            </ul>
            <button className=' bg-gray-500 hover:bg-gray-600 w-full text-white py-2 rounded-md mt-5'>
                More Reviews
            </button>
        </div>
    </div>
  )
}

export default Reviews