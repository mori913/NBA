import Head from 'next/head'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head name="viewport" content="width=device-width, initial-scale=1">
        <title>NBA Champion Prediction</title>
      </Head>
        <Navbar path ={router.asPath}/>
      <Container maxW="container.lg" bg="#F6F6F6">{children}</Container>
      <Footer/>
    </Box>
  )
}

export default Main
