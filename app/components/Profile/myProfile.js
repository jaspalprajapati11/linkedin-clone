import Image from 'next/image'
import React from 'react'
import { LuPencil } from "react-icons/lu"
import { IoDiamond } from "react-icons/io5";



const MyProfile = () => {
  return (
    <div className='mb-8'>
      <div className="mt-5 relative flex flex-col overflow-hidden rounded-xl bg-white bg-clip-bordershadow-md">
        <div className='overflow-hidden bg-clip-border'>
          <Image
            src='/cover.jfif'
            alt="ui/ux review check"
            width={1000}
            height={100}
          />
        </div>
        <div className="relative m-0 overflow-hidden -top-20 left-4 bg-transparent rounded-none shadow-none bg-clip-border">
          <div className="flex items-center">
            <div className=" h-36 w-36 rounded-full object-fill border-4 border-white">
              <Image
                src={'/Jaspal.jpeg'}
                width={500}
                height={500}
                alt="Picture of the author"
                className="rounded-full items-stretch"
              />
            </div>
          </div>
        </div>
        <div className='flex -mt-20 mb-5'>
          <div className='basis-11/12'>
            <div className="flex flex-col p-3 ml-3">
              <h6 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
                Jaspal Prajapati
              </h6>
              <p className="block font-sans text-md antialiased font-normal leading-relaxed">
                Software Engineer | ReactJS | React Native | NextJs
              </p>
              <p className="block font-sans text-sm antialiased font-normal leading-relaxed text-stone-500">
                Bengaluru, Karnataka, India
              </p>
              <p className="block font-sans text-sm antialiased font-semibold leading-relaxed text-sky-700">
                381 followers • 365 connections
              </p>
            </div>
            <div className='flex p-3 ml-3 gap-2 -mt-3'>
              <div className='flex bg-sky-700 w-24 h-8 justify-center items-center rounded-2xl'>
                <p className='text-md text-center font-medium text-white p-2'>
                  Open to
                </p>
              </div>
              <div className='flex border-2 border-sky-700 min-w-28 h-8 justify-center items-center rounded-2xl'>
                <p className='text-md text-center text-sky-700 font-medium p-2'>
                  Add Profile Section
                </p>
              </div>
              <div className='flex border-2 border-stone-500 w-24 h-8 justify-center items-center rounded-2xl'>
                <p className='text-md text-center font-medium'>
                  More
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 mr-3 -mt-9'>
            <div className='flex justify-end mr-2'>
              <LuPencil size={24} />
            </div>
            <div className='flex gap-2'>
              <div className="h-8 w-8">
                <Image
                  src={'/facebookLogo.png'}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="items-stretch"
                />
              </div>
              <div className=' w-48'>
                <h6 className="block font-sans text-sm antialiased font-semibold leading-snug tracking-normal mt-1">
                  Facebook
                </h6>
              </div>
            </div>
            <div className='flex gap-2'>
              <div className="h-8 w-8">
                <Image
                  src={'/lovely.jfif'}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="items-stretch"
                />
              </div>
              <div className='w-48'>
                <h6 className="block font-sans text-sm antialiased font-semibold leading-snug tracking-normal mt-1">
                  Lovely Professional University
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-bordershadow-md">
        <div className='flex p-5 justify-between'>
          <div>
            <p className='text-lg font-semibold'>About</p>
          </div>
          <div>
            <LuPencil size={24} />
          </div>
        </div>
        <div className='p-5'>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quas ratione incidunt deleniti corrupti officiis, earum necessitatibus porro debitis nesciunt, fugit cupiditate, vero amet doloribus temporibus magni exercitationem quos eaque. Assumenda placeat, debitis delectus ab, quis beatae illum quas provident non veniam perspiciatis maiores, odit perferendis praesentium nobis possimus exercitationem!</p>
        </div>
        <div className='flex flex-col w-11/12 self-center h-20 rounded-xl border-2 mb-5'>
          <div className='flex gap-4 mt-4 ml-6'>
            <IoDiamond size={20} />
            <p>Top Skills</p>
          </div>
          <div className='ml-16'>
            <p className='text-sm text-stone-500'>ReactJs • NextJs • NodeJs • Mongodb </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile