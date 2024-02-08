"use client";
import { Inter } from "next/font/google";
// import "./globals.css";
import Navbar from "./components/Navbar";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "multistep form",
  description: "multistep form",
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
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
