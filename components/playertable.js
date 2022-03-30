import {
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Avatar,
  Text
} from '@chakra-ui/react'
import * as d3 from 'd3'
import { useEffect, useState } from 'react'

const PlayerTable = ({columns, data}) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [players, setPlayers] = useState([])

  useEffect(() => {
    d3.json('http://data.nba.net/data/10s/prod/v1/2019/players.json')
      .then(function (d) {
        setIsLoaded(true)
        const data = d.league.standard.filter(elem => elem.teamId > 0)
        setPlayers(data.slice(0,10))
      })
      .catch(error => {
        setIsLoaded(true)
        setError(error)
      })
  }, [])

  return (
    <Container maxW="container.lg" padding="0">
      <Table variant="simple" bg="#FFFFFF" borderRadius="xl"  >
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
