import Image from 'next/image'
import React from 'react'
import { FaKey, FaLinkedin } from 'react-icons/fa6'

const RightsidebarNotifications = () => {
  return (
    <div className='flex flex-col items-center mt-5'>
      <div className='flex flex-col items-center'>
        <div className="flex w-72 flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
          <div className='flex flex-col border-b'>
            <div className='flex p-5'>
              <p className='text-xs text-center text-stone-500'>Jaspal, unlock your full potential with Linkedin Premium</p>
            </div>
            <div className='flex flex-row justify-center'>
              <div className="h-16 w-16 rounded-full object-fill border border-white">
                <Image
                  src={'/Jaspal.jpeg'}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="rounded-full items-stretch"
                />
              </div>
              <div className='flexitems-center ml-3 mt-1'>
                <FaKey size={50} color='#A7CEE4' style={{ transform: 'rotate(90deg)' }} />
              </div>
            </div>
            <div className='flex p-5'>
              <p className='text-md text-center text-stone-500'>
                See has viewed your profile in the last 90 days
              </p>
            </div>
            <div className='flex justify-center mb-6 -mt-3'>
              <div className='flex border border-sky-700 w-28 h-8 justify-center items-center rounded-2xl'>
                <p className='text-md text-center font-medium text-sky-700'>
                  Try for Free
                </p>
              </div>
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

export default RightsidebarNotifications