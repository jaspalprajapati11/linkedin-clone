import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaPenToSquare } from 'react-icons/fa6';
import { RiVideoAddFill } from "react-icons/ri";
import { MdStarOutline } from "react-icons/md";



const FeedpageMessages = () => {
    const messageData = [
        {
            name: 'Virat Kohli',
            message: 'Lorem ipsum dolor sit amet.',
            icon: 'Virat.jpg',
            id: 1
        },
        {
            name: 'Rohit Sharma',
            message: 'Lorem ipsum dolor sit amet.',
            icon: 'Rohit.jpg',
            id: 2
        },
        {
            name: 'Michael Clarke',
            message: 'Lorem ipsum dolor sit amet.',
            icon: 'Clarke.jpg',
            id: 3
        },
        {
            name: 'Ishan Kishan',
            message: 'Lorem ipsum dolor sit amet.',
            icon: 'Ishan.jpg',
            id: 4
        },
        {
            name: 'David Miller',
            message: 'Lorem ipsum dolor sit amet.',
            icon: 'Miller.jpg',
            id: 5
        },
        {
            name: 'AB de Villiers',
            message: 'Lorem ipsum dolor sit amet.',
            icon: 'Abd.jpg',
            id: 6
        },
        {
            name: 'Surya Kumar Yadav',
            message: 'Lorem ipsum dolor sit amet.',
            icon: 'Sky.png',
            id: 7
        },
        {
            name: 'Jasprit Bumrah',
            message: 'Lorem ipsum dolor sit amet.',
            icon: 'Bumrah.jpg',
            id: 8
        },
        {
            name: 'Glenn Maxwell',
            message: 'Lorem ipsum dolor sit amet.',
            icon: 'Maxwell.jpg',
            id: 9
        },
    ]
    return (
        <div className='mb-8'>
            <div className="flex p-3 mt-5 flex-col overflow-hidden rounded-xl bg-white bg-clip-bordershadow-md">
                <div className='flex justify-between border-b'>
                    <div>
                        <p className='font-semibold'>Messaging</p>
                    </div>
                    <div className='flex gap-4'>
                        <BsThreeDots size={25} />
                        <FaPenToSquare size={20} />
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex flex-col gap-2 border-r-2 overflow-y-scroll'>
                        {
                            messageData.map((chat) => {
                                return <div className=' basis-1/3 flex mt-3' key={chat.id}>
                                    <div className='basis-1/4flex justify-center'>
                                        <div className="rounded-full h-14 w-14">
                                            <Image
                                                src={`/${chat.icon}`}
                                                width={500}
                                                height={500}
                                                alt="Picture of the author"
                                                className="rounded-full items-stretch"
                                            />
                                        </div>
                                    </div>
                                    <div className='grow ml-2 border-b'>
                                        <div className='text-md'>
                                            <p>{chat.name}</p>
                                        </div>
                                        <div className='text-sm mb-2'>
                                            <p className='text-stone-500'>{chat.message}</p>
                                        </div>
                                    </div>
                                    <div className='basis-1/6 text-xs border-b'>
                                        <p>Apr 24</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className='grow flex flex-col'>
                        <div className='flex justify-between border-b p-3'>
                            <div>
                                <p className='text-sm font-semibold'>Virat Kohli</p>
                                <p className='text-xs text-stone-500'>King Kohli @Indian Cricket Team</p>
                            </div>
                            <div className='flex gap-3'>
                                <BsThreeDots size={25} />
                                <RiVideoAddFill size={25} />
                                <MdStarOutline size={25} />
                            </div>
                        </div>


                        <div className='flex flex-col p-3 border-b'>
                            <div className="rounded-full h-14 w-14">
                                <Image
                                    src={'/Virat.jpg'}
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    className="rounded-full items-stretch"
                                />
                            </div>
                            <div className='p-2'>
                                <p className='text-sm font-semibold'>Virat Kohli</p>
                                <p className='text-sm'>King Kohli @Indian Cricket Team</p>
                            </div>
                        </div>



                        
                        {/* <div className='border-b-4 h-52'>
                            
                        </div> */}
                        {/* <div>
                            Textarea
                        </div>
                        <div>
                            Emojis and send button
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedpageMessages