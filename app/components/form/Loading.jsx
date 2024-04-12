import { Container, Box, Text, Flex, Stack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Spinner } from "@chakra-ui/react";
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
            width="100%"
          >
            <Stack direction="row" spacing={4}>
              <Text>While Loading </Text>

              <Spinner
                thickness="3px"
                speed="0.65s"
                emptyColor="gray.200"
                color="gray.500"
                size="md"
              />
            </Stack>
          </Box>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};
