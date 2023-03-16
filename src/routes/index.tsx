import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/login'
import { HOME_PATH, LOGIN_PATH } from '@/constants/routes'
import ErrorPage from '@/components/errorPage'
import HomePage from '@/pages/home'
import ProtectedRoute from './protectedRoute'
import AuthLayout from '@/layout/authLayout'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <LoginPage />,
        path: LOGIN_PATH
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <HomePage />,
            path: HOME_PATH
          }
        ]
      }
    ]
  }
])
