
import React, { useState, useEffect } from 'react';
import NextLink from "next/link";
import Router from "next/router";
import { Heading, Link, Flex, Box, Button, Divider } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

import { SimpleGrid } from '@chakra-ui/react';


const Nav = () => (
  <div>
        <SimpleGrid columns={3} spacing={10}>
          <NextLink href="/contract_1" passHref>
            <Link>Portal Gun MV BTS gif</Link> 
          </NextLink>

          <NextLink href="/contract_2" passHref>
            <Link>Portal Gun MV gif</Link> 
          </NextLink>

          <NextLink href="/contract_3" passHref>
            <Link>Portal Gun MV Picture</Link> 
          </NextLink>
        </SimpleGrid>
  </div>
);

export default Nav;