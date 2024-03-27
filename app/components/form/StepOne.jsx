"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment/moment";
import { useState } from "react";
import "./form.css";
const StepOne = (props) => {
  const [validate, setValidate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [fillFields, setFillFields] = useState(false);

  const submitForm = async () => {
    const accessKey = `${process.env.NEXT_PUBLIC_API_KEY_Flight_Number}`;
    const url = `https://api.aviationstack.com/v1/flights?access_key=${accessKey}&flight_number=${props.formData.flightNumber}`;
    setValidate(true);
    setTimeout(() => {
      setValidate(false);
    }, 7000);

    if (props.formData.flightNumber && props.formData.date) {
      setLoading(true);

      try {
        await fetch(url)
          .then((response) => {
            if (response.status === 200) {
              setLoading(false);
              props?.setStep(2);
              console.log(response.json, "successful");
            } else if (response.status === 401) {
              setLoading(false);

              console.log(response, "The given user account is inactive");
            } else if (response.status === 404) {
              setLoading(false);

              console.log(response, "User Not found");
            } else if (response.status === 500) {
              setLoading(false);
              setServerError(true);
              setTimeout(() => {
                setServerError(false);
              }, 5000);
              console.log(response, "Server Error occured");
            } else {
              setLoading(false);

              console.log(`An error occurred: ${response.status}`);
            }
          })
          .catch((error) => console.log("error", error) && setLoading(false));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
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
      >
        <Box>
          <Heading
            fontSize={{ base: "27px", lg: "35px", "2xl": "40px " }}
            colorScheme=" hsl(213, 96%, 18%) "
          >
            Enter Your Flight Number
          </Heading>
          <Text m="20px auto" color="hsl(231, 11%, 63%)">
            {" "}
            Please provide your flight number and date
          </Text>
          <Stack spacing="20px ">
            <Box>
              <FormLabel fontSize="18">Flight Number</FormLabel>
              <Input
                type="text"
                placeholder={
                  props.formData.flightNumber
                    ? props.formData.flightNumber
                    : "Enter your flight number"
                }
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
                    flightNumber: e.target.value.trim().replace(/\s/g, ""),
                  });
                }}
                defaultValue={props.flightNumber}
              />
            </Box>

            <Box>
              <FormLabel>Enter Date </FormLabel>
              <Input
                size="md"
                border="1px solid  hsl(229, 24%, 87%)"
                backgroundColor="white"
                fontSize="18px"
                w="100%"
                borderRadius="6px"
                outline="none "
                padding="8px 15px "
                width="100% "
                placeholder={
                  props.formData.date ? props.formData.date : "Enter Date "
                }
                _placeholder={{
                  opacity: 0.8,
                  color: "gray.500",
                  fontFamily: "Ubuntu",
                }}
                type="datetime-local"
                onChange={(e) => {
                  props.setFormData({
                    ...props.formData,
                    date: moment(e.target.value).format("L"),
                  });
                }}
              />
            </Box>

            {validate ? (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ color: "red", margin: "30px auto" }}
              >
                {!props.formData.flightNumber ? (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    *Add a flight number*
                  </motion.li>
                ) : (
                  ""
                )}
                {!props.formData.date ? (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    *date must also be present*
                  </motion.li>
                ) : (
                  ""
                )}
                {serverError ? (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Server Error occurred
                  </motion.li>
                ) : (
                  ""
                )}
              </motion.ul>
            ) : (
              ""
            )}
          </Stack>
        </Box>

        <Box display="flex" justifyContent="flex-end">
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
              onClick={submitForm}
            >
              Next
            </Button>
          )}
        </Box>
      </FormControl>
    </AnimatePresence>
  );
};

export default StepOne;
