import React from "react";
import { Stack, Flex, Icon, Center, Link, HStack } from "@chakra-ui/react";
import { SiDiscord } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiYoutube } from "react-icons/si";

import NextLink from "next/link";

export default function Footer(prop) {
  return (
    <Center>
      <HStack spacing={10}>
        <Link>
          <a
            href="https://discord.gg/wMyWTFWb"
            target="_blank"
            rel="noreferrer"
          >
            <Icon as={SiDiscord} w={8} h={8} />
          </a>
        </Link>
        <Link>
          <a
            href="https://www.instagram.com/lester.zz/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon as={SiInstagram} w={8} h={8} />
          </a>
        </Link>
        <Link>
          <a
            href="https://www.facebook.com/lesterchongzz"
            target="_blank"
            rel="noreferrer"
          >
            <Icon as={SiFacebook} w={8} h={8} />
          </a>
        </Link>
        <Link>
          <a
            href="https://www.youtube.com/channel/UC_kt2Ui0RQCmWZlq2OW0v6w"
            target="_blank"
            rel="noreferrer"
          >
            <Icon as={SiYoutube} w={8} h={8} />
          </a>
        </Link>
      </HStack>
    </Center>
  );
}
