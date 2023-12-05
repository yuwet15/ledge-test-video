import firebaseApp from '../config/firebaseConfig'
import { getFirestore, doc, DocumentReference, DocumentData, onSnapshot, getDoc, setDoc } from 'firebase/firestore'

const db = getFirestore(firebaseApp)

// Function to observe changes in a document
function observeData (
  collection: string,
  id: string,
  callback: (data: DocumentData | null) => void
) {
  const docRef: DocumentReference<DocumentData> = doc(db, collection, id)

  // Use onSnapshot to observe changes in the document
  const unsubscribe = onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data()
      callback(data)
    }
  })

  return unsubscribe
}

async function getData (
  collection: string,
  id: string
) {
  const docRef = doc(db, collection, id)

  let data = null
  let error = null

  try {
    data = await getDoc(docRef)
  } catch (e) {
    error = e
  }

  return { docRef, data, error }
}

async function saveData (
  collection: string,
  id: string,
  data: any
) {
  let result = null
  let error = null

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true
    })
  } catch (e) {
    error = e
  }

  return { result, error }
}

export { getData, saveData, observeData }
