import React, { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]); 

  const contract_address = "0xCfa71823FEc407Ccb2EA64a8ff265B41fC2f7707";
  
  const opensea_link = "https://opensea.io/assets/matic/"+contract_address+"/";
  
  useEffect(() => {
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
          setIsLoaded(true);
          setPhotos(data.nfts);
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
      <div>
        {photos.map((item, index) => (
          <div key={index}>
            <a href={opensea_link+item.token_id} target="_blank" rel="noreferrer">
              <div>
                <Image src={item.cached_file_url} width='350px' height='180px' />
              </div>
              <div>
                {item.metadata.name}
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}