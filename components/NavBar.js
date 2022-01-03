import { Flex, Spacer } from '@chakra-ui/react'

import { Heading, Link, Box, Button, Divider } from "@chakra-ui/react";

import NextLink from "next/link";

const NavBar = () => (
    <div className="NavBar" color="#F94F01">
      <Flex margin="1rem" justifyContent="flex-end" Color='tomato'>
        <NextLink href="/holder_checker" passHref>
          <Link>Holder Checker</Link> 
        </NextLink>
          
        <NextLink href="/about" passHref>
          <Link>About</Link>
          </NextLink>
        </Flex>
    </div>
  );

export default NavBar;
