import { VStack, Text, Heading } from '@chakra-ui/react'


const Teams = {
    'ATLANTIC':['Boston Celtics', 'Brooklyn Nets', 'New York Knicks', 'Philadelphia 76ers', 'Toronto Raptors'],
    'CENTRAL':['Chicago Bulls', 'Cleveland Cavaliers', 'Detroit Pistons', 'Indiana Pacers', 'Milwaukee Bucks'],
    'SOUTHEAST':['Atlanta Hawks', 'Charlotte Hornets', 'Miami Heat', 'Orlando Magic', 'Washington Wizards'],
    'NORTHWEST':['Denver Nuggets', 'Minnesota Timberwolves', 'Oklahoma City Thunder', 'Portland Trail Blazers', 'Utah Jazz'],
    'PACIFIC':['Golden State Warriors', 'LA Clippers', 'Los Angeles Lakers', 'Phoenix Suns', 'Sacramento Kings'],
    'SOUTHWEST':['Dallas Mavericks', 'Houston Rockets', 'Memphis Grizzlies', 'New Orleans Pelicans', 'San Antonio Spurs'], 
}

const Area = ({ area }) => {
  return (
    <VStack p={10} spacing='3'>
      <Heading size={'md'}>{area}</Heading>
      {Teams[area].map((elem) => (
        <Text fontSize={'lg'}>{elem}</Text>
      ))}
    </VStack>
  )
}

export default Area
