import React from 'react'
import { Box, Flex, Button, Heading, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={bgColor} px={0} borderBottom={1} borderStyle={'solid'} borderColor={borderColor} position="sticky" top={0} zIndex={1000}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW="7xl"
        mx="auto"
        px={4}
      >
        <RouterLink to="/">
          <Heading size="md" color="blue.500">Retrotique</Heading>
        </RouterLink>

        <Flex alignItems={'center'} gap={4}>
          <RouterLink to="/dashboard">
            <Button colorScheme="blue" variant="ghost">
              Tableau de bord
            </Button>
          </RouterLink>
          <Button colorScheme="blue">
            Connexion
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 