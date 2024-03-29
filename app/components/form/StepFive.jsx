"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
const StepFive = (props) => {
  //*Things are commented out here in case you need input boxes so you can just uncomment and use
  return (
    <FormControl
      display="flex"
      flexDirection="column"
      justifyContent="space-around "
      width={{
        base: "100%",
        md: "80%",
        lg: "80%",
        xl: "80%",
        "2xl": "100%",
      }}
      maxW={{
        base: "95%",
        sm: "95%",
        md: "80%",
        lg: "90%",
        xl: "90%",
        "2xl": "600px",
      }}
      m="0 auto"
      height="100%"
      isRequired
    >
      <Box>
        <Heading
          fontSize={{ base: "27px", lg: "35px", "2xl": "40px " }}
          colorScheme=" hsl(213, 96%, 18%) "
        >
          Step Five
        </Heading>
        <Text m="20px auto" color="hsl(231, 11%, 63%)">
          {" "}
          Go to Next Step
        </Text>
        {/* <Stack spacing="20px ">
          <Box>
            <FormLabel fontSize="18">Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              fontSize="18px"
              mt="8px"
              padding="8px 15px "
              borderRadius="6px"
              outline="none"
              width="100% "
              border="1px solid  hsl(229, 24%, 87%)"
              _placeholder={{
                opacity: 0.8,
                color: "gray.500",
                fontFamily: "Ubuntu",
              }}
            />
          </Box>
          <Box>
            <FormLabel fontSize="18">Email Adress </FormLabel>
            <Input
              type="text"
              size="md"
              fontSize="18px"
              mt="8px"
              borderRadius="6px "
              outline="none"
              padding="8px 15px "
              border="1px solid  hsl(229, 24%, 87%)"
              width="100% "
              placeholder="Enter your email adress"
              _placeholder={{
                opacity: 0.8,
                color: "gray.500",
                fontFamily: "Ubuntu",
              }}
            />
          </Box>
          <Box>
            <FormLabel>Flight Number </FormLabel>
            <Input
              type="text"
              size="md"
              border="1px solid  hsl(229, 24%, 87%)"
              fontSize="18px"
              borderRadius="6px"
              outline="none "
              mt="8px"
              padding="8px 15px "
              width="100% "
              placeholder="Enter Flight Number "
              _placeholder={{
                opacity: 0.8,
                color: "gray.500",
                fontFamily: "Ubuntu",
              }}
            />
          </Box>
        </Stack> */}
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Button
          type="submit"
          color="white"
          fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
          borderRadius="7px "
          backgroundColor="hsl(213, 96%, 18%)"
          padding="10px 20px"
          border="none"
          outline="none"
          cursor="pointer"
          _hover={{
            backgroundColor: "hsl(213, 96%, 50%)",
          }}
          onClick={() => props?.setStep(4)}
        >
          Previous
        </Button>
        <Button
          type="submit"
          color="white"
          fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
          borderRadius="7px "
          backgroundColor="hsl(213, 96%, 18%)"
          padding="10px 20px"
          border="none"
          outline="none"
          cursor="pointer"
          _hover={{
            backgroundColor: "hsl(213, 96%, 50%)",
          }}
          onClick={() => props?.setStep(6)}
        >
          Next
        </Button>
      </Box>
    </FormControl>
  );
};

export default StepFive;
