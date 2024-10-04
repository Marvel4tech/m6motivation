import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';


const Create = () => {

  return (
    <div className=' px-4 md:px-5 mt-8'>
        <div className=" max-w-6xl mx-auto">
            <form>
                <input
                  type="text"
                  placeholder=" title"
                />
                <ReactQuill
                  theme="snow"
                />
            </form>
        </div>
    </div>
  )
}

export default Create