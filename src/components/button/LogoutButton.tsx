import { useAuthContext } from '@/context/AuthContext/AuthContext'
import { Button, ButtonProps } from '@mantine/core'
import { IconLogout } from '@tabler/icons-react'

export const LogoutButton = (props: ButtonProps) => {
  console.log('jhdafjhadf', props)
  const { user } = useAuthContext()
  const handleLogout = () => {
    user.auth.signOut()
  }
  return (
    <Button onClick={handleLogout} leftIcon={<IconLogout size={16} />} {...props}>
      Log out
    </Button>
  )
}
