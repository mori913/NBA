import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontsize="sm">
      &copy; {new Date().getFullYear()} Maosen Ye. All Rights Reserved.
    </Box>
  )
}

export default Footer
