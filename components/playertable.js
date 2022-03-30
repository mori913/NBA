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
  Input,
  HStack,
  Avatar,
  Text
} from '@chakra-ui/react'
import * as d3 from 'd3'
import { SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const PlayerTable = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [players, setPlayers] = useState([])

  useEffect(() => {
    d3.json('http://data.nba.net/data/10s/prod/v1/2019/players.json')
      .then(function (d) {
        setIsLoaded(true)
        const data = d.league.standard.filter(elem => elem.teamId > 0)
        console.log(data)
        setPlayers(data)
      })
      .catch(error => {
        setIsLoaded(true)
        setError(error)
      })
  }, [])

  return (
    <Container maxW="container.lg">
      <Heading as="h3" size="md" pb="4">
        All Players
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing="30px" pb={4}>
        <Select placeholder="All Teams" bg="#FFF" />
        <Select placeholder="All Positions" bg="#FFF" />
        <Select placeholder="2022" bg="#FFF"></Select>
        <Input placeholder="Search Players" bg="#FFF" />
      </SimpleGrid>
      <Table variant="simple" bg="#FFFFFF" borderRadius="xl">
        <Thead>
          <Tr>
            <Th>Player</Th>
            <Th>Team</Th>
            <Th>Position</Th>
            <Th>Number</Th>
          </Tr>
        </Thead>
        <Tbody>
          {players.map((elem, index) => {
            let name = elem.firstName + ' ' + elem.lastName
            let img =
              'https://cdn.nba.com/headshots/nba/latest/260x190/' +
              elem.personId +
              '.png'
            return (
              <Tr key={index}>
                <Td>
                  <HStack spacing="3" >
                    <Avatar
                      name={name}
                      src={img}
                      bg ="#FFF"
                    />
                  <Text fontWeight="medium">{name}</Text>
                  </HStack>
                </Td>
                <Td>{elem.teamId}</Td>
                <Td>{elem.pos}</Td>
                <Td>{elem.jersey}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Container>
  )
}

export default PlayerTable
