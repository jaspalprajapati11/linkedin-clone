import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { HiMiniUsers } from "react-icons/hi2";
import { BsBagDashFill } from "react-icons/bs";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { BsRecordCircleFill } from "react-icons/bs";
import Link from 'next/link';



const Navbar = () => {
    return (
        <div className='h-14'>
            <nav className="flex">
                <div className="flex h-14 basis-96 ml-3 items-center justify-end">
                    <Link href={'/'}>
                        <div>
                            <FaLinkedin color="#0a66c2" size={38} />
                        </div>
                    </Link>
                    <div className="relative ml-2 rounded-md shadow-sm ">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">
                                <FaSearch color='#54656f' size={15} />
                            </span>
                        </div>
                        <input type="text" name="chat" id="chat" className="bg-slate-100 block w-72 rounded-md border-none py-1 pl-10 pr-2 text-gray-900 ring-1 ring-inset ring-slate-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6" placeholder="Search" />
                    </div>
                </div>
                <div className="flex basis-1/3 mt-2.5 justify-between ml-32">
                    <Link href='/'>
                        <div className=" flex flex-col items-center">
                            <div className="relative ml-2 top-1 right-4 rounded-md shadow-sm">
                                <div className="rounded-full pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">
                                        <BsRecordCircleFill className='text-red-800' size={20} />
                                    </span>
                                </div>
                            </div>
                            <AiFillHome color="#191919" size={22} />
                            <p className="text-xs">Home</p>
                        </div>
                    </Link>
                    <Link href='/network'>
                        <div>
                            <div className="flex flex-col items-center">
                                <div className="relative ml-2 -top-1 right-1 rounded-md shadow-sm">
                                    <div className="rounded-full absolute inset-y-0 left-0 flex items-center justify-center border bg-red-800 h-5 w-5">
                                        <span className="text-white sm:text-sm">
                                            5
                                        </span>
                                    </div>
                                </div>
                                <HiMiniUsers color="#666666" size={22} />
                                <p className="text-xs">My Network</p>
                            </div>
                        </div>
                    </Link>
                    <Link href='/jobs'>
                        <div className="flex flex-col items-center">
                            <BsBagDashFill color="#666666" size={22} />
                            <p className="text-xs">Jobs</p>
                        </div>
                    </Link>
                    <Link href='/messages'>
                        <div className="flex flex-col items-center">
                            <BiSolidMessageRoundedDots color="#666666" size={22} />
                            <p className="text-xs">Messaging</p>
                        </div>
                    </Link>
                    <Link href='/notifications'>
                        <div className="flex flex-col items-center">
                            <MdNotifications color="#666666" size={22} />
                            <p className="text-xs">Notifications</p>
                        </div>
                    </Link>
                    <Link href='/profile'>
                        <div className="flex flex-col items-center -mt-0.5">
                            <div className="rounded-full h-6 w-6">
                                <Image
                                    src={'/Jaspal.jpeg'}
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                    className="rounded-full items-stretch"
                                />
                            </div>
                            <p className="text-xs">Profile</p>
                        </div>
                    </Link>
                </div>
                <div className="flex grow mt-1.5 ml-10">
                    <div className="flex flex-col items-center">
                        <PiDotsNineBold color="#666666" size={26} />
                        <p className="text-xs">For Business</p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-2 ml-5">
                        <p className="text-xs text-yellow-700">Claim one month of <br />Premium for ₹ 0</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar