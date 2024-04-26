import Image from 'next/image'
import React from 'react'

const FeedpageNotifications = () => {

  const notifications = [
    {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum architecto non earum dolores quod consectetur hic temporibus! Ipsa, cumque id officiis velit libero nostrum voluptates, natus doloremque omnis est ab.',
    icon: 'Virat.jpg',
    id: 1
  },
    {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum architecto non earum dolores quod consectetur hic temporibus! Ipsa, cumque id officiis velit libero nostrum voluptates, natus doloremque omnis est ab.',
    icon: 'Jaspal.jpeg',
    id: 2
  },
    {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum architecto non earum dolores quod consectetur hic temporibus! Ipsa, cumque id officiis velit libero nostrum voluptates, natus doloremque omnis est ab.',
    icon: 'Rohit.jpg',
    id: 3
  },
]

  return (
    <div className='flex flex-col mt-5'>
      <div className="flex max-w-[40rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
        <div className='flex'>
          <div className='basis-28'>
            <div className="flex justify-center items-center p-5 gap-3">
              <div className='flex min-w-12 h-8 justify-center items-center rounded-2xl bg-emerald-800'>
                <p className='text-md text-center font-medium text-white'>
                  All
                </p>
              </div>
              <div className='flex w-28 h-8 justify-center items-center rounded-2xl border-2 border-stone-300'>
                <p className='text-md text-center font-medium'>
                  My Posts
                </p>
              </div>
              <div className='flex w-28 h-8 justify-center items-center rounded-2xl border-2 border-stone-300'>
                <p className='text-md text-center font-medium'>
                  Mentions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[40rem] overflow-hidden rounded-xl bg-white bg-clip-border shadow-md mt-4">
        {
          notifications.map((notification) => {
            return <div key={notification.id}>
              <div className="flex p-5 gap-2">
                <div className='basis-1/8'>
                  <div className="h-14 w-14 rounded-full object-fill border border-white">
                    <Image
                      src={`/${notification.icon}`}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="rounded-full items-stretch"
                    />
                  </div>
                </div>
                <div className='grow text-sm'>
                  <p>{notification.description}</p>
                </div>
                <div className='basis-1/6 text-xs text-stone-500'>
                  <p>45m</p>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default FeedpageNotifications