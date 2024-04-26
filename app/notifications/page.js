import React from 'react'
import Navbar from '../components/Common/navbar'
import SidebarNotifications from '../components/Notifications/sidebarNotifications'
import FeedpageNotifications from '../components/Notifications/feedpageNotifications'
import RightsidebarNotifications from '../components/Notifications/rightsidebarNotifications'


const Notifications = () => {
  return (
    <div className="flex flex-col bg-stone-200 min-h-screen">
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="flex w-full justify-center mt-3">
        <div className=" w-11/12 h-screen flex justify-between">
          <div className="border basis-86 pl-2">
            <SidebarNotifications />
          </div>
          <div className="grow ml-5">
            <FeedpageNotifications />
          </div>
          <div className="basis-3/12 ml-5">
            <RightsidebarNotifications />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications