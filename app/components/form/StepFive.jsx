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
  return (
    <FormControl
      display="flex"
      flexDirection="column"
      justifyContent="space-around "
      //   border="2px green solid"
      width="40%"
      m="0 auto"
      height="100%"
      isRequired
    >
      <Box>
        <Heading fontSize="40px " colorScheme=" hsl(213, 96%, 18%) ">
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
          fontSize="20px"
          borderRadius="7px "
          backgroundColor="hsl(213, 96%, 18%)"
          padding="10px 20px"
          border="none"
          outline="none"
          cursor="pointer"
          onClick={() => props?.setStep(4)}
        >
          Previous
        </Button>
        <Button
          type="submit"
          color="white"
          fontSize="20px"
          borderRadius="7px "
          backgroundColor="hsl(213, 96%, 18%)"
          padding="10px 20px"
          border="none"
          outline="none"
          cursor="pointer"
          onClick={() => props.submitForm()}
        >
          Submit
        </Button>
      </Box>
    </FormControl>
  );
};

export default StepFive;
