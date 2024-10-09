import React from 'react'

const NewslatterForm = () => {
  return (
    <div>
        <form>
            <label htmlFor="">
                Subscribe to our newsletter:
            </label>
            <input 
                type="text"
                className=''
            />
            <button>
                Subscribe
            </button>
        </form>
    </div>
  )
}

export default NewslatterForm