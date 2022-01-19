
import React from 'react';

import { Image, Heading, Flex, Box, Divider } from "@chakra-ui/react";

import Nav from "../components/Nav";

import NavBar from "../components/NavBar";

//import image from folder


export default function HeadingSection() {
    console.log("./image/LC.jpg")
    return (
        <div>
            <NavBar />
            
            <Box boxSize='sm'>
              <Image src='https://raw.githubusercontent.com/dr-data/NFT-contract-display/main/image/LesterChong.png?token=GHSAT0AAAAAABOH5ZPKZLJGLRTD7GNHYS7AYPQ6IMA' alt='' />
            </Box>
            <Flex flexDirection="column" alignItems="center" margin="2rem">
            <Heading as="h1" size="2xl" marginY="-1rem">
                Welcome to the NFT Collection of Lester Chong
            </Heading>
            <Box width="xl">
                <Divider sx={{ borderColor: '#DE00FF', borderBottomWidth: 8 }}/>
            </Box>

            <Nav />
            </Flex>
        </div>

    )
}