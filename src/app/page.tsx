'use client'
import React, { useState, useEffect } from 'react'
import { getData, saveData, observeData } from '../utils/firestore'

// Function to save data to firestore
const saveDataToFirestore = async (inputValue: Object) => {
  const { error } = await saveData('video', 'video1', inputValue)
  if (error) {
    console.log(error)
  }
}

export default function HomePage () {
  const [inputValue, setInputValue] = useState({ count: 0 })
  useEffect(() => {
    getData('video', 'video1')
      .then((videoData: any) => {
        try {
          console.log(videoData.data.data())
        } catch (error) {
          console.log(error)
          saveDataToFirestore({ count: 0 })
        }
      })
    observeData('video', 'video1', (data: any) => setInputValue(data))
  }, [])

  return (
    <div>
      <h1>Home Page</h1>
      <p>Visitas: {inputValue.count}</p>
      <button onClick={() => saveDataToFirestore({ count: inputValue.count + 1 })}>+</button>
    </div>
  )
}
