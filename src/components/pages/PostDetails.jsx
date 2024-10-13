import { useParams } from "react-router-dom"
import useStore from "../../store"
import { useEffect } from "react"



const PostDetails = () => {
    const { id } = useParams()
    const { singlePost, fetchSinglePost } = useStore()

    useEffect(() => {
        fetchSinglePost(id)
    }, [id])

    if (!singlePost) {
        return <div>Post not found</div>
    }

  return (
     <div className=" mt-32">
        <div className="">
            <h1 className=" text-red-700">{singlePost.title}</h1>
        </div>
    </div>
  )
}

export default PostDetails