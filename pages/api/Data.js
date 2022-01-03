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
import { Spinner,Heading, Link, Flex, Stack, Box, Button, Divider, Center } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

import { SimpleGrid } from '@chakra-ui/react'

export default function Data(prop) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]); 

  
  const contract_address = prop.contract_address;
  
  const opensea_link = "https://opensea.io/assets/matic/"+contract_address+"/";

  const polygonscan = "https://polygonscan.com/address/"+contract_address+"/";

  const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));

  useEffect((prop) => {
    // fetch("https://api.nftport.xyz/v0/nfts/0xD4b3f1c0C67a493477F1eBc5d04c12eB4de168FE?chain=polygon&include=metadata", {
      fetch("https://api.nftport.xyz/v0/nfts/"+ contract_address +"?chain=polygon&include=metadata", {
          "method": "GET",
          "headers": {
            "Content-Type": "application/json",
            "Authorization": "ff7dd013-272d-4e38-8b27-b1ad8ad4ea47"
          }
          })
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data.nfts);
          const nfts = data.nfts;
          const sortedResponse = nfts.sort(
              (a, b) => (a.metadata.name > b.metadata.name) ? 1 : -1);
          
          console.log("SORTED:" + sortedResponse);
          setIsLoaded(true);
          setPhotos(data.nfts);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [contract_address])
if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div><Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="blue.500"
    size="xl"
  /> Loading ...</div>;
  } else {
    return (
<Box>
    <SimpleGrid minChildWidth='250px' spacing='10px' align="center">

      {photos.map((item, index) => (
              <div key={index}>
              <a href={opensea_link+item.token_id} target="_blank" rel="noreferrer">
                  <div>
                  <Image src={item.cached_file_url} 
                          width='300px' 
                          height='150px' 
                          alt={item.metadata.description}
                          quality={2}
                          />
                          
                  </div>
                  <div>
                  {item.metadata.name}
                  </div>
              </a>
              </div>
          ))}
    </SimpleGrid>
    <Center>
    Contract Address: 
    <a href={polygonscan} target="_blank" rel="noreferrer">
        {prop.contract_address}
    </a>
    </Center>      
</Box>

    );
  }
}
