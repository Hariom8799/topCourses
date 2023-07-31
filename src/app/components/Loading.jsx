import React from 'react'
import './Loading.css'

export default function Loading() {
  return (
    <div className='w-full flex flex-col items-center gap-2'>
      <div className='colorful'></div>
      <p className='text-white text-2xl'>Loading....</p>
    </div>
  )
}
