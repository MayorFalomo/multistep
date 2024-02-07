"use client";
import React, { useState } from "react";
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

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    //If the response status is 200 then setFormData to be the value
    // const response = axios
    //   .post("urlToCheckFlightNumber", value)
    //   .catch((err) => console.log(err));
    props?.setFormData({
      ...props?.formData,
      flightNumber: value,
      date: values,
    });
  };

  const breakpoints = {
    base: "0px",
    sm: "450px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  const theme = extendTheme({ breakpoints });

  // console.log(values, "This is value");
  return (
    // <ChakraProvider>
    <FormControl
      display="flex"
      flexDirection="column"
      justifyContent="space-around "
      // border="2px green solid"
      // width="40%"
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
              name="zipCode"
              onChange={handleChange}
              defaultValue={props.flightNumber}
            />
          </Box>

          <Box>
            <FormLabel>Enter Date </FormLabel>
            <InputGroup mt="8px" border="1px solid  hsl(229, 24%, 87%)">
              <Input
                type="text"
                size="md"
                // disabled
                border="none"
                backgroundColor="white"
                fontSize="18px"
                w="100%"
                borderRadius="6px"
                outline="none "
                padding="8px 15px "
                width="100% "
                placeholder={
                  props.date
                    ? `${moment(props.date).format("MMM Do YY")}`
                    : "Enter Date "
                }
                _placeholder={{
                  opacity: 0.8,
                  color: "gray.500",
                  fontFamily: "Ubuntu",
                }}
                onChange={handleChange}
                defaultValue={
                  props.date ? moment(values).format("MMM Do YY") : ""
                }
              />
              <InputRightAddon p="0">
                <IconButton
                  onClick={() => setOpenCalendar(!openCalendar)}
                  colorScheme="blue"
                  border="none"
                  outline="none"
                  height="100%"
                  cursor="pointer"
                  aria-label="Select date"
                  icon={<ChevronDownIcon fontSize="24px " />}
                />
              </InputRightAddon>
            </InputGroup>
            {openCalendar ? (
              <Calendar
                onChange={onChange}
                maxDate={new Date()}
                value={values}
              />
            ) : (
              ""
            )}
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
          onClick={() => props?.setStep(2)}
        >
          Next
        </Button>
      </Box>
    </FormControl>
    // </ChakraProvider>
  );
};

export default StepOne;
