"use client";
import { Inter } from "next/font/google";
// import "./globals.css";
import Navbar from "./components/Navbar";
import {
  CSSReset,
  ChakraProvider,
  Container,
  extendTheme,
} from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "multistep form",
//   description: "multistep form",
// };

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // Example: Ensure the body has no margin or padding
        margin: 0,
        padding: 0,
        // border: "1px solid  red",
      },
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
