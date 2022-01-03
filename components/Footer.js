import React from 'react';
import { Stack, Flex, Icon, Center, Link } from '@chakra-ui/react'
import { SiDiscord } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiYoutube } from "react-icons/si";

import NextLink from "next/link";


export default function Footer(prop){
    return(

       <Center>
            <Stack
                direction={{ base: "column", md: "row" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                mt={{ base: 4, md: 0 }}
            >
                        <NextLink href="#" passHref>
                            <Link>
                                <Icon as={SiDiscord} w={8} h={8} />
                            </Link> 
                        </NextLink>
                        <NextLink href="https://www.instagram.com/lester.zz/" passHref>
                            <Link>
                                <Icon as={SiInstagram} w={8} h={8} />
                            </Link> 
                        </NextLink>                        
                        <NextLink href="https://www.facebook.com/lesterchongzz" passHref>
                            <Link>
                                <Icon as={SiFacebook} w={8} h={8} />
                            </Link> 
                        </NextLink>
                        <NextLink href="https://www.youtube.com/channel/UC_kt2Ui0RQCmWZlq2OW0v6w" passHref>
                            <Link>
                                <Icon as={SiYoutube} w={8} h={8} />
                            </Link> 
                        </NextLink>

            </Stack>
       </Center>
        
    )
}