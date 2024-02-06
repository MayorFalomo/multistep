import React from "react";
import { Container, Flex, HStack, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container
      //   border="2px red solid "
      position="fixed "
      top="0"
      w="100%"
      zIndex="99"
      backgroundColor="#fff"
      color="#000"
    >
      <Flex
        width="95%"
        m="20px auto"
        alignItems="center"
        justifyContent="space-between "
        gap="20px"
      >
        <h1>Logo</h1>
        <List>
          <HStack spacing="20px ">
            <ListItem cursor="pointer ">
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="/about">About </Link>{" "}
            </ListItem>
            <ListItem>
              <Link href="/contact">Contact Us </Link>
            </ListItem>
            <ListItem>
              <Link href="/formpage"> Form Page</Link>
            </ListItem>
          </HStack>
        </List>
      </Flex>
    </Container>
  );
};

export default Navbar;
