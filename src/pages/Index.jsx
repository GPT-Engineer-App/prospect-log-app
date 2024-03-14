import React, { useState } from "react";
import { Box, VStack, HStack, FormControl, FormLabel, Input, Button, Text, Spinner, useToast } from "@chakra-ui/react";

const Index = () => {
  const [prospectEmail, setProspectEmail] = useState("");
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prospectEmail) {
      setIsLoading(true);
      setLogs([...logs, `Researching prospect...`]);

      setTimeout(() => {
        setIsLoading(false);
        setLogs([...logs, `Research completed for prospect.`]);
        setProspectEmail("");
        toast({
          title: "Success",
          description: "Prospect research completed.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }, 2000);
    }
  };

  return (
    <Box bg="gray.900" minH="100vh" p={8}>
      <HStack spacing={8} alignItems="start">
        <Box flex={1}>
          <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
            Prospect Research
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} alignItems="stretch">
              <FormControl id="prospectEmail">
                <FormLabel color="white">Prospect Email</FormLabel>
                <Input type="email" value={prospectEmail} onChange={(e) => setProspectEmail(e.target.value)} bg="gray.800" color="white" _hover={{ bg: "gray.700" }} _focus={{ bg: "gray.700", boxShadow: "outline" }} />
              </FormControl>
              <Button type="submit" colorScheme="blue" isLoading={isLoading} loadingText="Researching">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
        <Box flex={1}>
          <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
            Research Logs
          </Text>
          <VStack spacing={2} alignItems="stretch">
            {logs.map((log, index) => (
              <HStack key={index} spacing={2} alignItems="center">
                {isLoading && index === logs.length - 1 ? <Spinner size="sm" color="blue.500" /> : <Box w={4} h={4} borderRadius="full" bg="blue.500" flexShrink={0} />}
                <Text color="white">{log}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Index;
