import { Container, Box, Heading, AspectRatio } from '@chakra-ui/react'
import Slider from '../components/slider'
import TeamTable from '../components/teamtable'
import Chart from '../components/choropleth'
import { useState } from 'react'

const Page = () => {
  const [val, setval] = useState(2022);
  return (
    <Container maxW="Container.lg">
      <Container maxW="Container.lg" pt={20} pb={20}>
        <Heading as="h3" size="md" pb="4">
          NBA Champion Posibility
        </Heading>
        <Chart year = {val} />
        <Heading as="h5" size="sm" >
          Year {val}
        </Heading>
        <Slider year = {val} setyear = {setval} />
      </Container>
      <TeamTable />
    </Container>
  )
}

export default Page
