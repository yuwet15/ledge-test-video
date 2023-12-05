'use client'
import React, { useState, useEffect } from 'react'
import { getData, observeData } from '../utils/firestore'
import { saveDataToFirestore } from '../utils/saveCount'
import type { VideoData } from 'myTypes'

import Video from '../components/Video'
import { FaEye } from 'react-icons/fa'

export default function HomePage () {
  const [videoCount, setVideoCount] = useState<VideoData>({ count: 0 })

  useEffect(() => {
    async function fetchData () {
      try {
        const videoData = await getData('video', 'video1')
        if (!videoData?.data?.data()) {
          saveDataToFirestore({ count: 0 })
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
    observeData('video', 'video1', (data: VideoData) => setVideoCount(data))
  }, [])

  return (
    <div className='bg-zinc-900 flex flex-col w-screen h-screen py-5 items-center '>
      <h1 className='text-center text-3xl md:text-5xl text-white mb-4'>I'm Groot</h1>
      <div className='flex justify-center 2xl:w-8/12 xl:w-9/12 lg:w-10/12 w-11/12 rounded-3xl overflow-hidden drop-shadow-2xl'>
        <Video countData={videoCount.count} />
      </div>
      <div className='flex flex-row justify-center items-center my-4'>
        <FaEye color='white' />
        <h2 className='text-center text-white text-xl ms-2'>
          {videoCount.count}
        </h2>
      </div>
    </div>
  )
}
