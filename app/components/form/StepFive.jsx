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
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import "./form.css";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "@chakra-ui/icons";

const StepFive = (props) => {
  const [confirmedSignature, setConfirmedSignature] = useState(false);
  const [signUrl, setSignUrl] = useState("");
  const [close, setClose] = useState(false);
  //seEffect to run the getSignature function on page load
  useEffect(() => {
    getSignature();
  }, []);

  //Function to submit formData info to the create-signature url
  const getSignature = async () => {
    setClose(true);
    try {
      props.setStep(6);
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

      // const baseUrl = "https://be.flightapp.bloombyte.dev";
      // await axios({
      //   method: "POST",
      //   url: `${baseUrl}/create-signature/`,
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // })
      //   .then((res) => {
      //     setSignUrl(res.data.url);
      //     setConfirmedSignature(false);
      //   })
      //   .catch((err) => {
      //     console.log(err), setConfirmedSignature(true);
      //     setSignUrl(true);
      //     // setTimeout(() => {
      //     //   setConfirmedSignature(false);
      //     // }, 5000);
      //   });
    } catch (err) {
      console.log(err);
      setConfirmedSignature(true);
      setSignUrl(true);
    }
  };

  //UseEffect to load Iframe
  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.src = signUrl;
    iframe.style.cssText =
      "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999; height: 90%; width: 90%; border: none;";
    document.body.appendChild(iframe);

    //!Function to listen for events and run actions accordingly
    const messageHandler = (e) => {
      if (e.data.event === "completed") {
        props.setStep(6);
        document.body.removeChild(iframe);
        window.removeEventListener("message", messageHandler); //Then Remove the event listener
      }
    };

    window.addEventListener("message", messageHandler);

    return () => {
      window.removeEventListener("message", messageHandler);
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    };
  }, [signUrl]);

  const removeIframe = () => {
    document.body.removeChild(document.querySelector("iframe"));
    setClose(false);
  };

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
      </Box>

      {!signUrl ? (
        <Stack justifyContent="center" direction="row" spacing={4}>
          <Text>While Loading </Text>

          <Spinner
            thickness="3px"
            speed="0.65s"
            emptyColor="gray.200"
            color="gray.500"
            size="md"
          />
        </Stack>
      ) : (
        " "
      )}

      {confirmedSignature && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            color: "red",
            textAlign: "center",
            marginTop: "30px",
            fontWeight: "bold",
          }}
        >
          {" "}
          <Text>Seems an Error has occurred </Text>
        </motion.div>
      )}

      {close ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            color: "red",
            textAlign: "center",
            marginTop: "30px",
            fontWeight: "bold",
            position: "fixed",
            right: "40px",
            top: "45px",
            zIndex: "999999",
            cursor: "pointer",
          }}
          onClick={removeIframe}
        >
          {" "}
          <Text>{<CloseIcon />}</Text>
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
