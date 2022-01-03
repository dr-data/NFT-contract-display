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

import Footer from "../components/Footer";

import HeadingSection from '../components/HeadingSection';

export default function Home() {
    return (
    <Box bg='#FFFBF6'>
        <HeadingSection />
        <Box m={[2, 55]} alignItems="center">
          <Data contract_address="0x3698A20e61da8F09a8991ACDC66Fa967056B6154"/> 
        </Box>

        <Footer />
    </Box>
    );
  }

