import {
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import teammap from '/lib/teammap'

const TeamTable = () => {
  //  console.log(teammap)
  return (
    <Container maxW="container.lg">
      <Heading as="h3" size="md" pb="4">
        NBA Champion Prediction 2022
      </Heading>
      <Table variant="simple" bg="#FFFFFF" borderRadius="xl">
        <Thead>
          <Tr>
            <Th>Team</Th>
            <Th></Th>
            <Th>City</Th>
            <Th isNumeric>Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(teammap).map(key => {
            const img = "teams/"+key+".png"
            return (
              <Tr key={key}>
                <Td>
                  <Image
                    borderRadius="full"
                    boxSize="60px"
                    src = {img}
                    alt="Dan Abramov"
                  />
                </Td>
                <Td>{teammap[key].team}</Td>
                <Td>{teammap[key].city}</Td>
                <Td>1</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Container>
  )
}

export default TeamTable
