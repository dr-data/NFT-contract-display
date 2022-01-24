import React from "react";

import { Image, Heading, Flex, Box, Divider } from "@chakra-ui/react";

import { Center, Square, Circle } from "@chakra-ui/react";

//import image from folder

export default function Intro() {
  return (
    <div>
      <Box bg="#141414">
        <Flex flexDirection="column" alignItems="center" margin="2rem">
          <Heading as="h1" size="4xl" marginY="1.2rem" textAlign="center">
            Intro
          </Heading>
          <Box width="xl"></Box>
        </Flex>
      </Box>
    </div>
  );
}
