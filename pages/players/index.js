import {
  Container,
  isMobile,
  ButtonGroup,
  Button,
  Text,
  HStack,
  Box,
  Heading,
  SimpleGrid,
  Select,
  Input
} from '@chakra-ui/react'
import Layout from '../../components/layouts/team'
import PlayerTable from '../../components/playertable'
import React from 'react'
import { useEffect, useState } from 'react'
import * as d3 from 'd3'


const Players = () => {

  // const [error, setError] = useState(null)
  // const [isLoaded, setIsLoaded] = useState(false)
  // const [players, setPlayers] = useState([])

  // useEffect(() => {
  //   d3.json('http://data.nba.net/data/10s/prod/v1/2019/players.json')
  //     .then(function (d) {
  //       setIsLoaded(true)
  //       const data = d.league.standard.filter(elem => elem.teamId > 0)
  //       console.log(data)
  //       setPlayers(data)
  //     })
  //     .catch(error => {
  //       setIsLoaded(true)
  //       setError(error)
  //     })
  // }, [])

  const columns = React.useMemo(
    () => [
      {
        Header: "PLayer",
        accessor: "name",
      },
      {
        Header: "TEAM",
        accessor: "teamId",
      },
      {
        Header: "POSITION",
        accessor: "pos",
      },
      {
        Header: "NUMBER",
        accessor: "jersey",
      },
    ],
    []
  );



  return (
    <Layout>
      <Container maxW="container.lg" pt={40} pb={5}>
      <Heading as="h3" size="md" pb="4">
        All Players
      </Heading>
      <SimpleGrid minChildWidth="120px" spacing="30px" pb={4}>
        <Select placeholder="All Teams" bg="#FFF" />
        <Select placeholder="All Positions" bg="#FFF" />
        <Select placeholder="2022" bg="#FFF"></Select>
        <Input placeholder="Search Players" bg="#FFF" />
      </SimpleGrid>
        <PlayerTable columns={columns} data = {players} />
        <Box
          px={{
            base: '4',
            md: '6'
          }}
          pb="5"
        >
          <HStack spacing="3" justify="space-between">
            {!isMobile && (
              <Text color="muted" fontSize="sm">
                Showing 1 to 5 of 42 results
              </Text>
            )}
            <ButtonGroup
              spacing="3"
              justifyContent="space-between"
              width={{
                base: 'full',
                md: 'auto'
              }}
              variant="secondary"
            >
              <Button>Previous</Button>
              <Button>Next</Button>
            </ButtonGroup>
          </HStack>
        </Box>
      </Container>
    </Layout>
  )
}

export default Players
