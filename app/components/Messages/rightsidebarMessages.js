import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'

const RightsidebarMessages = () => {
  return (
    <div className="mt-5">
            <div className='flex'>
                <div className="flex max-72 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className='flex flex-col p-3'>
                        <div>
                            <p className='font-semibold'>Linkedin News</p>
                            <ul className="list-disc pl-3 text-sm space-y-4 mt-3 ">
                                <li>
                                    <p className='font-semibold'>Top 25 companies of India this year in finance</p>
                                    <p className='text-xs'>Top News • 34,825 readers</p>
                                </li>
                                <li>
                                    <p className='font-semibold'>Google cuts jobs in AI push</p>
                                    <p className='text-xs'>4h ago • 81  ,825 readers</p>
                                </li>
                                <li>
                                    <p className='font-semibold'>Startups tap B-school talent</p>
                                    <p className='text-xs'>23h ago • 94,825 readers</p>
                                </li>
                                <li>
                                    <p className='font-semibold'>Indian brands win Gen Z hearts</p>
                                    <p className='text-xs'>1d ago • 14,825 readers</p>
                                </li>
                                <li>
                                    <p className='font-semibold'>Decoding IT trends of India</p>
                                    <p className='text-xs'>2d ago • 64,825 readers</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center h-min-20 w-72 mt-5'>
                <div className='flex flex-wrap w-52 gap-2 justify-center'>
                    <p className='text-xs text-stone-500'>About</p>
                    <p className='text-xs text-stone-500'>Accessibility</p>
                    <p className='text-xs text-stone-500'>Help Center</p>
                    <p className='text-xs text-stone-500'>Privacy & Terms</p>
                    <p className='text-xs text-stone-500'>Ad Choices</p>
                    <p className='text-xs text-stone-500'>Advertising</p>
                    <p className='text-xs text-stone-500'>Business Services</p>
                    <p className='text-xs text-stone-500'>Get the Linkedin App</p>
                    <p className='text-xs text-stone-500'>More</p>
                </div>
                <div className='flex mt-3'>
                    <p className='text-sm font-bold text-sky-700'>Linked</p>
                    <FaLinkedin color="#0a66c2" size={13} className='mt-1' />
                    <p className='text-xs mt-0.5 ml-1'>
                        Linkedln Corporation &copy; 2024
                    </p>
                </div>
            </div>
        </div>
  )
}

export default RightsidebarMessages