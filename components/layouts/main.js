import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head name="viewport" content="width=device-width, initial-scale=1">
        <title>NBA Champion Prediction</title>
      </Head>
      <Container maxW="container.lg">{children}</Container>
    </Box>
  )
}

export default Main
