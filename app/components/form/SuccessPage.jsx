import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="2px red solid"
      h="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <Box>
          <Image
            boxSize="150px"
            objectFit="cover"
            src="./success.svg"
            alt="img"
          />
        </Box>
        <Heading fontSize="50px" color="hsl(213, 96%, 18%)">
          Thank you!{" "}
        </Heading>
        <Text fontSize="20px" color="hsl(231, 11%, 63%)">
          Your information has been submitted successfully!
        </Text>
        <Link href="/">
          {" "}
          <Text fontSize="18px " colorScheme="hsl(213, 96%, 18%) ">
            go to homepage{" "}
          </Text>{" "}
        </Link>
      </Box>
    </Container>
  );
};

export default SuccessPage;
