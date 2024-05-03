import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { LuPencil } from 'react-icons/lu'

const RightSidebarProfile = () => {
  return (
    <div className="mt-5">
      <div className='flex'>
        <div className="flex w-full flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
          <div className='flex p-3 justify-between border-b'>
            <div>
              <p className='font-semibold'>Profile Language</p>
              <p className='text-sm text-stone-500'>English</p>
            </div>
            <div>
              <LuPencil size={24} />
            </div>
          </div>
          <div className='flex p-3 justify-between border-b'>
            <div>
              <p className='font-semibold'>Public profile & URL</p>
              <p className='text-sm text-stone-500'>www.linkedin.com/in/jaspal-prajapati-b3b56b139</p>
            </div>
            <div>
              <LuPencil size={24} />
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

export default RightSidebarProfile