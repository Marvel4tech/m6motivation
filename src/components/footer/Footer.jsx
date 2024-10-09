import React from 'react'
import { FcIdea } from 'react-icons/fc'

const Footer = () => {
  return (
    <footer className=" px-4 md:px-5 border-t border-t-yellow-500 mt-14">
        <div className=' max-w-6xl mx-auto py-10 grid md:grid-cols-3'>
            <div>
                <div className=" flex flex-col items-center ">
                    <FcIdea className=" text-4xl " />
                    <h2 className=" font-mono font-bold">m6motivation</h2>
                </div>
                <div>
                    <p>
                        TechArena24 brings you the best of tech from around the globe!
                    </p>
                </div>
            </div>
            <div>
                col 2
            </div>
            <div>
                col 3
            </div>
        </div>
    </footer>
  )
}

export default Footer