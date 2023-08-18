import React from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";

function Upload() {
  return (
    <Box maxW={"50%"} my={10}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Document File</FormLabel>
        <Input type="file" />
      </FormControl>
      <FormControl>
        <FormLabel>Author</FormLabel>
        <Input type="text" />
      </FormControl>
      <Button m={5}>Add Document</Button>
    </Box>
  );
}

export default Upload;
