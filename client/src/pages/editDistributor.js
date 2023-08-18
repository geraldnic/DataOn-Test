import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditDistributor() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  let { id } = useParams();

  const [distributors, setDistributors] = useState([]);

  const navigate = useNavigate();

  const getDistributor = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/findDistributor",
        {
          id,
        }
      );
      setDistributors(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDistributor();
  }, []);

  useEffect(() => {
    setName(distributors.name);
    setCity(distributors.city);
    setState(distributors.state);
    setCountry(distributors.country);
    setPhone(distributors.phone);
    setEmail(distributors.email);
  }, [distributors]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put("http://localhost:3001/editDistributor", {
        id,
        name,
        city,
        state,
        country,
        phone,
        email,
      });
    } catch (err) {
      console.error(err);
    }
    navigate("/distributors");
  };

  return (
    <Box maxW={"30%"} m={5}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Distributor Name</FormLabel>
          <Input
            type="text"
            defaultValue={distributors.name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            defaultValue={distributors.city}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>State/Region</FormLabel>
          <Input
            type="text"
            defaultValue={distributors.state}
            onChange={(e) => setState(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select
            placeholder="Select Country"
            defaultValue={distributors.country}
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
          <Input
            type="number"
            defaultValue={distributors.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            defaultValue={distributors.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button my={5} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default EditDistributor;
