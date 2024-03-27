import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Lottie from "react-lottie";
import animationData from "./animationData.json"; // Import local JSON file
const SuccessPage = () => {
  const animationContainer = useRef(null);

  const lottieRef = useRef();

  const [isStopped, setIsStopped] = useState(true);
  const [isPaused, setIsPaused] = useState(true);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    initialSegment: [3, 50],
  };

  return (
    <AnimatePresence mode="wait">
      <Container
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="10px"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              minHeight: "250px",
              minWidth: "100%",
            }}
            // minHeight="250px"
            // minW="100%"
          >
            <Lottie options={defaultOptions} maxHeight={400} maxWidth={400} />

            {/* <Image
            boxSize="150px"
            objectFit="cover"
            src="./success.svg"
            alt="img"
          /> */}
          </motion.div>
          <Heading
            fontSize={{ base: "30px", md: "35px", lg: "40px", "2xl": "50px " }}
            color="hsl(213, 96%, 18%)"
          >
            Thank you!{" "}
          </Heading>
          <Text
            fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
            color="hsl(231, 11%, 63%)"
            textAlign="center"
          >
            Your information has been submitted successfully!
          </Text>
          <Link href="/">
            {" "}
            <Text
              fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
              colorScheme="hsl(213, 96%, 18%)"
              color="blue"
            >
              Go back to home{" "}
            </Text>{" "}
          </Link>
        </Box>
      </Container>
    </AnimatePresence>
  );
};

export default SuccessPage;
