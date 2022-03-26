import { Container, Flex, Text, VStack } from '@chakra-ui/react'
import Layout from '../../components/layouts/team'
import { useRouter } from 'next/router'
import Score from '../../components/playscore'
const Player = () => {
  const router = useRouter()
  const { player } = router.query

  return (
    <Layout>
      <Container maxW="container.lg" pt={40} pb={5}>
        <Score />
      </Container>
    </Layout>
  )
}

export default Player
