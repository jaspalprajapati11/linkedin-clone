import React from 'react'
import Navbar from '../components/Common/navbar'
import MyProfile from '../components/Profile/myProfile'
import RightSidebarProfile from '../components/Profile/rightsidebarProfile'

const Profile = () => {
  return (
    <div className="flex flex-col bg-stone-200 min-h-screen">
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="flex w-full justify-center mt-3">
        <div className="w-11/12 flex justify-between">
          <div className="basis-11/12">
            <MyProfile />
          </div>
          <div className="basis-96 ml-5">
            <RightSidebarProfile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile