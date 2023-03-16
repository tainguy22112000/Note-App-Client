import { useAuthContext } from '@/context/AuthContext/AuthContext'
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Stack
} from '@mantine/core'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
import GoogleIcon from '@/assets/googleIcon'
const LoginPage = () => {
  const auth = getAuth()
  const { user } = useAuthContext()
  console.log('id', user?.uid)
  const handleLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()

      const res = await signInWithPopup(auth, provider)
      console.log({ res })
    } catch (err) {
      console.log(err)
    }
  }

  if (localStorage.getItem('accessToken')) {
    return <Navigate to='/' />
  }

  return (
    <Container size={420} my={40}>
      <Title
        align='center'
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900
        })}
      >
        Welcome to Note App
      </Title>
      <Text color='dimmed' size='sm' align='center' mt={5}>
        Do not have an account yet?{' '}
        <Anchor<'a'> href='#' size='sm' onClick={(event) => event.preventDefault()}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
        <TextInput label='Email' placeholder='you@mantine.dev' required />
        <PasswordInput label='Password' placeholder='Your password' required mt='md' />
        <Group position='apart' mt='lg'>
          <Checkbox label='Remember me' sx={{ lineHeight: 1 }} />
          <Anchor<'a'> onClick={(event) => event.preventDefault()} href='#' size='sm'>
            Forgot password?
          </Anchor>
        </Group>
        <Stack spacing={10}>
          <Button fullWidth mt='xl'>
            Sign in
          </Button>
          <Button fullWidth leftIcon={<GoogleIcon />} variant='outline' onClick={handleLoginWithGoogle}>
            Countinue with Google
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default LoginPage
