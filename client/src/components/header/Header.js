import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

function Header() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const logout = () => {
    cookies.remove("access_token", { path: `/` });
    window.localStorage.removeItem("email");
    navigate("/login");
  };
  return (
    <Box>
      <Flex>
        <Box w={"100px"} m={5}>
          <Image src="https://static.vecteezy.com/system/resources/previews/002/412/377/original/coffee-cup-logo-coffee-shop-icon-design-free-vector.jpg" />
        </Box>
        <Box mt={4}>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Coffee Valley
          </Heading>
          <Text>Taste the love in every cup!</Text>
          <Text>One Alewife Center 3rd Floor</Text>
          <Text>Cambridge, MA 02140</Text>
        </Box>
      </Flex>
      <SimpleGrid
        columns={6}
        spacing="40px"
        textAlign={"center"}
        py={3}
        bg={"brown"}
        color={"white"}
      >
        <Link to={"/"}>
          <Box>
            <Text>Home</Text>
          </Box>
        </Link>
        <Link to={"/catalog"}>
          <Box>
            <Text>Catalog</Text>
          </Box>
        </Link>
        <Link to={"/order"}>
          <Box>
            <Text>Order Status</Text>
          </Box>
        </Link>
        <Link to={"/distributors"}>
          <Box>
            <Text>Distributors</Text>
          </Box>
        </Link>
        <Link to={"/upload"}>
          <Box>
            <Text>Upload</Text>
          </Box>
        </Link>
        <Box onClick={logout} _hover={{ cursor: "pointer" }}>
          <Text>Logout</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Header;
