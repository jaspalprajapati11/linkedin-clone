import React from 'react'

const SidebarNotifications = () => {
  return (
    <div className='flex flex-col items-center mt-5'>
      <div>
        <div className="p-5 flex w-56 flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
          <p className='font-semibold'>Manage your Notifications</p>
          <p className='font-semibold text-sm mt-2 text-blue-600'>View Settings</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarNotifications