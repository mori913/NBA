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
import result from '/public/result'
import React from 'react'


const TeamTable = () => {
  //  console.log(teammap)
  let possibility = result.filter(elem=>elem.year === 21);
  Object.keys(teammap).map(key=>{
    const fullname = teammap[key].city + " " + teammap[key].team;   
    let predict_result = possibility.find(elem=>elem.TEAM == fullname);
    predict_result["key"] = key;
    predict_result["city"] = teammap[key].city;
    predict_result['team'] = teammap[key].team;
  })
  possibility.sort((a,b)=>{
    return b.prediction - a.prediction;
  })
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
            <Th>GDP($Million)</Th>
            <Th>possibility</Th>
          </Tr>
        </Thead>
        <Tbody>

          {
            possibility.map((val, index) => {
              // console.log(val)
              const img = "teams/"+val["key"]+".png";
              const percentage_result = Math.round(val["prediction"]*10000)/100 +"%";
                          return (
              <Tr key={index}>
                <Td>
                  <Image
                    borderRadius="full"
                    boxSize="60px"
                    src = {img}
                  />
                </Td>
                <Td>{val["city"]}</Td>
                <Td>{val["team"]}</Td>
                <Td>{val["GDP"]}</Td>
                <Td>{percentage_result}</Td>
              </Tr>
            )
            })
          }
        </Tbody>
      </Table>
    </Container>
  )
}

export default TeamTable
