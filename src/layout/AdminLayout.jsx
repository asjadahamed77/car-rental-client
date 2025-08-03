import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='mt-[65px]'>
      <Outlet />
    </div>
  )
}

export default AdminLayout
