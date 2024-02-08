import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

const about = () => {
  return (
    <Container m="0" p="0" w="100%" maxW="100%" h="100vh">
      <Box display="flex" justifyContent="center" alignItems="center" h="100%">
        <Heading fontSize={{ base: "30px", lg: "35px", "2xl": "40px " }}>
          About Page
        </Heading>
      </Box>
    </Container>
  );
};

export default about;
