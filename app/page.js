"use client";
import { useState } from "react";
import styles from "./page.module.css";
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
import StepOne from "./components/form/StepOne";
import StepTwo from "./components/form/StepTwo";
import StepThree from "./components/form/StepThree";
import StepFour from "./components/form/StepFour";
import StepFive from "./components/form/StepFive";
import SuccessPage from "./components/form/SuccessPage";
import axios from "axios";

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

  const submitForm = async () => {
    try {
      const response = axios
        .post("urlToSubmitFormTo", formData)
        .catch((err) => console.log(err));
      // response.status == 200 ? setStep(6) : setAuthMessage(true);
      setStep(6); //Remove this line later and comment out the line above
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(formData, "formData");
  return (
    <div className="app">
      <Container overflow="hidden" backgroundColor="black" h="50vh">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          // border="2px green solid "
        >
          <Heading color="#fff" fontSize="40px ">
            Home Page
          </Heading>
        </Box>
      </Container>
      <Container
        h="100vh"
        display="flex"
        alignItems="center"
        width="100%"
        // m="5px 5px"
        overflow="hidden"
        // border="2px red solid "
      >
        <Box
          backgroundImage="./sidebar.svg"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="cover"
          objectFit="cover"
          height="100%"
          width="500px"
          maxW="40%"
        >
          <Stack spacing="20px" mt="30px" p="20px">
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
              <Box display="flex" flexDirection="column" gap="10px">
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
              <Box display="flex" flexDirection="column" gap="10px">
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
              <Box display="flex" flexDirection="column" gap="10px">
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
              <Box display="flex" flexDirection="column" gap="10px">
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
                4{" "}
              </Text>
              <Box display="flex" flexDirection="column" gap="10px">
                <Heading color="white">Step 5 </Heading>
                <Text color="white">Your Info </Text>
              </Box>
            </Flex>
          </Stack>
        </Box>

        <Container width="80%" height="100%">
          {step == 1 ? (
            <StepOne
              setStep={setStep}
              flightNumber={flightNumber}
              // setFlightNumber={setFlightNumber}
              date={date}
              // setDate={setDate}
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
            <StepFive setStep={setStep} setFormData={setFormData} />
          )}
          {step == 6 && (
            <SuccessPage
              setStep={setStep}
              submitForm={submitForm}
              setFormData={setFormData}
            />
          )}
        </Container>
      </Container>
    </div>
  );
}
