import { Container, Flex, Text, VStack } from '@chakra-ui/react'
import Layout from '../../components/layouts/team'
import { useRouter } from 'next/router'
const Team = () => {
  const router = useRouter()
  const { team } = router.query

  return (
    <Layout>
      <Container maxW="container.lg" pt={40} pb={5}>
        <Flex h="100vh" bg="#fff" borderRadius={'lg'}>
          <VStack w={'full'} p={10}>
            <Text>{team}</Text>
          </VStack>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Team
