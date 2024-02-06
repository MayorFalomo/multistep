import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

const about = () => {
  return (
    <div>
      <Container h="100vh" border="2px blue solid ">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          border="2px green solid "
        >
          <Heading fontSize="40px ">About Page</Heading>
        </Box>
      </Container>
    </div>
  );
};

export default about;
