"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import moment from "moment/moment";
import axios from "axios";
import { extendTheme } from "@chakra-ui/react";
const StepOne = (props) => {
  const [values, onChange] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dateValue, setDateValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    //If the response status is 200 then setFormData to be the value
    // const response = axios
    //   .post("urlToCheckFlightNumber", value)
    //   .catch((err) => console.log(err));
    setDateValue(values);
    props?.setFormData({
      ...props?.formData,
      flightNumber: value,
      date: values,
    });
    props.setDate(values);
  };

  const breakpoints = {
    base: "0px",
    sm: "450px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  // useEffect(() => {
  //   console.log(values.toDateString.length, "present lenth");
  //   // values.toString.length > 1 ? setDateValue(values) : setDateValue("");
  // }, [values]);

  // console.log(values);
  // console.log(dateValue, "I am dateVale");

  const theme = extendTheme({ breakpoints });

  return (
    <FormControl
      display="flex"
      flexDirection="column"
      justifyContent="space-around "
      maxW={{
        base: "95%",
        sm: "95%",
        md: "80%",
        lg: "90%",
        xl: "90%",
        "2xl": "600px",
      }}
      minW={{
        base: "95%",
        sm: "95%",
        md: "40%",
        lg: "60%",
        xl: "60%",
        "2xl": "500px",
      }}
      w={{
        base: "95%",
        sm: "95%",
        md: "80%",
        lg: "90%",
        xl: "90%",
        "2xl": "100%",
      }}
      m="0 auto"
      p="0"
      height="100%"
      isRequired
      onSubmit={handleChange}
    >
      <Box>
        <Heading
          fontSize={{ base: "27px", lg: "35px", "2xl": "40px " }}
          colorScheme=" hsl(213, 96%, 18%) "
        >
          Personal Info{" "}
        </Heading>
        <Text m="20px auto" color="hsl(231, 11%, 63%)">
          {" "}
          Please provide your name, email address and phone number{" "}
        </Text>
        <Stack spacing="20px ">
          <Box>
            <FormLabel fontSize="18">Flight Number</FormLabel>
            <Input
              type="text"
              placeholder="Enter your flight number"
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
              name="flight number"
              onChange={(e) => {
                props.setFormData({
                  ...props.formData,
                  flightNumber: e.target.value,
                });
              }}
              defaultValue={props.flightNumber}
            />
          </Box>

          <Box>
            <FormLabel>Enter Date </FormLabel>
            {/* <InputGroup mt="8px" border="1px solid  hsl(229, 24%, 87%)"> */}
            <Input
              // type="text"
              size="md"
              // disabled
              border="1px solid  hsl(229, 24%, 87%)"
              backgroundColor="white"
              fontSize="18px"
              w="100%"
              borderRadius="6px"
              outline="none "
              padding="8px 15px "
              width="100% "
              placeholder={"Enter Date "}
              _placeholder={{
                opacity: 0.8,
                color: "gray.500",
                fontFamily: "Ubuntu",
              }}
              type="datetime-local"
              onChange={(e) => {
                props.setDate(e.target.value);
              }}
              defaultValue={props.date}
            />

            {/* {openCalendar ? (
              <Calendar
                onChange={onChange}
                maxDate={new Date()}
                value={values}
              />
            ) : (
              ""
            )} */}
          </Box>
        </Stack>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button
          type="submit"
          color="white"
          borderRadius="7px "
          fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
          backgroundColor="hsl(213, 96%, 18%)"
          padding="10px 20px"
          border="none"
          outline="none"
          cursor="pointer"
          _hover={{
            backgroundColor: "hsl(213, 96%, 50%)",
          }}
          onClick={() => props?.setStep(2)}
        >
          Next
        </Button>
      </Box>
    </FormControl>
  );
};

export default StepOne;

// // Create a function to convert JSON to FormData
// function jsonToFormData(json) {
//   const formData = new FormData();

//   Object.keys(json).forEach((key) => {
//     formData.append(key, json[key]);
//   });

//   return formData;
// }

// // Example JSON data
// const jsonData = {
//   username: "john_doe",
//   email: "john@example.com",
// };

// // Convert JSON data to FormData
// const formData = jsonToFormData(jsonData);
