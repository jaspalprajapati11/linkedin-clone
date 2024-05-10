import React from 'react'
import Navbar from '../components/Common/navbar'
import SidebarNetwork from '../components/Network/sidebarNetwork'
import FeedpageNetwork from '../components/Network/feedpageNetwork'

const MyNetwork = () => {
  return (
    <div className="flex flex-col bg-stone-200 min-h-screen">
      <nav className="bg-white sticky top-0">
        <Navbar />
      </nav>
      <div className="flex w-full justify-center mt-3">
        <div className=" w-11/12 flex justify-between">
          <div className=" basis-86 pl-2">
            <SidebarNetwork />
          </div>
          <div className="grow ml-5 w-full bg-stone-200 mb-10">
            <FeedpageNetwork />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyNetwork