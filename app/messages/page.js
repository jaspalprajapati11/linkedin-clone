import React from 'react'
import Navbar from '../components/Common/navbar'
import FeedpageMessages from '../components/Messages/feedpageMessages'
import RightsidebarMessages from '../components/Messages/rightsidebarMessages'

const Messages = () => {
  return (
    <div className="flex flex-col bg-stone-200">
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="flex w-full justify-center mt-3">
        <div className="w-11/12 flex justify-between">
          <div className="basis-11/12">
            <FeedpageMessages />
          </div>
          <div className="basis-96 ml-5">
            <RightsidebarMessages />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages