import React, { useEffect, useState } from "react";
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

function Catalog() {
  const [catalog, setCatalog] = useState([]);

  const getCatalog = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getCatalog");
      console.log(response.data);
      setCatalog(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCatalog();
  }, []);
  return (
    <TableContainer w={"100%"} mx={"auto"}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Bean</Th>
            <Th>Description</Th>
            <Th>Price/Unit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {catalog.map((item) => (
            <Tr>
              <Td
                maxW={"200px"}
                whiteSpace={"pre-wrap"}
                wordWrap={"break-word"}
              >
                {item.bean}
              </Td>
              <Td
                maxW={"200px"}
                whiteSpace={"pre-wrap"}
                wordWrap={"break-word"}
              >
                {item.description}
              </Td>
              <Td
                maxW={"200px"}
                whiteSpace={"pre-wrap"}
                wordWrap={"break-word"}
              >
                ${item.price}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Catalog;
