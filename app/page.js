"use client";
import { useState } from "react";
import styles from "./page.module.css";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  ThemeProvider,
  extendTheme,
  theme,
} from "@chakra-ui/react";
import StepOne from "./components/form/StepOne";
import StepTwo from "./components/form/StepTwo";
import StepThree from "./components/form/StepThree";
import StepFour from "./components/form/StepFour";
import StepFive from "./components/form/StepFive";
import SuccessPage from "./components/form/SuccessPage";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Home() {
  const styleInput = {
    border: "1px solid  hsl(231, 11%, 63%)",
    padding: "8px 15px",
    borderRadius: "8px",
  };

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [formData, setFormData] = useState({
    name,
    email,
    // phone,
    flightNumber,
    date,
    address,
    zipCode,
  });

  const breakpoints = {
    base: "0px",
    sm: "450px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  // const theme = extendTheme({ breakpoints });

  // console.log(formData, "formData");
  return (
    <Container
      maxW={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100vw",
        xl: "100%",
        "2xl": "full",
      }}
      w={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100vw",
        xl: "100%",
        "2xl": "full",
      }}
      maxH={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "full",
      }}
      // border="3px yellow solid"
      p="0"
    >
      <Container
        maxW={{ base: "100%", lg: "100%", xl: "100%" }}
        overflow="hidden"
        backgroundColor="black"
        h="70vh"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          // w={{ base: "40%", lg: "60%", xl: "40%" }}
          // border="2px green solid "
        >
          <Heading color="#fff" fontSize="40px ">
            Home Page
          </Heading>
        </Box>
      </Container>
      <Container
        h="100vh"
        maxH="100%"
        display="flex"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        alignItems="center"
        maxWidth="100%"
        // m="5px 5px"
        // overflow="hidden"
        // border="2px crimson solid "
        p="0"
        m="0"
      >
        <Box
          backgroundImage="./sidebar.svg"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          objectFit="cover"
          height={{ base: "30%", md: "100%" }}
          // width="500px"
          // maxW="40%"
          w={{
            base: "100%",
            sm: "100%",
            md: "40%",
            lg: "500px",
            xl: "500px",
            "2xl": "500px",
          }}
          maxW={{
            base: "100%",
            sm: "100%",
            md: "70%",
            lg: "40%",
            xl: "40%",
            "2xl": "40%",
          }}
          // border="2px red solid "
        >
          <Stack
            direction={{ base: "row", md: "column" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={{ base: "center", md: "flex-start" }}
            spacing="20px"
            mt="30px"
            p="20px"
            // border="2px red solid "
          >
            <Flex alignItems="center" gap="20px">
              <Text
                border={step == 1 ? "none" : "2px white solid "}
                width="40px"
                height="40px"
                borderRadius="50% "
                colorScheme="black"
                placeContent="center"
                display="grid"
                color="white"
                cursor="pointer"
                backgroundColor={step == 1 ? "hsl(228, 100%, 84%) " : ""}
                onClick={() => setStep(1)}
              >
                {" "}
                1
              </Text>
              <Box
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                gap="10px"
              >
                <Heading color="white">Step 1 </Heading>
                <Text color="white">Your Info </Text>
              </Box>
            </Flex>
            <Flex alignItems="center" gap="20px">
              <Text
                border={step == 2 ? "none" : "2px white solid "}
                width="40px"
                height="40px"
                borderRadius="50% "
                color="white"
                placeContent="center"
                display="grid"
                cursor="pointer"
                backgroundColor={step == 2 ? "hsl(228, 100%, 84%) " : ""}
                onClick={() => setStep(2)}
              >
                2{" "}
              </Text>
              <Box
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                gap="10px"
              >
                <Heading color="white">Step 2 </Heading>
                <Text color="white">Your Info </Text>
              </Box>
            </Flex>
            <Flex alignItems="center" gap="20px">
              <Text
                border={step == 3 ? "none" : "2px white solid "}
                width="40px"
                height="40px"
                borderRadius="50% "
                color="white"
                placeContent="center"
                display="grid"
                cursor="pointer"
                backgroundColor={step == 3 ? "hsl(228, 100%, 84%) " : ""}
                onClick={() => setStep(3)}
              >
                3{" "}
              </Text>
              <Box
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                gap="10px"
              >
                <Heading color="white">Step 3 </Heading>
                <Text color="white">Your Info </Text>
              </Box>
            </Flex>
            <Flex alignItems="center" gap="20px">
              <Text
                border={step == 4 ? "none" : "2px white solid "}
                width="40px"
                height="40px"
                borderRadius="50% "
                color="white"
                cursor="pointer"
                placeContent="center"
                display="grid"
                backgroundColor={step == 4 ? "hsl(228, 100%, 84%) " : ""}
                onClick={() => setStep(4)}
              >
                4{" "}
              </Text>
              <Box
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                gap="10px"
              >
                <Heading color="white">Step 5 </Heading>
                <Text color="white">Your Info </Text>
              </Box>
            </Flex>

            <Flex alignItems="center" gap="20px">
              <Text
                border={step == 5 ? "none" : "2px white solid "}
                width="40px"
                height="40px"
                borderRadius="50% "
                color="white"
                cursor="pointer"
                placeContent="center"
                display="grid"
                backgroundColor={step == 5 ? "hsl(228, 100%, 84%) " : ""}
                onClick={() => setStep(5)}
              >
                5{" "}
              </Text>
              <Box
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                gap="10px"
              >
                <Heading color="white">Step 5 </Heading>
                <Text color="white">Your Info </Text>
              </Box>
            </Flex>
          </Stack>
        </Box>

        <Container
          w={{ base: "100%", sm: "100%", lg: "60%", xl: "80%", "2xl": "80%" }}
          height="100%"
          p="0"
        >
          {step == 1 ? (
            <StepOne
              setStep={setStep}
              flightNumber={flightNumber}
              date={date}
              formData={formData}
              setFormData={setFormData}
            />
          ) : (
            ""
          )}
          {step == 2 && (
            <StepTwo
              setStep={setStep}
              name={name}
              email={email}
              address={address}
              setAddress={setAddress}
              zipCode={zipCode}
              setZipCode={setZipCode}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step == 3 && (
            <StepThree setStep={setStep} setFormData={setFormData} />
          )}
          {step == 4 && (
            <StepFour setStep={setStep} setFormData={setFormData} />
          )}
          {step == 5 && (
            <StepFive
              setStep={setStep}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step == 6 && (
            <SuccessPage setStep={setStep} setFormData={setFormData} />
          )}
        </Container>
      </Container>
    </Container>
    // </ChakraProvider>
  );
}
