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
            <Tr key={item._id}>
              <Td
                maxW={"200px"}
                whiteSpace={"pre-wrap"}
              >
                {item.bean}
              </Td>
              <Td
                maxW={"200px"}
                whiteSpace={"pre-wrap"}
              >
                {item.description}
              </Td>
              <Td
                maxW={"200px"}
                whiteSpace={"pre-wrap"}
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
