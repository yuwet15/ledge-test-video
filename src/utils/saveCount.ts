import type { VideoData } from 'myTypes'
import { saveData } from './firestore'

// Function to save data to firestore
export async function saveDataToFirestore (data: VideoData) {
  try {
    const { error } = await saveData('video', 'video1', data)
    if (error) {
      console.error(error)
    }
  } catch (error) {
    console.error(error)
  }
}
