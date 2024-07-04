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
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const submitForm = async () => {
    try {
      setLoading(true);
      props.setStep(7);
      // var formData = new FormData();
      // formData.append("flight_number", props.formData.flightNumber);
      // formData.append("booking_number", props.formData.bookingNumber);
      // formData.append("name", props.formData.name);
      // formData.append("surname", props.formData.surname);
      // formData.append("email", props.formData.email);
      // formData.append("date", props.formData.date);
      // formData.append("address", props.formData.address);
      // formData.append("phone", props.formData.telephone);
      // formData.append("address", props.formData.address);

      //   for (var pair of formData.entries()) {
      //     console.log(pair[0] + ", " + pair[1]);
      //   }
      //   console.log(...formData, "my formData ");

      // await axios({
      //   method: "POST",
      //   url: "https://be.flightapp.bloombyte.dev/submit-flight/",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // })
      //   .then((response) => {
      //     if (response.status == 200) {
      //       setLoading(false);
      //       props.setStep(7);
      //     } else {
      //       console.log("Failed Error");
      //       setLoading(false);
      //       setTimeout(() => {
      //         set;
      //       }, 5000);
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setErrMessage(true);
      //     setTimeout(() => {
      //       setErrMessage(false);
      //     }, 4000);
      //     setLoading(false);
      //   });
    } catch (error) {
      console.log(error);
      setErrMessage(true);
      setTimeout(() => {
        setErrMessage(false);
      }, 4000);
      setLoading(false);
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
              Review your Information
            </Heading>
          </Box>
          <Box>
            <Stack spacing="20px">
              <Text>
                <b>Flight Number:</b> {props.formData.flightNumber}{" "}
              </Text>
              <Text>
                <b>Date:</b> {props.formData.date}{" "}
              </Text>
              <Text>
                <b>Booking Number:</b> {props.formData.bookingNumber}{" "}
              </Text>
              <Text>
                <b>Name:</b> {props.formData.name}{" "}
              </Text>
              <Text>
                <b>Surname:</b> {props.formData.surname}{" "}
              </Text>
              <Text>
                <b>Address:</b> {props.formData.address}{" "}
              </Text>
              <Text>
                <b>Telephone:</b> {props.formData.telephone}{" "}
              </Text>
              <Text>
                <b>Email:</b> {props.formData.email}{" "}
              </Text>
              <Text>
                <b>Bank Number:</b> {props.formData.ibanNumber}{" "}
              </Text>
            </Stack>
          </Box>

          {errMessage ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Text textAlign="center" color="red">
                Error Submitting Form
              </Text>
            </motion.div>
          ) : (
            ""
          )}
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
            {loading ? (
              <Button
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
              >
                <span className="loader"></span>
              </Button>
            ) : (
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
            )}
          </Box>
        </FormControl>
      </motion.div>
    </AnimatePresence>
  );
};

export default StepSix;
