import React from 'react'
import { FcIdea } from 'react-icons/fc'
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import NewslatterForm from './newslatter/NewslatterForm'

const Footer = () => {
  return (
    <footer className=" border-t border-t-yellow-500 mt-14">
        <div className=' px-4 md:px-5'>
            <div className=' max-w-6xl mx-auto py-14 grid md:grid-cols-3 gap-5'>
                <div className=' px-5'>
                    <div className=" flex flex-col items-center mb-10">
                        <FcIdea className=" text-4xl " />
                        <h2 className=" font-mono font-bold">techIdea</h2>
                    </div>
                    <div>
                        <p>
                            TechArena24 brings you the best of tech from around the globe!
                        </p>
                        <NewslatterForm />
                    </div>
                    <div className=' flex justify-between mt-2'>
                        <FaTwitterSquare className=' text-4xl hover:text-blue-900' />
                        <FaFacebookSquare className=' text-4xl hover:text-blue-600' />
                        <FaInstagramSquare className=' text-4xl hover:text-orange-700' />
                        <FaYoutubeSquare className=' text-4xl hover:text-red-600' />
                    </div>
                </div>
                <div className=' p-5 cursor-pointer'>
                    <ul className=' space-y-5 text-sm'>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Advertise</li>
                        <li>Privacy policy</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className=' p-5 cursor-pointer'>
                    <ul className=' space-y-5 text-sm'>
                        <li>News</li>
                        <li>Reviews</li>
                        <li>Deals</li>
                        <li>Comparisons</li>
                        <li>How to</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className=' bg-slate-100 '>
            <p className=' max-w-6xl mx-auto py-2 text-sm px-4 md:px-5'>
                © 2024  TechIdea | All rights reserved | If you buy something via one of our affiliate links, TechIdea may earn a commission.
            </p>
        </div>
    </footer>
  )
}

export default Footer