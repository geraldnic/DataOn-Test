import React, { useState, useEffect } from "react";
import LoginForm from "../components/auth/LoginForm";
import { Box, Text } from "@chakra-ui/react";
import axios from "axios";

function Home() {
  const [catalog, setCatalog] = useState([]);

  const getCatalog = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getCatalog");
      console.log(response.data);
      setCatalog(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCatalog();
  }, []);
  return (
    <Box w={"100vw"}>
      <Text fontWeight={"bold"}>Bean of the Day</Text>
      <Text>{catalog.bean}</Text>
      <Text fontWeight={"bold"}>Sale Price</Text>
      <Text>{catalog.price}</Text>
      <Text fontWeight={"bold"}>Description</Text>
      <Text maxW={"70%"} whiteSpace={"pre-wrap"} wordWrap={"break-word"}>
        {catalog.description}
      </Text>
    </Box>
  );
}

export default Home;
