import React from 'react'
import {
  Box,
  Grid,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Button,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  HStack,
  Progress,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import {
  FaPlus,
  FaSearch,
  FaBell,
  FaBox,
  FaEuroSign,
  FaExchangeAlt,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaTruck,
} from 'react-icons/fa'

const Dashboard: React.FC = () => {
  const bgCard = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  const recentTransactions = [
    {
      id: '1',
      monture: 'Ray-Ban Aviator',
      date: '2024-03-15',
      status: 'completed',
      price: '89.99',
      opticien: 'Optique Martin',
    },
    {
      id: '2',
      monture: 'Oakley Holbrook',
      date: '2024-03-14',
      status: 'pending',
      price: '120.00',
      opticien: 'Vision Plus',
    },
    {
      id: '3',
      monture: 'Gucci GG0022S',
      date: '2024-03-13',
      status: 'shipping',
      price: '150.00',
      opticien: 'Optique Centrale',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'green'
      case 'pending':
        return 'yellow'
      case 'shipping':
        return 'blue'
      default:
        return 'gray'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Terminé'
      case 'pending':
        return 'En attente'
      case 'shipping':
        return 'En livraison'
      default:
        return status
    }
  }

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        {/* En-tête du tableau de bord */}
        <HStack justify="space-between">
          <Box>
            <Heading size="lg" mb={2}>Tableau de bord</Heading>
            <Text color="gray.500">Bienvenue dans votre espace professionnel</Text>
          </Box>
          <Button
            leftIcon={<FaPlus />}
            colorScheme="blue"
            size="lg"
          >
            Nouvelle demande
          </Button>
        </HStack>

        {/* Statistiques */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
          <Card bg={bgCard}>
            <CardBody>
              <Stat>
                <StatLabel>Rétrocessions totales</StatLabel>
                <StatNumber>150</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  23% ce mois
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>
          
          <Card bg={bgCard}>
            <CardBody>
              <Stat>
                <StatLabel>Montant économisé</StatLabel>
                <StatNumber>2 890€</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  15% ce mois
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>

          <Card bg={bgCard}>
            <CardBody>
              <Stat>
                <StatLabel>Taux de réussite</StatLabel>
                <StatNumber>92%</StatNumber>
                <StatHelpText>
                  <Progress value={92} size="sm" colorScheme="green" mt={2} />
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>

          <Card bg={bgCard}>
            <CardBody>
              <Stat>
                <StatLabel>Demandes en cours</StatLabel>
                <StatNumber>12</StatNumber>
                <StatHelpText>
                  <HStack spacing={1}>
                    <Icon as={FaClock} />
                    <Text>4 urgentes</Text>
                  </HStack>
                </StatHelpText>
              </Stat>
            </CardBody>
          </Card>
        </SimpleGrid>

        {/* Actions rapides */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
          <Button
            height="100px"
            bg={bgCard}
            border="1px"
            borderColor={borderColor}
            _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
          >
            <VStack>
              <Icon as={FaSearch} w={6} h={6} color="blue.500" />
              <Text>Rechercher une monture</Text>
            </VStack>
          </Button>

          <Button
            height="100px"
            bg={bgCard}
            border="1px"
            borderColor={borderColor}
            _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
          >
            <VStack>
              <Icon as={FaBell} w={6} h={6} color="purple.500" />
              <Text>Gérer les notifications</Text>
            </VStack>
          </Button>

          <Button
            height="100px"
            bg={bgCard}
            border="1px"
            borderColor={borderColor}
            _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
          >
            <VStack>
              <Icon as={FaBox} w={6} h={6} color="orange.500" />
              <Text>Mes montures</Text>
            </VStack>
          </Button>

          <Button
            height="100px"
            bg={bgCard}
            border="1px"
            borderColor={borderColor}
            _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
          >
            <VStack>
              <Icon as={FaChartLine} w={6} h={6} color="green.500" />
              <Text>Statistiques détaillées</Text>
            </VStack>
          </Button>
        </SimpleGrid>

        {/* Transactions récentes */}
        <Card bg={bgCard}>
          <CardHeader>
            <Heading size="md">Transactions récentes</Heading>
          </CardHeader>
          <CardBody>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Monture</Th>
                  <Th>Date</Th>
                  <Th>Opticien</Th>
                  <Th>Prix</Th>
                  <Th>Statut</Th>
                </Tr>
              </Thead>
              <Tbody>
                {recentTransactions.map((transaction) => (
                  <Tr key={transaction.id}>
                    <Td fontWeight="medium">{transaction.monture}</Td>
                    <Td>{transaction.date}</Td>
                    <Td>{transaction.opticien}</Td>
                    <Td>{transaction.price}€</Td>
                    <Td>
                      <Badge
                        colorScheme={getStatusColor(transaction.status)}
                        borderRadius="full"
                        px={3}
                        py={1}
                      >
                        {getStatusText(transaction.status)}
                      </Badge>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  )
}

export default Dashboard 