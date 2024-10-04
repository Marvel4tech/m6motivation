import { useState } from "react";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';


const Create = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [imagePreview, setImagePreview] = useState()

  // Categories
  const categories = ['TRENDING', 'REVIEWS', 'LEAKS']

  const handleCheckBoxChange = (category) => {
      setSelectedCategories((prev) => 
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
  }

  // Image Preview
  const handleImagePreview = () => {
    
  }

  // Custom details for React Quills Text Editor - font, size, color, bg-color, and align options
  const sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Normal', value: 'false' },
    { label: 'Large', value: 'large' },
    { label: 'Huge', value: 'huge' },
  ]

  const colorOptions = [
    { label: 'Red', value: 'red' },
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
    <div className=' px-4 md:px-5 mt-8'>
        <div className=" max-w-6xl mx-auto">
            <form>
                <input
                  className=" border-[1.5px] border-gray-300 w-full py-3 px-4"
                  type="text"
                  placeholder=" title"
                />
                <ReactQuill
                  theme="snow"
                  modules={modules}
                  placeholder=" content"
                />
                <div className=" border-[1.5px] border-gray-300 flex flex-col font-medium p-4">
                  {categories.map((category) =>(
                    <label className=" text-sm py-2" key={category}>
                      <input 
                        type="radio"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCheckBoxChange(category)}
                      />
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </label>
                  ))} 
                </div>
                <div className=" bg-red-500">
                    <img 
                      src={imagePreview} 
                      alt="Preview"
                      className=" max-h-[300px] w-[100%] object-cover"
                    />
                </div>
                <input 
                  type="file"
                  accept="image/"
                  onChange={handleImageChange}
                  required
                />
            </form>
        </div>
    </div>
  )
}

export default Create