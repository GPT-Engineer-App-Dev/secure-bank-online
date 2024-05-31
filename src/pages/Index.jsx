import { Container, Text, VStack, Heading, Box, Button, Flex, Icon } from "@chakra-ui/react";
import { FaPiggyBank, FaMoneyCheckAlt, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Your Online Bank</Heading>
        <Text fontSize="lg" textAlign="center">Manage your finances with ease and security.</Text>
        
        <Flex direction="row" justify="space-around" width="100%" mt={8}>
          <Box textAlign="center">
            <Icon as={FaPiggyBank} w={10} h={10} mb={2} />
            <Text fontSize="md">Savings</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaMoneyCheckAlt} w={10} h={10} mb={2} />
            <Text fontSize="md">Checking</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaChartLine} w={10} h={10} mb={2} />
            <Text fontSize="md">Investments</Text>
          </Box>
        </Flex>

        <Button colorScheme="teal" size="lg" mt={8}>Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;