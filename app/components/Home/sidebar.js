import Image from 'next/image'
import { FaBookmark } from "react-icons/fa";



const Sidebar = () => {
  return (
    <div className='flex flex-col items-center mt-5'>
      <div>
        {/* <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="ui/ux review check"
               />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              UI/UX Review Check
            </h4>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              Because it&apos;s about motivating the doers. Because I&apos;m here to
              follow my dreams and inspire others.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3">
              <img alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
              <img alt="Tania Andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
            </div>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              January 10
            </p>
          </div>
        </div> */}

        <div className="relative flex w-56 flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className='h-16 overflow-hidden bg-clip-border'>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="ui/ux review check"
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
            <h6 className="block font-sans text-md antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
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