import { Container, Box, Heading, AspectRatio } from '@chakra-ui/react'
import Slider from '../components/slider'
import TeamTable from '../components/teamtable'
import Chart from '../components/choropleth'
const Page = () => {
  return (
    <Container maxW="Container.lg">
      <Container maxW="Container.lg" pt={20} pb={20}>
        <Heading as="h3" size="md" pb="4">
          NBA Champion Posibility
        </Heading>
        <Chart />
        <Heading as="h5" size="sm" >
          Year
        </Heading>
        <Slider />
      </Container>
      <TeamTable />
    </Container>
  )
}

export default Page
