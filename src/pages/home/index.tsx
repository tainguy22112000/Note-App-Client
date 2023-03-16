import { Center, Grid, Paper, Text } from '@mantine/core'
import React from 'react'
import FolderList from '@/components/folder'
const mock = [
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  },
  {
    id: '184184',
    name: 'First folder'
  }
]

const HomePage = () => {
  return (
    <Center sx={{ width: '100%' }} mt={20}>
      <Paper shadow='lg' radius='md' p='lg' sx={{ width: '90%', height: '50vh' }} withBorder>
        <Grid grow sx={{ width: '100%', height: '100%' }}>
          <Grid.Col span='auto' sx={{ height: '100%' }}>
            <FolderList folders={mock} />
          </Grid.Col>
          <Grid.Col span={4} sx={{ height: '100%' }}>
            Note List
          </Grid.Col>
        </Grid>
      </Paper>
    </Center>
  )
}

export default HomePage
