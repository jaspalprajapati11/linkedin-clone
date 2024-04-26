import Image from 'next/image'
import { IoImageSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaRegThumbsDown } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";



const Feedpage = () => {
    return (
        <div className='flex flex-col mt-5'>
            <div className="flex max-w-[40rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className='flex basis-32'>
                    <div className='basis-28'>
                        <div className=" flex justify-center items-center mt-3">
                            <div className=" h-16 w-16 rounded-full object-fill border border-white">
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
                    <div className='flex flex-col grow'>
                        <div className='flex basis-1/2 items-center justify-center'>
                            <div className='h-12 w-11/12 border border-black rounded-3xl'>
                                <p className='p-3 text-sm font-medium'>Start a post, try writing with AI</p>
                            </div>
                        </div>
                        <div className='flex justify-between p-4 mr-10'>
                            <div className='flex'>
                                <IoImageSharp className='text-sky-500 mr-2' size={24} />
                                <p className='font-medium text-base'>Media</p>
                            </div>
                            <div className='flex'>
                                <FaCalendarAlt className='text-yellow-600 mr-2' size={24} />
                                <p className='font-medium text-base'>Events</p>
                            </div>
                            <div className='flex'>
                                <MdArticle className='text-orange-700 mr-2' size={26} />
                                <p className='font-medium text-base'>Write article</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grow mt-4'>
                <div className="flex max-w-[40rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="basis-12 flex p-6 -mt-3 justify-between border-b">
                        <div>
                            <div className="flex items-center">
                                <div className="rounded-full h-6 w-6">
                                    <Image
                                        src={'/Virat.jpg'}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        className="rounded-full items-stretch"
                                    />
                                </div>
                                <span className='text-xs font-medium ml-2'>Virat Kohli</span>
                                <span className='text-xs ml-1'>likes this</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <HiOutlineDotsHorizontal className='mr-2' size={24} />
                                <IoClose size={24} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex p-3'>
                            <div className="rounded-full h-16 w-16">
                                <Image
                                    src={'/Virat.jpg'}
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    className="rounded-full items-stretch"
                                />
                            </div>
                            <div className='ml-2'>
                                <div className="text-sm ">
                                    <span className="font-semibold">Virat Kohli</span>
                                    <span className="text-gray-500"> • 1st</span>
                                </div>
                                <div className="text-gray-500 text-xs ">King Kohli at Indian Cricket Team, Inc</div>
                                <div className="text-gray-500 text-xs flex">
                                    <span className="inline-block">3d • Edited • </span>
                                    <svg className="inline-block ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='p-3 -mt-5'>
                            <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="text-gray-500 text-xs flex items-center -mt-3 p-3 border-b">
                            <Image className="-mr-0.5" src='/like.svg' width={16} height={16} />
                            <Image className="-mr-0.5" src='/clap.svg' width={16} height={16} />
                            <Image className="-mr-0.5" src='/heart.svg' width={16} height={16} />
                            <span className="ml-1">Rohit Sharma, Ishan Kishan and 38,980 others</span>
                            <span className="ml-32">47 comments • 26 reposts</span>
                        </div>
                        <div className='p-3 flex justify-center'>
                            <div className='w-11/12 flex justify-between'>
                                <div className='flex items-center'>
                                    <FaRegThumbsDown style={{ transform: 'rotate(180deg)' }} size={22} />
                                    <p className='mt-2 ml-2 font-medium text-sm'>Like</p>
                                </div>
                                <div className='flex items-center'>
                                    <BsChatText size={22} />
                                    <p className='mt-1 ml-2 font-medium text-sm'>Comment</p>
                                </div>
                                <div className='flex items-center'>
                                    <BiRepost size={24} />
                                    <p className='ml-2 font-medium text-sm'>Repost</p>
                                </div>
                                <div className='flex items-center'>
                                    <IoIosSend size={22} />
                                    <p className='ml-2 font-medium text-sm'>Send</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedpage