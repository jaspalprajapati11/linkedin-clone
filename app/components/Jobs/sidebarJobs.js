import Image from 'next/image'
import { FaBookmark } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import { MdFactCheck } from "react-icons/md";
import { BsFileCheck } from "react-icons/bs";
import { BsFileCheckFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";



const SidebarJobs = () => {
  return (
    <div className='flex flex-col items-center mt-5'>
      <div>
        <div className="p-5 flex gap-6 w-56 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className='flex items-center gap-2'>
            <FaBookmark size={18} />
            <p className='font-normal'>My Jobs</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaList size={20} />
            <p className='font-normal'>Preferences</p>
          </div>
          <div className='flex items-center gap-2'>
            <BsFileCheckFill size={20} />
            <p className='font-normal'>Skill Assessments</p>
          </div>
          <div className='flex items-center gap-2'>
            <MdArticle size={24} />
            <p className='font-normal'>Interview Prep</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaYoutube size={20} />
            <p className='font-normal'>Job seeker guidance</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mb-5 mt-3 '>
        <div className='flex border gap-1 border-blue-500 w-56 h-12 justify-center items-center rounded-3xl'>
          <div>
            <FaPenToSquare size={20} className='text-blue-500' />
          </div>
          <div className='ml-1'>
            <p className='text-sm text-center font-medium text-blue-500'>
              Post a free job
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarJobs