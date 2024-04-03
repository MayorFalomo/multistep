import { Container, Box, Text, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import "./form.css";
export const Loading = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ height: "100%" }}
      >
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
            //   border="2px blue solid"
          >
            <Box
              display="flex"
              // alignItems="flex-end"
              alignItems="center"
              // border="2px red solid"
              width="100%"
            >
              <Text
                fontSize={{ base: "20px", md: "22px", lg: "24px", xl: "28px" }}
              >
                While Loading...
              </Text>
              {/* <Text className="lineLoad"></Text>{" "} */}
            </Box>
          </Box>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};
