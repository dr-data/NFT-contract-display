
import React, { useState, useEffect } from 'react';
import NextLink from "next/link";
import Router from "next/router";
import { Heading, Link, Flex, Box, Divider } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

import { SimpleGrid } from '@chakra-ui/react';

import { Button, ButtonGroup } from '@chakra-ui/react'

const Nav = () => (
  <div>
        {/* <SimpleGrid columns={3} spacing={10} alignItems="center">
          
        <Button colorScheme='blue'>
          <NextLink href="/contract_1" passHref>
            <Link>Portal Gun MV BTS gif</Link> 
          </NextLink>
        </Button>

          <NextLink href="/contract_2" passHref>
            <Link>Portal Gun MV gif</Link> 
          </NextLink>

          <NextLink href="/contract_3" passHref>
            <Link>Portal Gun MV Picture</Link> 
          </NextLink>

          <NextLink href="/contract_4" passHref>
            <Link>Portal Gun Full MV</Link> 
          </NextLink>

          <NextLink href="/contract_5" passHref>
            <Link>Portal Gun Animatic MV</Link> 
          </NextLink>

          <NextLink href="/embedded_1" passHref>
            <Link>Portal Gun Song</Link> 
          </NextLink>
          
        </SimpleGrid> */}
  </div>
);

export default Nav;