import React, { useState, useRef } from 'react'
import { saveDataToFirestore } from '../utils/saveCount'

const VideoPage = ({
  countData
}: {
  countData: number
}) => {
  const [videoViewed, setVideoViewed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video) return

    const percent = (video.currentTime / video.duration) * 100
    if (percent > 60 && !videoViewed) {
      updateViewCount()
      setVideoViewed(true) // Avoid duplicate counts
    } else if (percent < 5) {
      setVideoViewed(false) // Reset the state to enable counting views again
    }
  }

  const updateViewCount = async () => {
    saveDataToFirestore({ count: countData + 1 })
  }

  return (
    <video
      ref={videoRef}
      onTimeUpdate={handleTimeUpdate}
      controls
      autoPlay
      src='/video/iamgroot.mp4'
    />
  )
}

export default VideoPage
