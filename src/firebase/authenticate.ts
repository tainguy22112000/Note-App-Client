import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'

interface UserAccountProps {
  email: string
  password: string
}

export const loginGoogle = async () => {
  const auth = getAuth()
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

export const register = async ({ email, password }: UserAccountProps, setErrorMessage: (message: string) => void) => {
  const auth = getAuth()
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    setErrorMessage('')
  } catch (err: any) {
    console.log('message', err.message)
    setErrorMessage(err.message)
  }
}

export const logout = async (user: any) => {
  await user.auth.signOut()
}

export const login = async ({ email, password }: UserAccountProps) => {
  const auth = getAuth()
  try {
    await signInWithEmailAndPassword(auth, email, password)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}
