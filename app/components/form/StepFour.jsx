"use client";
import React, { useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";
import "./form.css";

const StepFour = (props) => {
  const [fillFields, setFillFields] = useState(true);
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);

  const handleValidation = async () => {
    try {
      console.log(props.formData);

      if (props.formData.ibanNumber) {
        // props?.setStep(5);

        setLoading(true);
        var myHeaders = new Headers();
        myHeaders.append(
          "apikey",
          `${process.env.NEXT_PUBLIC_API_KEY_Banking}`
        );

        var requestOptions = {
          method: "GET",
          redirect: "follow",
          headers: myHeaders,
        };

        await fetch(
          `https://api.apilayer.com/bank_data/iban_validate?iban_number=${props.formData.ibanNumber}`,
          requestOptions
        )
          .then((response) => {
            if (response.status === 200) {
              console.log(response.text());
              setLoading(false);
              props?.setStep(5);
            } else if (response.status === 422) {
              setLoading(false);
              console.log(response, "error: Bad Request");

              setValidate(true);
              setTimeout(() => {
                setValidate(false);
              }, 5000);
            } else if (response.status === 404) {
              setLoading(false);
              console.log(response, "Not found");

              setValidate(true);
              setTimeout(() => {
                setValidate(false);
              }, 5000);
            } else {
              setLoading(false);

              console.log(`An error occurred: ${response.status}`);
            }
          })
          .catch((error) => console.log("error", error) && setLoading(false));
      } else {
        setLoading(false);
        setFillFields(true);
        setTimeout(() => {
          setFillFields(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Error validating IBAN:", error);
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
          //   border="2px green solid"
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
            {/* <Heading
              fontSize={{ base: "27px", lg: "35px", "2xl": "40px " }}
              colorScheme=" hsl(213, 96%, 18%) "
            >
              Step Four
            </Heading> */}
            {/* <Text m="20px auto" color="hsl(231, 11%, 63%)">
              {" "}
              Go to Next Step
            </Text> */}
            <Stack spacing="20px ">
              <Box>
                <FormLabel fontSize="18">Banking</FormLabel>
                <Input
                  type="text"
                  placeholder={
                    props.formData.ibanNumber
                      ? props.formData.ibanNumber
                      : "Enter your Bank"
                  }
                  fontSize="18px"
                  mt="8px"
                  padding="8px 15px"
                  borderRadius="6px"
                  outline="none"
                  width="100%"
                  maxLength="32"
                  textTransform="uppercase"
                  border="1px solid  hsl(229, 24%, 87%)"
                  _placeholder={{
                    opacity: 0.8,
                    color: "gray.500",
                    fontFamily: "Ubuntu",
                  }}
                  onChange={(e) =>
                    props.setFormData({
                      ...props.formData,
                      ibanNumber: e.target.value.trim().replace(/\s/g, ""),
                    })
                  }
                  defaultValue={props.ibanNumber}
                />
              </Box>
              {/* <Box>
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
              </Box> */}
              {/* <Box>
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
          </Box> */}
            </Stack>
            {validate ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ color: "red", textAlign: "center", marginTop: "30px" }}
              >
                *Please Enter Banking Number Again*{" "}
              </motion.p>
            ) : (
              ""
            )}
            {fillFields ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                style={{ color: "red", textAlign: "center", marginTop: "30px" }}
              >
                *Please fill all necessary fields*{" "}
              </motion.p>
            ) : (
              ""
            )}
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
              onClick={() => props?.setStep(3)}
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
                onClick={handleValidation}
              >
                Next
              </Button>
            )}
          </Box>
        </FormControl>
      </motion.div>
    </AnimatePresence>
  );
};

export default StepFour;
