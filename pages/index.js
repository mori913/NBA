import { Container, Box, Heading, AspectRatio } from '@chakra-ui/react'
import Slider from '../components/slider'
import TeamTable from '../components/teamtable'
import Chart from '../components/choropleth'
const Page = () => {
  return (
    <Container maxW="Container.lg">
      <Container maxW="Container.lg" pt={20} pb={20}>
        {/* <Box>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
              alt="demo"
            />
          </AspectRatio>
        </Box> */}
        <Chart/>
        <Slider/>
      </Container>
      <TeamTable />
    </Container>
  )
}

export default Page
