import { Container, isMobile, ButtonGroup, Button, Text, HStack,Box } from '@chakra-ui/react'
import Layout from '../../components/layouts/team'
import PlayerTable from '../../components/playertable'
const Teams = () => {
  return (
    <Layout>
      <Container maxW="container.lg" pt={40} pb={5} >
        <PlayerTable/>
        <Box
            px={{
              base: '4',
              md: '6',
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
                  md: 'auto',
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

export default Teams
