// need to add the UI
// https://chakra-ui.com/guides/getting-started/nextjs-guide
//
// Sorting the json
// According to the filename
// https://stackoverflow.com/questions/47998188/how-to-sort-an-object-alphabetically-within-an-array-in-react-js/47998260
//
// Adding two api
// 1. fetch the metadata of the NFTs
// 2. fetch the mint to address
// https://egghead.io/lessons/react-fetch-data-from-an-api-on-the-server-side-with-getserversideprops-in-next-js
//
// putting the API KEY to the env

//https://raptis.wtf/blog/create-a-navbar-with-chakra-ui-react/

//https://ithelp.ithome.com.tw/articles/10274751
//https://cronoschimp.club/
//https://www.bunnywarriors.io/home
//https://novalaunch.art/#about

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import Router from "next/router";
import {
  Heading,
  Link,
  Flex,
  Box,
  Text,
  Button,
  Divider,
  Stack,
  Icon,
  HStack,
  VStack
} from "@chakra-ui/react";

import { SiDiscord } from "react-icons/si";

import { Image } from "@chakra-ui/react";

import { SimpleGrid } from "@chakra-ui/react";

import { Grid, GridItem } from "@chakra-ui/react";

import Iframe from "react-iframe";

import Faq from "react-faq-component";

import Nav from "../components/Nav";

import FAQ from "../components/FAQ";

import NavBar from "../components/NavBar";

import { MdBuild, MdCall } from "react-icons/md";

import Footer from "../components/Footer";

import HeadingSection from "../components/HeadingSection";

import Intro from "../components/Intro";

export default function home() {
  return (
    <Box bg="#1A1C2A">
      <HeadingSection />
      <Intro />

      <VStack>
        <Box width="xl">
          <Divider sx={{ borderColor: "#DE00FF", borderBottomWidth: 3 }} />
        </Box>

        <br />
        <br />
        <Box w={{ base: "30%", md: "30%", lg: "45%" }} ml={2}>
          <Image src="/static/1.jpeg" alt="" />
        </Box>

        <br />

        <Box bg="" m={20} textAlign="center">
          <a
            href="https://discord.gg/wMyWTFWb"
            target="_blank"
            rel="noreferrer"
          >
            <Box
              as="button"
              height="80px"
              width={{ base: "350px", md: "250px", lg: "400px" }}
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="4px"
              px="8px"
              borderRadius="8px"
              fontSize={{ base: "20px", md: "30px", lg: "40px" }}
              fontWeight="semibold"
              bg="#DE00FF"
              borderColor="#DE00FF"
              color="white"
              _hover={{ bg: "#ebedf0" }}
              _active={{
                bg: "#dddfe2",
                transform: "scale(0.98)",
                borderColor: "#bec3c9"
              }}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)"
              }}
            >
              <HStack spacing="10px" align="center">
                <Icon
                  as={SiDiscord}
                  m={{ base: 6, md: 4, lg: 6 }}
                  boxSize={{ base: 8, md: 10, lg: 10 }}
                />
                <Text fontSize={{ base: "35px", md: "30px", lg: "43px" }}>
                  加入 Discord
                </Text>
              </HStack>
            </Box>
          </a>
        </Box>
      </VStack>
      <br />

      <FAQ />

      {/* <SimpleGrid minChildWidth='120px' columns={2} spacing={10}>
        <Box m={[2, 55]} alignItems="center">
        <Iframe
            src="https://cloudflare-ipfs.com/ipfs/bafybeib6q6q2a4ibiwfq657suynze7r4a3kyh6cuhvkga2sc4gjez2rz2y?contract=0x5B1c5EfcC3ce4BD862cb5c892712be146857358F&chainId=137&tokenId=0"
            width="600px"
            height="600px"
            frameBorder="0"
          />
        </Box>
        <Box m={[2, 55]} alignItems="center">
        <Iframe
            src="https://cloudflare-ipfs.com/ipfs/bafybeib6q6q2a4ibiwfq657suynze7r4a3kyh6cuhvkga2sc4gjez2rz2y?contract=0x5B1c5EfcC3ce4BD862cb5c892712be146857358F&chainId=137&tokenId=1"
            width="600px"
            height="600px"
            frameBorder="0"
          />

        </Box>
        </SimpleGrid> */}
      <Box bg="#DE00FF" p={8}>
        <Footer />
      </Box>
    </Box>
  );
}
