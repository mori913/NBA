import { Container, Flex, Text, VStack } from '@chakra-ui/react'
import Layout from '../../components/layouts/team'
import PlayerTable from '../../components/playertable'
const Teams = () => {
  return (
    <Layout>
      <Container maxW="container.lg" pt={40} pb={5} >
        <PlayerTable/>
      </Container>
    </Layout>
  )
}

export default Teams
