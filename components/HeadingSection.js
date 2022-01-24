import React from "react";

import { Image, Heading, Flex, Box, Divider } from "@chakra-ui/react";

import { Center, Square, Circle } from "@chakra-ui/react";

import Nav from "../components/Nav";

import NavBar from "../components/NavBar";

//import image from folder

export default function HeadingSection() {
  return (
    <div>
      <NavBar />
      <Center color="white">
        <Image src="/static/LesterChong.png" alt="" />
      </Center>

      <Flex flexDirection="column" alignItems="center" margin="2rem">
        <Heading
          as="h1"
          size="4xl"
          marginY="1.2rem"
          textAlign="center"
          color="#DE00FF"
        >
          進入地獄要塞 <br /> Into the “Zanctuary”
        </Heading>
        <Box width="xl">
          <Divider sx={{ borderColor: "#DE00FF", borderBottomWidth: 8 }} />
        </Box>

        <Nav />
      </Flex>
    </div>
  );
}
