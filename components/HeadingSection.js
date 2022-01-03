
import React from 'react';

import { Image, Heading, Flex, Box, Divider } from "@chakra-ui/react";

import Nav from "../components/Nav";

import NavBar from "../components/NavBar";

//import image from folder
import LCImage from "../image/LC.jpg";

export default function HeadingSection() {
    console.log(LCImage)
    return (
        <div>
            <NavBar />
            
            <Image src={LCImage} alt="" />

            <Flex flexDirection="column" alignItems="center" margin="2rem">
            <Heading as="h1" size="2xl" marginY="1rem">
                Welcome to the NFT Collection of Lester Chong
            </Heading>
            <Box width="xl">
                <Divider sx={{ borderColor: '#DE00FF', borderBottomWidth: 8 }}/>
            </Box>
            <Heading as="h2" size="lg" marginY="1rem">
                from contract
            </Heading>
            <Nav />
            </Flex>
        </div>

    )
}