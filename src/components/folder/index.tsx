import { Box, Card, Paper, ScrollArea, Stack, Title, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './index.style'

interface FolderListProps {
  folders: {
    name: string
    id: string
  }[]
}

const FolderList = ({ folders }: FolderListProps) => {
  const { classes } = useStyles()
  return (
    <>
      <Text>Folder List</Text>
      <ScrollArea.Autosize mah={500} maw={400} mx='auto'>
        <Stack spacing={10} sx={{ height: '100%' }}>
          {folders.map(({ id, name }) => {
            return (
              <Link key={id} to={`folders/${id}`} style={{ textDecoration: 'none' }}>
                <Card withBorder p={10}>
                  {name}
                </Card>
              </Link>
            )
          })}
        </Stack>
      </ScrollArea.Autosize>
    </>
  )
}

export default FolderList
