import React, { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Flex,
  Circle,
  VStack,
  HStack,
  Badge,
  chakra,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode
} from '@chakra-ui/react'
import { FaExchangeAlt, FaSearch, FaUserFriends, FaArrowRight, FaShieldAlt, FaHandshake, FaCamera, FaBox, FaBell, FaFileAlt, FaCheck } from 'react-icons/fa'

interface FeatureProps {
  title: string
  text: string
  icon: React.ElementType
}

const Feature: React.FC<FeatureProps> = ({ title, text, icon }) => {
  const bg = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.100', 'gray.600')

  return (
    <Stack
      bg={bg}
      border="1px"
      borderColor={borderColor}
      borderRadius="xl"
      p={8}
      spacing={4}
      position="relative"
      overflow="hidden"
      boxShadow="xl"
      _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
    >
      <Circle
        size="160px"
        position="absolute"
        top="-80px"
        right="-80px"
        bg="blue.500"
        opacity={0.1}
      />
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Heading fontSize="xl">{title}</Heading>
      <Text color="gray.500">{text}</Text>
    </Stack>
  )
}

const Home: React.FC = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.400, purple.500)',
    'linear(to-r, blue.600, purple.700)'
  )

  return (
    <Box>
      {/* Hero Section avec animation */}
      <Box
        bgGradient={bgGradient}
        position="relative"
        overflow="hidden"
        w="100vw"
        marginLeft="calc(-50vw + 50%)"
        marginRight="calc(-50vw + 50%)"
      >
        <Stack
          align="center"
          spacing={{ base: 8, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
          px={{ base: 6, md: 8 }}
          py={{ base: 20, md: 28 }}
          maxW="8xl"
          mx="auto"
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight="bold"
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              color="white"
            >
              <chakra.span
                position="relative"
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                Retrotique
              </chakra.span>
              <br />
              <Text
                as="span"
                color="white"
                fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
              >
                La plateforme de rétrocession entre opticiens
              </Text>
            </Heading>
            <Text color="white" fontSize="xl" opacity={0.8}>
              Simplifiez vos échanges de montures avec d'autres professionnels. 
              Trouvez rapidement les modèles dont vous avez besoin et gérez vos 
              rétrocessions en toute simplicité.
            </Text>
            <Stack spacing={6} direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded="full"
                size="lg"
                fontWeight="normal"
                px={6}
                colorScheme="white"
                bg="white"
                color="blue.500"
                _hover={{ bg: 'gray.100' }}
                rightIcon={<FaArrowRight />}
              >
                Commencer maintenant
              </Button>
              <Button
                rounded="full"
                size="lg"
                fontWeight="normal"
                px={6}
                leftIcon={<FaShieldAlt />}
                color="white"
                variant="outline"
                _hover={{
                  bg: 'whiteAlpha.200'
                }}
              >
                En savoir plus
              </Button>
            </Stack>
            <HStack spacing={4}>
              <Badge colorScheme="blue" p={2} borderRadius="full">
                +1000 Opticiens
              </Badge>
              <Badge colorScheme="purple" p={2} borderRadius="full">
                +5000 Échanges
              </Badge>
              <Badge colorScheme="green" p={2} borderRadius="full">
                95% Satisfaction
              </Badge>
            </HStack>
          </Stack>
          <Flex flex={1} justify="center" align="center" position="relative" w="full">
            <Box
              position="relative"
              height="300px"
              rounded="2xl"
              boxShadow="2xl"
              width="full"
              overflow="hidden"
            >
              <Image
                alt="Hero Image"
                fit="cover"
                align="center"
                w="100%"
                h="100%"
                src="https://images.unsplash.com/photo-1556015048-4d3aa10df74c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Box>
          </Flex>
        </Stack>
      </Box>

      {/* Features Section */}
      <Box 
        py={20} 
        w="100vw"
        marginLeft="calc(-50vw + 50%)"
        marginRight="calc(-50vw + 50%)"
      >
        <VStack 
          spacing={12} 
          px={{ base: 6, md: 8 }}
          maxW="8xl"
          mx="auto"
        >
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading mb={4} size="2xl">
              Pourquoi choisir Retrotique ?
            </Heading>
            <Text fontSize="xl" color="gray.500">
              Une solution complète pour optimiser vos échanges de montures
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
            <Feature
              icon={FaExchangeAlt}
              title="Échanges Simplifiés"
              text="Gérez vos rétrocessions facilement avec un système intuitif et professionnel."
            />
            <Feature
              icon={FaSearch}
              title="Recherche Efficace"
              text="Trouvez rapidement les montures dont vous avez besoin grâce à notre moteur de recherche avancé."
            />
            <Feature
              icon={FaUserFriends}
              title="Réseau Professionnel"
              text="Rejoignez une communauté d'opticiens et développez votre réseau professionnel."
            />
          </SimpleGrid>
        </VStack>
      </Box>

      {/* How it Works Section */}
      <Box 
        py={20} 
        w="100vw"
        marginLeft="calc(-50vw + 50%)"
        marginRight="calc(-50vw + 50%)"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <VStack 
          spacing={12} 
          px={{ base: 6, md: 8 }}
          maxW="8xl"
          mx="auto"
        >
          <Heading size="2xl" textAlign="center">
            Comment ça marche ?
          </Heading>
          <Text fontSize="xl" color="gray.500" textAlign="center" maxW="3xl">
            Découvrez notre processus simple et sécurisé pour la rétrocession de montures
          </Text>

          <Tabs variant="soft-rounded" colorScheme="blue" size="lg" align="center" w="full">
            <TabList flexWrap="wrap" justifyContent="center" gap={4}>
              <Tab>
                <HStack>
                  <Icon as={FaCamera} />
                  <Text>Publier</Text>
                </HStack>
              </Tab>
              <Tab>
                <HStack>
                  <Icon as={FaBell} />
                  <Text>Notifier</Text>
                </HStack>
              </Tab>
              <Tab>
                <HStack>
                  <Icon as={FaFileAlt} />
                  <Text>Échanger</Text>
                </HStack>
              </Tab>
              <Tab>
                <HStack>
                  <Icon as={FaBox} />
                  <Text>Livrer</Text>
                </HStack>
              </Tab>
            </TabList>

            <TabPanels mt={8}>
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                  <VStack align="start" spacing={6}>
                    <Heading size="lg">Publiez vos montures</Heading>
                    <Text color="gray.500">
                      Ajoutez facilement vos montures dans notre base de données avec tous les détails nécessaires :
                    </Text>
                    <VStack align="start" spacing={4}>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Fabricant, marque et modèle</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Taille et coloris</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Photos haute qualité</Text>
                      </HStack>
                    </VStack>
                  </VStack>
                  <Box 
                    bg={useColorModeValue('gray.100', 'gray.700')} 
                    p={6} 
                    borderRadius="xl"
                    boxShadow="xl"
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Publication de monture"
                      borderRadius="lg"
                      objectFit="cover"
                      w="100%"
                      h="300px"
                    />
                  </Box>
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                  <VStack align="start" spacing={6}>
                    <Heading size="lg">Notifications intelligentes</Heading>
                    <Text color="gray.500">
                      Notre système de notification ciblée permet de :
                    </Text>
                    <VStack align="start" spacing={4}>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Notifier uniquement les opticiens concernés</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Recevoir des propositions pertinentes</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Gérer les offres en temps réel</Text>
                      </HStack>
                    </VStack>
                  </VStack>
                  <Box 
                    bg={useColorModeValue('gray.100', 'gray.700')} 
                    p={6} 
                    borderRadius="xl"
                    boxShadow="xl"
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Système de notifications"
                      borderRadius="lg"
                      objectFit="cover"
                      w="100%"
                      h="300px"
                    />
                  </Box>
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                  <VStack align="start" spacing={6}>
                    <Heading size="lg">Échange sécurisé</Heading>
                    <Text color="gray.500">
                      Un processus d'échange transparent et sécurisé :
                    </Text>
                    <VStack align="start" spacing={4}>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Négociation du prix en direct</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Génération automatique des documents</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Paiement sécurisé intégré</Text>
                      </HStack>
                    </VStack>
                  </VStack>
                  <Box 
                    bg={useColorModeValue('gray.100', 'gray.700')} 
                    p={6} 
                    borderRadius="xl"
                    boxShadow="xl"
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Échange sécurisé"
                      borderRadius="lg"
                      objectFit="cover"
                      w="100%"
                      h="300px"
                    />
                  </Box>
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
                  <VStack align="start" spacing={6}>
                    <Heading size="lg">Livraison simplifiée</Heading>
                    <Text color="gray.500">
                      Suivez vos envois de bout en bout :
                    </Text>
                    <VStack align="start" spacing={4}>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Envoi anonyme avec code unique</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Suivi automatique par email</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaCheck} color="green.500" />
                        <Text>Confirmation de réception</Text>
                      </HStack>
                    </VStack>
                  </VStack>
                  <Box 
                    bg={useColorModeValue('gray.100', 'gray.700')} 
                    p={6} 
                    borderRadius="xl"
                    boxShadow="xl"
                  >
                    <Image 
                      src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Livraison"
                      borderRadius="lg"
                      objectFit="cover"
                      w="100%"
                      h="300px"
                    />
                  </Box>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Box>

      {/* Call to Action */}
      <Box 
        bg={useColorModeValue('gray.50', 'gray.800')} 
        py={16} 
        w="100vw"
        marginLeft="calc(-50vw + 50%)"
        marginRight="calc(-50vw + 50%)"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          align="center"
          justify="space-between"
          bg={useColorModeValue('white', 'gray.700')}
          p={8}
          mx="auto"
          maxW="8xl"
          borderRadius="xl"
          boxShadow="xl"
          border="1px"
          borderColor={useColorModeValue('gray.100', 'gray.600')}
        >
          <VStack align="start" spacing={4} maxW="2xl">
            <Heading size="lg">Prêt à rejoindre notre réseau ?</Heading>
            <Text color="gray.500">
              Inscrivez-vous gratuitement et commencez à échanger avec d'autres professionnels dès aujourd'hui.
            </Text>
            <HStack>
              <Icon as={FaHandshake} w={6} h={6} color="blue.500" />
              <Text fontWeight="medium">Déjà plus de 1000 opticiens nous font confiance</Text>
            </HStack>
          </VStack>
          <Button
            size="lg"
            colorScheme="blue"
            rightIcon={<FaArrowRight />}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Créer un compte
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Home 