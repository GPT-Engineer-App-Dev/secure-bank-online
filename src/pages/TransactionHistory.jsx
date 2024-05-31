import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const transactions = [
  { date: "2023-10-01", amount: "$500.00", description: "Salary" },
  { date: "2023-10-05", amount: "$50.00", description: "Grocery Shopping" },
  { date: "2023-10-10", amount: "$200.00", description: "Rent" },
  { date: "2023-10-15", amount: "$100.00", description: "Utilities" },
];

const TransactionHistory = () => (
  <Box p={4}>
    <Heading as="h2" size="lg" mb={4}>Transaction History</Heading>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Description</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map((transaction, index) => (
          <Tr key={index}>
            <Td>{transaction.date}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.description}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
);

export default TransactionHistory;