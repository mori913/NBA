import { Container, Flex, Text, SimpleGrid, Heading } from '@chakra-ui/react'
import Layout from '../../components/layouts/team'
import Area from '../../components/area'
const Teams = () => {
  return (
    <Layout>
      <Container maxW="container.lg" pt={40} pb={5}>
        <Heading>All Teams</Heading>
        <SimpleGrid minChildWidth="250px" spacing="40px"  bg="#fff">
        <Area area="ATLANTIC" />
          <Area area="CENTRAL" />
          <Area area="SOUTHEAST" />
          <Area area="NORTHWEST" />
          <Area area="PACIFIC" />
          <Area area="SOUTHWEST" />
        </SimpleGrid>

      </Container>
    </Layout>
  )
}

export default Teams
