import NextLink from "next/link";
import { Heading, Link, Flex, Text, Stack, Box } from "@chakra-ui/react";

import Token_holder from "../api/Token_holder";

const HolderCheckerPage = () => {
  return (
    <Box>
      <Flex margin="1rem" justifyContent="flex-end">
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
      </Flex>
      <Flex flexDirection="column" alignItems="center" margin="2rem">
        <Heading as="h1" size="xl" marginY="2rem">
          Token Holder Checker
        </Heading>
        <Text fontSize="24px" textAlign="center">
          This the NFT {" "}
            Collection of {" "}
          <Link href="#">
            Lester Chong
          </Link>{" "}
        </Text>
      </Flex>
      <Token_holder contract_address="0xCfa71823FEc407Ccb2EA64a8ff265B41fC2f7707"/> 
    </Box>
  );
};

export default HolderCheckerPage;
