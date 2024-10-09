import React from 'react'

const NewslatterForm = () => {
  return (
    <div>
        <h5 className=' font-bold'>Subscribe to our newsletter:</h5>
        <form className=' flex bg-red-500 py-1 px-1 w-full rounded-sm'>
            <input 
                type="text"
                className=' border w-[60%] py-2 px-2 rounded-sm text-black outline-none'
                placeholder=' Enter your email'
            />
            <button className=' w-[40%] text-white' type='submit'>
                Subscribe
            </button>
        </form>
    </div>
  )
}

export default NewslatterForm