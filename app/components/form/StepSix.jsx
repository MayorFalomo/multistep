"use client";
import React, { useEffect, useState } from "react";
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
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
const StepSix = (props) => {
  //? Parts of the code are commented out should in case you want to add more input boxes it's easier just uncomment it out

  const submitForm = async () => {
    try {
      var formData = new FormData();
      formData.append("flight_number", props.formData.flightNumber);
      formData.append("booking_number", props.formData.bookingNumber);
      formData.append("name", props.formData.name);
      formData.append("surname", props.formData.surname);
      formData.append("email", props.formData.email);
      formData.append("date", props.formData.date);
      formData.append("address", props.formData.address);
      formData.append("phone", props.formData.telephone);
      formData.append("address", props.formData.address);

      //   for (var pair of formData.entries()) {
      //     console.log(pair[0] + ", " + pair[1]);
      //   }
      //   console.log(...formData, "my formData ");

      await axios({
        method: "POST",
        url: "https://apps.converter.bloombyte.dev/submit-flight/",
        data: formData,

        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          //   console.log(response.data);
          props.setStep(7);
        })
        .catch((error) => {
          console.log(error);
          props.setErrorMessage(true);
        });
    } catch (error) {
      console.log(error);
      props.setErrorMessage(true);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ height: "100%" }}
      >
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
              Step Six
            </Heading>
            <Text m="20px auto" color="hsl(231, 11%, 63%)">
              {" "}
              Go to Next Step
            </Text>
            {props.errorMessage ? (
              <Text color="red" fontSize="20px">
                Sorry! An Error has occurred, Ensure you typed all your values
                correctly{" "}
                <Tag
                  mt="4px"
                  onClick={() => props.setStep(1)}
                  cursor="pointer"
                  color="blue"
                >
                  <TagLabel>Try Again </TagLabel>
                </Tag>
                {/* <span
              color="hsl(213, 96%, 18%)"
              cursor="pointer"
              onClick={() => props?.setStep(1)}
            >
              Try again{" "}
            </span> */}
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
      </motion.div>
    </AnimatePresence>
  );
};

export default StepSix;
