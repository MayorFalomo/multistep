"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
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
import StepSix from "./components/form/StepSix";

export default function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [bookingNumber, setBookingNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [formData, setFormData] = useState({
    name,
    surname,
    email,
    telephone,
    flightNumber,
    date,
    address,
    bookingNumber,
  });

  const breakpoints = {
    base: "0px",
    sm: "450px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };

  return (
    <Container
      maxW={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "full",
      }}
      w={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
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
      p="0"
      overflow-x="hidden"
    >
      <Container
        maxW={{ base: "100%", lg: "100%", xl: "100%" }}
        overflow-x="hidden"
        backgroundColor="black"
        h="70vh"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
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
        >
          <Stack
            direction={{ base: "row", md: "column" }}
            wrap={{ base: "wrap", md: "none" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={{ base: "center", md: "flex-start" }}
            spacing="20px"
            mt="30px"
            p="20px"
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
                <Heading
                  fontSize={{ base: "30px", lg: "30px", "2xl": "35px " }}
                  color="white"
                >
                  Step 1{" "}
                </Heading>
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
                <Heading
                  fontSize={{ base: "30px", lg: "30px", "2xl": "35px " }}
                  color="white"
                >
                  Step 2{" "}
                </Heading>
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
                <Heading
                  fontSize={{ base: "30px", lg: "30px", "2xl": "35px " }}
                  color="white"
                >
                  Step 3{" "}
                </Heading>
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
                <Heading
                  fontSize={{ base: "30px", lg: "30px", "2xl": "35px " }}
                  color="white"
                >
                  Step 4{" "}
                </Heading>
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
                <Heading
                  fontSize={{ base: "30px", lg: "30px", "2xl": "35px " }}
                  color="white"
                >
                  Step 5{" "}
                </Heading>
                <Text color="white">Your Info </Text>
              </Box>
            </Flex>

            <Flex alignItems="center" gap="20px">
              <Text
                border={step == 6 ? "none" : "2px white solid "}
                width="40px"
                height="40px"
                borderRadius="50% "
                color="white"
                cursor="pointer"
                placeContent="center"
                display="grid"
                backgroundColor={step == 6 ? "hsl(228, 100%, 84%) " : ""}
                onClick={() => setStep(6)}
              >
                6{" "}
              </Text>
              <Box
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                gap="10px"
              >
                <Heading
                  fontSize={{ base: "30px", lg: "30px", "2xl": "35px " }}
                  color="white"
                >
                  Step 6{" "}
                </Heading>
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
              setDate={setDate}
              formData={formData}
              setFormData={setFormData}
            />
          ) : (
            ""
          )}
          {step == 2 && (
            <StepTwo
              setStep={setStep}
              bookingNumber={bookingNumber}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step == 3 && (
            <StepThree
              setStep={setStep}
              name={name}
              email={email}
              address={address}
              setAddress={setAddress}
              telephone={telephone}
              surname={surname}
              formData={formData}
              setFormData={setFormData}
            />
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
            <StepSix
              setStep={setStep}
              formData={formData}
              setFormData={setFormData}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          )}
          {step == 7 && (
            <SuccessPage setStep={setStep} setFormData={setFormData} />
          )}
        </Container>
      </Container>
    </Container>
  );
}
