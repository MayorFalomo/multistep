// import React from "react";
// import { Container, Flex, HStack, List, ListItem } from "@chakra-ui/react";
// import Link from "next/link";
"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  ListItem,
  List,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
// import Link from "next/link";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Links = ["Home", "About", "Contact", "Form Page"];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        zIndex="1"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Heading>Logo</Heading>
          </HStack>
          <Flex alignItems={"center"}>
            <List display={{ base: "none", md: "flex" }}>
              <ListItem
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                fontSize={{ base: "16px", sm: "18px" }}
                cursor="pointer "
              >
                <Link as={NextLink} href="/">
                  Home
                </Link>
              </ListItem>

              <ListItem
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                fontSize={{ base: "16px", sm: "18px" }}
                cursor="pointer "
              >
                <Link as={NextLink} href="/about">
                  About{" "}
                </Link>{" "}
              </ListItem>

              <ListItem
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                fontSize={{ base: "16px", sm: "18px" }}
                cursor="pointer "
              >
                <Link as={NextLink} href="/contact">
                  Contact Us{" "}
                </Link>
              </ListItem>

              <ListItem
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                fontSize={{ base: "16px", sm: "18px" }}
                cursor="pointer "
              >
                <Link as={NextLink} href="/formpage">
                  {" "}
                  Form Page
                </Link>
              </ListItem>
            </List>
            {/* <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack> */}

            <Menu>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <List>
                <ListItem
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  fontSize={{ base: "16px", sm: "18px" }}
                  cursor="pointer "
                >
                  <Link as={NextLink} href="/">
                    Home
                  </Link>
                </ListItem>

                <ListItem
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  fontSize={{ base: "16px", sm: "18px" }}
                  cursor="pointer "
                >
                  <Link as={NextLink} href="/about">
                    About{" "}
                  </Link>{" "}
                </ListItem>

                <ListItem
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  fontSize={{ base: "16px", sm: "18px" }}
                  cursor="pointer "
                >
                  <Link as={NextLink} href="/contact">
                    Contact Us{" "}
                  </Link>
                </ListItem>

                <ListItem
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  fontSize={{ base: "16px", sm: "18px" }}
                  cursor="pointer "
                >
                  <Link as={NextLink} href="/formpage">
                    {" "}
                    Form Page
                  </Link>
                </ListItem>
              </List>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
