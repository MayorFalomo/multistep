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
const StepTwo = (props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ height: "100%", overflow: "hidden" }}
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
          minHeight="100%"
          isRequired
        >
          <Box>
            <Heading
              fontSize={{ base: "27px", lg: "35px", "2xl": "40px " }}
              colorScheme=" hsl(213, 96%, 18%) "
            >
              Enter Booking Number
            </Heading>
            <Text m="20px auto" color="hsl(231, 11%, 63%)">
              {" "}
              Please provide your booking number
            </Text>
            <Stack spacing="20px ">
              <Box>
                <FormLabel fontSize="18">Booking Number </FormLabel>
                <Input
                  type="text"
                  required
                  size="md"
                  fontSize="18px"
                  mt="8px"
                  borderRadius="6px "
                  outline="none"
                  padding="8px 15px "
                  border="1px solid  hsl(229, 24%, 87%)"
                  width="100% "
                  textTransform="uppercase"
                  placeholder={
                    props?.bookingNumber
                      ? props?.bookingNumber
                      : "Enter Booking Number"
                  }
                  _placeholder={{
                    opacity: 0.8,
                    color: "gray.500",
                    fontFamily: "Ubuntu",
                    textTransform: "capitalize",
                  }}
                  onChange={(e) =>
                    props.setFormData({
                      ...props.formData,
                      bookingNumber: e.target.value,
                    })
                  }
                />
              </Box>
            </Stack>
          </Box>

          <Box
            w="full"
            m="40px auto"
            display="flex"
            justifyContent="space-between"
          >
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
              onClick={() => props?.setStep(1)}
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
              onClick={() => props?.setStep(3)}
            >
              Next
            </Button>
          </Box>
        </FormControl>
      </motion.div>
    </AnimatePresence>
  );
};

export default StepTwo;
