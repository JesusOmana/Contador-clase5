import { useState } from "react";
import {
  Box,
  ChakraProvider,
  Button,
  Center,
  CardBody,
} from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChakraProvider>
        <Box bg="#98e5ef" mt="20px">
          <Center
            fontSize={{ base: "3xl", sm: "6xl", md: "6xl", xl: "6xl" }}
            color="black"
            as="span"
            flex="1"
            textAlign="left"
          >
            Contador = {count}
          </Center>
        </Box>
        <Box align="center" bg="#DDF2FD" w="100%" p={4} color="white">
          <Button
            mx="20px"
            bg="black"
            color="white"
            onClick={() => setCount((count) => count + 1)}
          >
            +
          </Button>
          <Button
            bg="black"
            color="white"
            onClick={() => setCount((count) => count - 1)}
          >
            -
          </Button>
          <Button
            ml="20px"
            bg="black"
            color="white"
            onClick={() => setCount((count) => (count = 0))}
          >
            Restablecer
          </Button>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
