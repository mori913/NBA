import {
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Input
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import teammap from '/lib/teammap'
import * as d3 from 'd3'
import { SimpleGrid } from '@chakra-ui/react'

const PlayerTable = () => {
  console.log('test')

  d3.json('http://data.nba.net/data/10s/prod/v1/2019/players.json').then(
    function (d) {
      console.log(d.league.standard)
    }
  )
  return (
    <Container maxW="container.lg">
      <Heading as="h3" size="md" pb="4">
        All Players
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing="30px" pb={4} >
        <Select placeholder='All Teams' bg="#FFF"/>
        <Select placeholder='All Positions' bg="#FFF"/>
        <Select placeholder="2022" bg="#FFF"></Select>
        <Input placeholder='Search Players' bg = "#FFF"/>
      </SimpleGrid>
      <Table variant="simple" bg="#FFFFFF" borderRadius="xl">
        <Thead>
          <Tr>
            <Th>Player</Th>
            <Th>Team</Th>
            <Th>Number</Th>
            <Th>Position</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(teammap).map(key => {
            const img = 'teams/' + key + '.png'
            return (
              <Tr key={key}>
                <Td>
                  <Image
                    borderRadius="full"
                    boxSize="60px"
                    src={img}
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

export default PlayerTable
