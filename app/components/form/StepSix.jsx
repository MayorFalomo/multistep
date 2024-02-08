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
import axios from "axios";
const StepSix = (props) => {
  const submitForm = () => {
    try {
      console.log(props.formData, "response");
      const formData = new FormData();
      formData.append("flight_number", props.flightNumber);
      formData.append("date", props.date);
      formData.append("booking_number", props.bookingNumber);
      formData.append("name", props.name);
      formData.append("surname", props.surname);
      formData.append("email", props.email);
      formData.append("address", props.address);
      formData.append("phone", props.telephone);
      formData.append("address", props.address);
      console.log(formData, "Formdata ");
      axios
        .post("https://apps.converter.bloombyte.dev/submit-flight/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          props.setStep(7);
        })
        .catch((error) => {
          props?.setErrorMessage(true);
          console.log(error);
        });
      //   props.setStep(7);
    } catch (error) {
      console.log(error);
      props.setErrorMessage(true);
    }
  };

  console.log(props.date);

  return (
    <FormControl
      display="flex"
      flexDirection="column"
      justifyContent="space-around "
      width={{ base: "100%", md: "80%", lg: "80%", xl: "80%", "2xl": "100%" }}
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
          Step Six
        </Heading>
        <Text m="20px auto" color="hsl(231, 11%, 63%)">
          {" "}
          Go to Next Step
        </Text>
        {props.errorMessage ? (
          <Text color="red" fontSize="20px">
            Sorry! An Error has occurred{" "}
          </Text>
        ) : (
          ""
        )}
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
          onClick={() => props?.setStep(5)}
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
          onClick={submitForm}
        >
          submit
        </Button>
      </Box>
    </FormControl>
  );
};

export default StepSix;
