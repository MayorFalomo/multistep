import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import Lottie from "react-lottie";
import animationData from "./animationData.json"; // Import local JSON file
import { usePathname } from "next/navigation";
const SuccessPage = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    initialSegment: [3, 50],
  };

  const router = usePathname();

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
          >
            <Lottie options={defaultOptions} maxHeight={360} maxWidth={360} />

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
          {router == "/" ? (
            ""
          ) : (
            <Link href="/">
              <Text
                fontSize={{ base: "16px", lg: "18px", "2xl": "20px " }}
                colorScheme="hsl(213, 96%, 18%)"
                color="blue"
              >
                Go back to home{" "}
              </Text>{" "}
            </Link>
          )}
        </Box>
      </Container>
    </AnimatePresence>
  );
};

export default SuccessPage;
