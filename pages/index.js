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
  Button,
  Divider,
  Stack
} from "@chakra-ui/react";

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

      <Box bg="" m={20} alignItems="center">
        <Stack direction="row" spacing={4}>
          <Button
            leftIcon={<MdBuild />}
            colorScheme="pink"
            variant="solid"
            size="lg"
          >
            Settings
          </Button>
          <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
            Call us
          </Button>
        </Stack>
      </Box>

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
