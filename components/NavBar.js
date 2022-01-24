import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Link,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import NextLink from "next/link";

import { Image } from "@chakra-ui/react";

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const NavBar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="#DE00FF"
      color="white"
      {...props}
    >
      {/*<Box bg="#DE00FF" w={{ base: "15%", md: "10%", lg: "8%" }}>
        <Image src="/static/Lester_chong_name.png" alt="" />
      </Box>
  */}
      <Box bg="#DE00FF" w={{ base: "40%", md: "30%", lg: "20%" }} ml={2}>
        <Image src="/static/Chong_zing_name.png" alt="" />
      </Box>

      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          {/* Lester Chong's NFT */}
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      ></Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Stack spacing={4} direction="row" align="center">
          {/*            <Button
              variant="outline"
              _hover={{ bg: "teal.700", borderColor: "teal.700" }}
            >
            <NextLink href="/holder_checker" passHref>
              <Link>Holder Checker</Link> 
            </NextLink>
            </Button> */}

          <Button
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            <a href="https://chongzing.com/collections/all" target="_blank">
              Shop
            </a>
            {/*
            <NextLink href="/about" passHref>
              <Link>About</Link>
            </NextLink>
            */}
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default NavBar;
