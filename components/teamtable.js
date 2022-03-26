import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

import teammap from '/lib/teammap'

const TeamTable = () => {
  //  console.log(teammap)
  return (
    <Table variant="simple" bg="#FFFFFF">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Team</Th>
          <Th>City</Th>
          <Th isNumeric>Score</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.keys(teammap).map(key => {
          return (
            <Tr key={key}>
              <Td>{key}</Td>
              <Td>{teammap[key].team}</Td>
              <Td>{teammap[key].city}</Td>
              <Td>1</Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default TeamTable
