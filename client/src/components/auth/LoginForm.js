import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      console.log(response);

      if (response.data.code === 200) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("username", response.data.username);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Flex justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <form onSubmit={handleSubmit}>
          <FormControl id="username" isRequired>
            <FormLabel>User ID:</FormLabel>
            <Input type="text" onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              type="submit"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
