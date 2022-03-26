import { Container, Flex, Text, VStack } from '@chakra-ui/react'
import Layout from '../../components/layouts/team'
const Teams = () => {
  return (
    <Layout>
      <Container maxW="container.lg" pt={40} pb={5} >
        <Flex h="100vh" bg="#fff" borderRadius={"lg"}>
          <VStack w={'full'} p={10}>
            <Text>ATLANRIC</Text>
          </VStack>
          <VStack w={'full'} p={10}>
            <Text>CENTRAL</Text>
          </VStack>
          <VStack w={'full'} p={10}>
            <Text>SOUTHEAST</Text>
          </VStack>
        </Flex>
      </Container>
    </Layout>
  )
}

export default Teams
