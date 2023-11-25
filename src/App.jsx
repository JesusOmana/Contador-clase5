import { useState } from "react";
import {
  Box,
  ChakraProvider,
  Button,
  Stack,
  Heading,
  Text,
  CardBody,
  Card,
  CardHeader,
} from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChakraProvider>
        <Box boxShadow="dark-lg">
          <Card bg="#fb8cf5">
            <CardHeader>
              <Heading size="md" align="center" fontSize="4xl" mt="5">
                Contador = {count}
              </Heading>
            </CardHeader>

            <CardBody>
              <Stack>
                <Box>
                  <Text pt="2" fontSize="sm"></Text>
                  <Box
                    boxShadow="dark-lg"
                    p="6"
                    rounded="md"
                    align="center"
                    bg="#ffc9ff"
                    w="100%"
                    color="white"
                  >
                    <Button
                      mx="10px"
                      bg="black"
                      color="white"
                      onClick={() => setCount((count) => count + 1)}
                    >
                      +
                    </Button>
                    <Button
                      bg="black"
                      color="white"
                      onClick={() => setCount((count) => (count = 0))}
                    >
                      Restablecer
                    </Button>
                    <Button
                      ml="10px"
                      bg="black"
                      color="white"
                      onClick={() => setCount((count) => count - 1)}
                    >
                      -
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
