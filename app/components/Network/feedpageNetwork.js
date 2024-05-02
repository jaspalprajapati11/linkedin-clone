import Image from 'next/image'
import React from 'react'
import { BiSolidUserPlus } from "react-icons/bi";


const FeedpageNetwork = () => {


  const users = [
    {
      title: 'Rohit Sharma',
      company: 'Hitman @Indian Cricket Team',
      icon:'Rohit.jpg',
      id: 1
    },
    {
      title: 'Michael Clarke',
      company: 'Former Captain @Australian Cricket Team',
      icon:'Clarke.jpg',
      id: 2
    },
    {
      title: 'Ishan Kishan',
      company: 'Pocket Dynamite @Indian Cricket Team',
      icon:'Ishan.jpg',
      id: 3
    },
    {
      title: 'David Miller',
      company: 'Killer Miller @South Africa Cricket Team',
      icon:'Miller.jpg',
      id: 4
    },
    {
      title: 'AB de Villiers',
      company: 'Mr. 360 @South Africa Cricket Team',
      icon:'Abd.jpg',
      id: 5
    },
    {
      title: 'Surya Kumar Yadav',
      company: 'Sky 360 @Indian Cricket Team',
      icon:'Sky.png',
      id: 6
    },
    {
      title: 'Jasprit Bumrah',
      company: 'Boom Boom @Indian Cricket Team',
      icon:'Bumrah.jpg',
      id: 7
    },
    {
      title: 'Glenn Maxwell',
      company: 'The Big Show @Australian Cricket Team',
      icon:'Maxwell.jpg',
      id: 8
    },
  ]

  return (
    <div className='flex flex-col items-center mt-5'>
      <div className='w-full'>
        <div className="flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
          <div className='flex h-16 ml-5 items-center'>
            <p className='text-md font-bold ml-5'>Grow</p>
            <p className='text-md font-bold ml-5'>Catch up</p>
          </div>
        </div>
      </div>
      <div className='w-full mt-5'>
        <div className="flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
          <div className='flex h-16 p-5 items-center justify-between'>
            <p className='text-md text-stone-500'>No pending invitation</p>
            <p className='text-md font-semibold text-stone-500'>Manage</p>
          </div>
        </div>
      </div>
      <div className='w-full mt-5'>
        <div className="flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
          <div className='flex h-16 p-5 items-center justify-between'>
            <p className='text-md text-stone-500'>People you may know from Indian Cricket Team</p>
            <p className='text-md font-semibold text-stone-500'>See all</p>
          </div>
          <div className='grid grid-cols-4 gap-4 h-full p-5'>
            {
              users.map((user) => {
                return <div key ={user.id} className="flex w-48 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <div className='h-16 overflow-hidden bg-clip-border'>
                    <Image
                      src='/cover.jfif'
                      alt="ui/ux review check"
                      width={300}
                      height={50}
                    />
                  </div>
                  <div className="relative m-0 overflow-hidden -top-10 text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <div className=" flex justify-center items-center">
                      <div className=" h-20 w-20 rounded-full object-fill border border-white">
                        <Image
                          src={`/${user.icon}`}
                          width={500}
                          height={500}
                          alt="Picture of the author"
                          className="rounded-full items-stretch"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex -mt-10 h-20 items-center flex-col">
                    <h6 className="block font-sans text-md antialiased font-semibold leading-snug tracking-normal">
                      {user.title}
                    </h6>
                    <p className='text-xs mt-1 text-center text-stone-500'>
                      {user.company}
                    </p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-xs mt-1 text-center text-stone-500'>
                      60 mutual connections
                    </p>
                  </div>
                  <div className='flex justify-center mb-5 mt-3 '>
                    <div className='flex border-2 border-sky-700 w-36 h-8 justify-center items-center rounded-3xl'>
                      <div>
                        <BiSolidUserPlus size={20} className='text-sky-700' />
                      </div>
                      <div className='ml-1'>
                        <p className='text-md text-center font-medium text-sky-700'>
                          Connect
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedpageNetwork