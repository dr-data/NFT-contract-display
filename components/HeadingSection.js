
import React from 'react';

import { Image, Heading, Flex, Box, Divider } from "@chakra-ui/react";

import { Center, Square, Circle } from '@chakra-ui/react'

import Nav from "../components/Nav";

import NavBar from "../components/NavBar";

//import image from folder


export default function HeadingSection() {
    return (
        <div>
            <NavBar />
            <Center color='white'>
                <Image src="/static/LesterChong.png" alt='' />
            </Center>

            <Flex flexDirection="column" alignItems="center" margin="2rem">
            <Heading as="h1" size="2xl" marginY="2rem">
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