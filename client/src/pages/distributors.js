import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

function Distributors() {
  const [distributors, setDistributors] = useState([]);

  const getDistributors = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getDistributor");
      console.log(response.data);
      setDistributors(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDistributors();
  }, []);
  return (
    <Box maxW={"70%"}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Distributor Name</Th>
              <Th>City</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {distributors.map((item) => (
              <Tr>
                <Td>{item.name}</Td>
                <Td>{item.city}</Td>
                <Td>
                  <Link to={`/editdistributor/${item._id}`}>
                    <Button>Edit</Button>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Link to={"/adddistributor"}>
        <Button m={5}>Add</Button>
      </Link>
    </Box>
  );
}

export default Distributors;
