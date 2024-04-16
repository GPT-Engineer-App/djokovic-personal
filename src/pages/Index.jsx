import React from "react";
import { Box, Heading, Text, Image, Stack, Flex, Link, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex minHeight="100vh" alignItems="center" justifyContent="center" bgImage="https://images.unsplash.com/photo-1551773188-0801da12ddae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydHxlbnwwfHx8fDE3MTMyNzgxMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" color="white" px={8}>
        <Stack spacing={6} maxW="3xl" textAlign="center">
          <Heading as="h1" size="4xl">
            Novak Djokovic
          </Heading>
          <Text fontSize="xl">Professional Tennis Player | 22x Grand Slam Champion</Text>
        </Stack>
      </Flex>

      {/* About Section */}
      <Box py={20} px={8}>
        <Heading as="h2" size="2xl" mb={4}>
          About Me
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxub3ZhayUyMGRqb2tvdmljJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMjc4MTIyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Novak Djokovic" borderRadius="md" />
          </Box>
          <Box>
            <Text fontSize="xl" mb={6}>
              I am a professional tennis player from Serbia. I have been ranked world No. 1 for a record total of 380 weeks. I have won 22 Grand Slam men's singles titles, the most in history.
            </Text>
            <Text fontSize="xl">My playing style is an all-court style of play with exceptional court coverage. My groundstrokes are hit with depth, precision, and power. I am one of the greatest returners in the history of the sport.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Achievements Section */}
      <Box py={20} px={8} bg={useColorModeValue("gray.100", "gray.800")} textAlign="center">
        <Heading as="h2" size="2xl" mb={10}>
          Achievements
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Text fontSize="6xl" fontWeight="bold" color="teal.500">
              22
            </Text>
            <Text fontSize="xl">Grand Slam Titles</Text>
          </Box>
          <Box>
            <Text fontSize="6xl" fontWeight="bold" color="teal.500">
              380
            </Text>
            <Text fontSize="xl">Weeks at World No. 1</Text>
          </Box>
          <Box>
            <Text fontSize="6xl" fontWeight="bold" color="teal.500">
              93
            </Text>
            <Text fontSize="xl">Career Titles</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box py={10} px={8} textAlign="center">
        <Stack direction="row" spacing={6} justifyContent="center" mb={6}>
          <Link href="https://twitter.com/DjokerNole" isExternal>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
          <Link href="https://www.facebook.com/djokovicofficial" isExternal>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://www.instagram.com/djokernole" isExternal>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
        </Stack>
        <Text>&copy; {new Date().getFullYear()} Novak Djokovic</Text>
      </Box>
    </Box>
  );
};

export default Index;
