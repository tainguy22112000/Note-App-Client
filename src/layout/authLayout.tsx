import AuthProvider from '@/context/AuthContext/AuthContext'
import { Outlet } from 'react-router-dom'
import HeaderMenu from '@/components/header'

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

export default AuthLayout
