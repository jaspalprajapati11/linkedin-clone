import React from 'react'
import Navbar from '../components/Common/navbar'
import SidebarJobs from '../components/Jobs/sidebarJobs'
import FeedpageJobs from '../components/Jobs/feedpageJobs'
import RightsidebarJobs from '../components/Jobs/rightsidebarJobs'

const Jobs = () => {
  return (
    <div className="flex flex-col bg-stone-200 min-h-screen">
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="flex w-full justify-center mt-3">
        <div className=" w-11/12 h-screen flex justify-between">
          <div className="border basis-86 pl-2">
            <SidebarJobs />
          </div>
          <div className="grow ml-5">
            <FeedpageJobs />
          </div>
          <div className="basis-96 ml-5">
            <RightsidebarJobs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs