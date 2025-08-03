import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ShieldAlert } from 'lucide-react';


const ErrorHandler = () => {
    const navigate = useNavigate()
  return (
    <div className='fixed inset-0 h-screen w-screen flex items-center justify-center z-50 '>
      <div>
        <div className='flex items-center justify-center flex-col gap-4'>
<p>
            <ShieldAlert className='text-red-500 w-16 h-16' />
</p>
          <p className='text-red-500 font-medium'>Something went wrong!</p>
          <button onClick={() => navigate('/')} className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:opacity-85 duration-300 transition-opacity'>Go to Home</button>
        </div>
      </div>
    </div>
  )
}

export default ErrorHandler
