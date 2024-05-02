import Image from 'next/image'
import { FaBookmark } from "react-icons/fa";



const Sidebar = () => {
  return (
    <div className='flex flex-col items-center mt-5'>
      <div>
        <div className="relative flex w-56 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
                  src={'/Jaspal.jpeg'}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="rounded-full items-stretch"
                />
              </div>
            </div>
          </div>
          <div className="p-3 flex -mt-8 items-center flex-col border-b">
            <h6 className="block font-sans text-md antialiased font-semibold leading-snug tracking-normal">
              Jaspal Prajapati
            </h6>
            <p className="block mt-1 font-sans text-xs text-center antialiased font-normal leading-relaxed text-gray-700">
              Software Engineer | ReactJS | React Native | NextJs
            </p>
          </div>
          <div className='flex flex-col border-b'>
            <div className='flex justify-between p-3'>
              <div>
                <p className='text-xs font-medium text-stone-500'>Profile viewers</p>
              </div>
              <div>
                <p className='text-xs font-medium text-blue-700'>24</p>
              </div>
            </div>
            <div className='flex justify-between p-3 -mt-4'>
              <p className='text-xs font-medium text-stone-500'> View all analytics</p>
            </div>
          </div>
          <div className='flex p-3 border-b'>
            <div>
              <p className='text-xs font-light text-stone-500'>Unlock Premium tools & insights</p>
              <p className='text-xs font-medium'>Try Premium for ₹0</p>
            </div>
          </div>
          <div>
            <div className='p-3 border-b'>
              <div className='flex'>
                <FaBookmark className='text-stone-500 mr-2' size ={16}/>
                <p className='text-xs font-medium'>My items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>Second card</div> */}
    </div>
  )
}

export default Sidebar