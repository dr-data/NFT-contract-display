// need to add the UI
// https://chakra-ui.com/guides/getting-started/nextjs-guide
//
// Sorting the json
// According to the filename
// https://stackoverflow.com/questions/47998188/how-to-sort-an-object-alphabetically-within-an-array-in-react-js/47998260
// 
// Adding two api
// 1. fetch the metadata of the NFTs
// 2. fetch the mint to address
// https://egghead.io/lessons/react-fetch-data-from-an-api-on-the-server-side-with-getserversideprops-in-next-js
//
// putting the API KEY to the env


//https://raptis.wtf/blog/create-a-navbar-with-chakra-ui-react/

import React, { useState, useEffect } from 'react';
import { Heading, Link, Flex, Box, Button, Divider, Center } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

import { SimpleGrid } from '@chakra-ui/react'

export default function Token_holder(prop) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [addresses, setAddresses] = useState([]); 
  const [holder_no, setHolder_no] = useState(0);

  const contract_address = "0xCfa71823FEc407Ccb2EA64a8ff265B41fC2f7707";
  
  const opensea_link = "https://opensea.io/assets/matic/"+contract_address+"/";

  const polygonscan = "https://polygonscan.com/address/"+contract_address+"/";

  useEffect((prop) => {
    // fetch("https://api.nftport.xyz/v0/nfts/0xD4b3f1c0C67a493477F1eBc5d04c12eB4de168FE?chain=polygon&include=metadata", {
      fetch("https://api.covalenthq.com/v1/137/tokens/"+ contract_address +"/token_holders/\?key\=ckey_8f349c447389465d8c01232a2a9", {
          "method": "GET",
          "headers": {
            "Content-Type": "application/json",
            "Authorization": "ff7dd013-272d-4e38-8b27-b1ad8ad4ea47"
          }
          })
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data.data.items);
          console.log(data.data.items.length);

          setHolder_no(data.data.items.length);
          setIsLoaded(true);
          setAddresses(data.data.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
<Box>
    <Center>
    Contract Address: 
    <a href={polygonscan} target="_blank" rel="noreferrer">
        {prop.contract_address}
    </a>
    </Center>    
    <Center>
        Total Holders: {holder_no}
    </Center>  
    <SimpleGrid minChildWidth='250px' spacing='10px'>
    {addresses.map((item, index) => (
            <div key={index}>
                <div>
                        
                </div>
                <div>
                Holder Address: {item.address}
                <br />
                Holding Quantity: {item.balance}
                </div>
           
            </div>
        ))}
    </SimpleGrid>
  
</Box>

    );
  }
}
