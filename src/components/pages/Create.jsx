import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { toast } from "react-toastify";
import useStore from "../../store";

const Create = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const { uploadImage, createPosts } = useStore()
  

  // Categories
  const categories = ['TRENDING', 'REVIEWS', 'LEAKS', 'COMPARISONS']

  const handleCheckBoxChange = (category) => {
      setSelectedCategories((prev) => 
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
  }

  // Image Preview
  const handleImagePreview = (e) => {
      const file = e.target.files[0];
      if (file) {
          setImage(file)
          const reader = new FileReader()
          reader.onload = () => {
            setImagePreview(reader.result)
          }
          reader.readAsDataURL(file)
      } else {
        setImage(null)
        setImagePreview(null)
      }
  };

  // Handle Submit (Post Creation)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (image) {
        const imagePath = await uploadImage(image);
        await createPosts(title, content, selectedCategories, imagePath);
        setTitle('')
        setContent('')
        setSelectedCategories([])
        setImage(null)
        toast.success('Post created successfully')
      }
    } catch (error) {
        toast.error('Error submitting post')
    }
  }

  // Custom details for React Quills Text Editor - font, size, color, bg-color, and align options
  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: '' },
    { label: 'Large', value: 'large' },
    { label: 'Huge', value: 'huge' },
  ]

  const colorOptions = [
    { label: 'Red', value: 'red' },
    { label: 'White', value: 'white' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Custom', value: '#000000' }
  ]

  const backgroundColorOptions = [
    { label: 'White', value: 'white' },
    { label: 'Black', value: 'black' },
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Transparent', value: 'transparent'},
    { label: 'Custom', value: '#ffffff' }
  ]

  const alignOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
    { label: 'Justify', value: 'justify' },
  ]

   // Toolbar configurations
  const modules = {
    toolbar: [
      [{'size': sizeOptions.map(size => size.value) }],
      [{ 'header': '1' }, { 'header': '2' }, { 'header': [3, 4, 5, 6] }, {'header': false }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': colorOptions.map(color => color.value) }, { 'background': backgroundColorOptions
          .map(backgroundColor => backgroundColor.value) }
      ],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': alignOptions.map(align => align.value) }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  return (
    <div className=' px-4 md:px-5 mt-32 mb-8'>
        <div className=" max-w-6xl mx-auto">
            <form onSubmit={handleSubmit} className=" space-y-6">
                <input
                  className=" border-[1.5px] border-gray-300 w-full py-3 px-4"
                  type="text"
                  placeholder=" title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  placeholder="Write your post here..."
                  value={content}
                  onChange={setContent}
                />
                <div className=" border-[1.5px] border-gray-300 flex flex-col font-medium p-4">
                  {categories.map((category) => (
                    <label className=" text-sm py-2" key={category}>
                      <input 
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckBoxChange(category)}
                        className=" mr-2"
                      />
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </label>
                  ))} 
                </div>
                {imagePreview && (
                  <div className=" bg-red-500">
                    <img 
                      src={imagePreview} 
                      alt="Preview"
                      className=" max-h-[300px] w-[100%] object-cover"
                    />
                  </div>
                )}
                <input 
                  type="file"
                  accept="image/*"
                  onChange={handleImagePreview}
                  required
                  className=" border w-full border-gray-300"
                />
                <button type="submit" className=" px-6 py-2 font-semibold bg-green-500 hover:bg-green-600 text-white transition-all 
                duration-300">
                  Save
                </button>
            </form>
        </div>
    </div>
  )
}

export default Create;