import { useParams } from "react-router-dom"
import useStore from "../../store"
import { useEffect } from "react"
import DOMPurify from "dompurify"



const PostDetails = () => {
    const { id } = useParams()
    const { singlePost, fetchSinglePost } = useStore()

    useEffect(() => {
        if (!singlePost || singlePost.id !== id) {
          fetchSinglePost(id)
        }
      }, [id, singlePost])

    if (!singlePost) {
        return <div>Post not found</div>
    }

    const date = new Date(singlePost.date);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;

  return (
     <div className=' px-4 md:px-5 mt-32'>
        <div className=" max-w-6xl mx-auto flex gap-10">
            <div className=" flex-[2]">
                <h1 className="">
                    {singlePost.title}
                </h1>
                <span>{formattedDate}</span>
                <img 
                    src={singlePost.imageUrl}
                    alt={singlePost.title}
                />
                <p 
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(
                        singlePost.content.replace(/<(?!p|span).*?>|<br\/?>/g, '')
                    )}}
                />
            </div>
            <div className=" border flex-[1]">
                Advertisment
            </div>
        </div>
    </div>
  )
}

export default PostDetails