
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

import { Grid, GridItem } from '@chakra-ui/react'

import Iframe from 'react-iframe'

import Faq from 'react-faq-component';

import Nav from "../components/Nav";

import NavBar from "../components/NavBar";

import Footer from "../components/Footer";

import HeadingSection from "../components/HeadingSection";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}


export default function home() {
    return (



    <Box bg='#FFFBF6'>
        <HeadingSection />
        <div>
          <Faq data={data}
              styles={{
                titleTextColor: "green",
                rowTitleColor: "mediumseagreen"
                rowContentColor: "grey"

            }} 
            config={{
                arrowIcon: "V",
            }}
          />
        </div>

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


       


        <Footer />
    </Box>
    );
  }

