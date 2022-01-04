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

import React, { useState, useEffect } from 'react';
import NextLink from "next/link";
import Router from "next/router";
import { Heading, Link, Flex, Box, Button, Divider } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

import { SimpleGrid } from '@chakra-ui/react';

import Data from "../api/Data";

import Nav from "../../components/Nav";


export default function Contract_5() {

    return (

    <Box>

        <Flex margin="1rem" justifyContent="flex-end">
          <NextLink href="/holder_checker" passHref>
            <Link>Holder Checker</Link> 
          </NextLink>
          
          <NextLink href="/about" passHref>
            <Link>About</Link>
          </NextLink>
        </Flex>
        <Flex flexDirection="column" alignItems="center" margin="2rem">
        <Link href="#">
          <Heading as="h1" size="2xl" marginY="1rem">
            NFT Collection of Lester Chong
          </Heading>
        </Link>
        <Box width="xl">
          <Divider />
        </Box>
        <Heading as="h2" size="lg" marginY="1rem">
          from contract
        </Heading>

        <Nav />


        </Flex>
        <Box m={[2, 55]} alignItems="center">
          <Data contract_address="0x551ca3f3D964f00CF5F7C94951E5138991D75D53"/> 
        </Box>

        
    </Box>
    );
  }

