import React, { useState } from "react";
import { Box, VStack, HStack, FormControl, FormLabel, Input, Button, Text, Spinner, useToast } from "@chakra-ui/react";

const Index = () => {
  const [prospectEmail, setProspectEmail] = useState("");
  const [productInfoFile, setProductInfoFile] = useState("sasstr.pdf");
  const [salesConversationsFile, setSalesConversationsFile] = useState("sasstr_sales_convs.pdf");
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
    <Box bg="linear-gradient(135deg, #1a202c, #2d3748)" minH="100vh" p={8}>
      <HStack spacing={10} justifyContent="center" alignItems="start">
        <Box flex={1} p={8} bg="gray.700" borderRadius="lg" boxShadow="xl">
          <Text fontSize="3xl" fontWeight="bold" color="white" mb={6}>
            Prospect Research
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} alignItems="stretch">
              <FormControl id="prospectEmail">
                <FormLabel color="white">Prospect Email</FormLabel>
                <Input type="email" value={prospectEmail} onChange={(e) => setProspectEmail(e.target.value)} bg="gray.700" color="white" _hover={{ bg: "gray.600" }} _focus={{ bg: "gray.600", boxShadow: "outline" }} borderColor="gray.600" borderRadius="md" />
              </FormControl>
              <Box>
                <Text color="white" fontWeight="bold" mb={1}>
                  Product/Event Info File
                </Text>
                <Text color="gray.400" bg="gray.800" p={2} borderRadius="md">
                  {productInfoFile}
                </Text>
              </Box>
              <Box>
                <Text color="white" fontWeight="bold" mb={1}>
                  Previous Sales Conversations PDF
                </Text>
                <Text color="gray.400" bg="gray.800" p={2} borderRadius="md">
                  {salesConversationsFile}
                </Text>
              </Box>
              <Button type="submit" colorScheme="teal" size="lg" isLoading={isLoading} loadingText="Researching" _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
        <Box flex={1} p={8} bg="gray.700" borderRadius="lg" boxShadow="xl" ml={10}>
          <Text fontSize="3xl" fontWeight="bold" color="white" mb={6}>
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
