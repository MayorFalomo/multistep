import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
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
        <Heading
          fontSize={{ base: "30px", md: "35px", lg: "40px", "2xl": "50px " }}
          color="hsl(213, 96%, 18%)"
        >
          Thank you!{" "}
        </Heading>
        <Text
          fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
          color="hsl(231, 11%, 63%)"
        >
          Your information has been submitted successfully!
        </Text>
        <Link href="/">
          {" "}
          <Text
            fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
            colorScheme="hsl(213, 96%, 18%) "
          >
            go to homepage{" "}
          </Text>{" "}
        </Link>
      </Box>
    </Container>
  );
};

export default SuccessPage;
