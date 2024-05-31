import { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Textarea, useToast } from "@chakra-ui/react";

const FundTransfer = () => {
  const [amount, setAmount] = useState("");
  const [recipientAccount, setRecipientAccount] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();

  const handleTransfer = () => {
    // Placeholder for actual transfer logic
    console.log("Transferring funds", { amount, recipientAccount, description });

    // Show success message
    toast({
      title: "Transfer Successful",
      description: `You have transferred $${amount} to account ${recipientAccount}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear form fields
    setAmount("");
    setRecipientAccount("");
    setDescription("");
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>Fund Transfer</Heading>
      <FormControl id="amount" mb={4}>
        <FormLabel>Amount</FormLabel>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </FormControl>
      <FormControl id="recipient-account" mb={4}>
        <FormLabel>Recipient Account Number</FormLabel>
        <Input
          type="text"
          value={recipientAccount}
          onChange={(e) => setRecipientAccount(e.target.value)}
          placeholder="Enter recipient account number"
        />
      </FormControl>
      <FormControl id="description" mb={4}>
        <FormLabel>Description</FormLabel>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
      </FormControl>
      <Button colorScheme="teal" onClick={handleTransfer}>Transfer Funds</Button>
    </Box>
  );
};

export default FundTransfer;