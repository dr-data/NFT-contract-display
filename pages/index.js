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

import React, { useState, useEffect } from 'react';
import NextLink from "next/link";
import Router from "next/router";
import { Heading, Link, Flex, Box, Button, Divider } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

import { SimpleGrid } from '@chakra-ui/react';

import Data from "./api/Data";
import Random from "./api/Random";
import token_holder from "./api/Token_holder";

import Nav from "../components/Nav";

import NavBar from "../components/NavBar";


export default function Home() {
    return (
    <Box>
        <NavBar />
        <Flex flexDirection="column" alignItems="center" margin="2rem">
          <Heading as="h1" size="2xl" marginY="1rem">
            NFT Collection of Lester Chong
          </Heading>
        <Box width="xl">
          <Divider />
        </Box>
        <Heading as="h2" size="lg" marginY="1rem">
          from contract
        </Heading>

        <Nav />

        </Flex>
        <Box m={[2, 55]} alignItems="center">
          <Data contract_address="0x3698A20e61da8F09a8991ACDC66Fa967056B6154"/> 
        
        </Box>

        
    </Box>
    );
  }

