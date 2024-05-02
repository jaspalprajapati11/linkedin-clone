import Image from 'next/image'
import { IoImageSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FaRegThumbsDown } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


const FeedpageJobs = () => {
    const companies = [
        {
            name: 'facebook',
            icon: 'facebook.png',
            id: 1
        },
        {
            name: 'linkedin',
            icon: 'linkedin.jfif',
            id: 2
        },
        {
            name: 'coinbase',
            icon: 'coinbase.jfif',
            id: 3
        },
    ]
    return (
        <div className='flex flex-col mt-5'>
            <div className='grow'>
                <div className="flex max-w-[40rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
                    <div className="basis-12 flex p-6 -mt-3 -ml-3 justify-between">
                        <div>
                            <p className='font-bold leading-loose'>Explore oppurtunities</p>
                            <p className='text-sm text-stone-500'>Based on your profile and search history</p>
                        </div>
                    </div>
                    <div>
                        {
                            companies.map((company) => {
                                return <div className='flex p-3 border-b' key={company.id}>
                                    <div className="h-12 w-12">
                                        <Image
                                            src={`/${company.icon}`}
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            className="items-stretch"
                                        />
                                    </div>
                                    <div className='ml-2'>
                                        <div className="text-md w-56 text-blue-600 leading-relaxed">
                                            <span className="font-semibold">Mern Fullstack Developer</span>
                                        </div>
                                        <div className="text-gray-500 text-xs">webdew</div>
                                        <div className="text-gray-500 text-sm">
                                            <span className="block">India (Remote)</span>
                                            <span className="inline-block text-xs">Actively Recruiting</span>
                                        </div>
                                    </div>
                                    <div className='p-3 -mt-3 ml-52'>
                                        <RxCross2 size={20} />
                                    </div>
                                </div>
                            })
                        }
                        <div className='font-semibold text-stone-500'>
                            <p className='p-6 text-center'>Show all</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedpageJobs