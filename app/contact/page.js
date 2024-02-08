import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

const page = () => {
  return (
    <Container maxW="100%" h="100vh">
      <Box display="flex" justifyContent="center" alignItems="center" h="100%">
        <Heading fontSize="40px ">Contact Page</Heading>
      </Box>
    </Container>
  );
};

export default page;
