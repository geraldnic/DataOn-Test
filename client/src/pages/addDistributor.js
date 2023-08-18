import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";

function AddDistributor() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    axios.post("http://localhost:3001/addDistributor", {
      name: name,
      city: city,
      state: state,
      country: country,
      phone: phone,
      email: email,
    });
  };
  return (
    <Box maxW={"30%"} m={5}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Distributor Name</FormLabel>
          <Input type="text" onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input type="text" onChange={(e) => setCity(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>State/Region</FormLabel>
          <Input type="text" onChange={(e) => setState(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select
            placeholder="Select country"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="United States">United States</option>
            <option value="The Netherlands">The Netherlands</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input type="number" onChange={(e) => setPhone(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <Button my={5} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default AddDistributor;
