import NextLink from "next/link";
import { Heading, Link, Flex, Text, Stack, Box } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <Box>
      <Flex margin="1rem" justifyContent="flex-end">
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
      </Flex>
      <Flex flexDirection="column" alignItems="center" margin="2rem">
        <Heading as="h1" size="xl" marginY="2rem">
          About
        </Heading>
        <Text fontSize="24px" textAlign="center">
          This the NFT {" "}
            Collection of {" "}
          <Link href="#">
            Lester Chong
          </Link>{" "}
        </Text>
      </Flex>
    </Box>
  );
};

export default AboutPage;
