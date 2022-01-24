import React from "react";

import { Image, Heading, Flex, Box, Divider, Text } from "@chakra-ui/react";

import { Center, Square, Circle } from "@chakra-ui/react";

//import image from folder

export default function Intro() {
  return (
    <div>
      <Flex flexDirection="column" alignItems="center" margin="2rem">
        <Box bg="#1A1C2A">
          <Heading
            as="h2"
            pt={[5]}
            marginY="1.2rem"
            textAlign="center"
            color="#DE00FF"
          >
            甚麼是地獄要塞?
          </Heading>
          <Box m={{ base: 8, md: 45, lg: 30 }}>
            <Text
              color="white"
              m={{ base: 3, md: 8, lg: 20 }}
              ml={{ base: 3, md: 8, lg: 40 }}
              mr={{ base: 3, md: 8, lg: 40 }}
              pb={10}
              fontSize={{ base: "18px", md: "18px", lg: "22px" }}
            >
              在地獄也要好好生活。
              <br />
              <br />
              不論珍貴的回憶、荒謬的事情，抑或重要的事物，莊正希望用音樂紀錄並轉化成新的意義。
              <br />
              <br />
              因此我們希望藉著NFT，讓大家能夠更大限度地參與莊正的旅程。衷心希望這些作品也能夠延伸成為大家生命裡的有趣體驗。
              <br />
              <br />
              是次推出的NFT藉由莊正最新單曲《傳送槍》與導演何歷(Nic Ho)
              合作的動畫MV製作而成。內容包括：Full MV、Full MV animatic、BTS mix
              MV GIF、MV GIF、MV Snapshot以及《傳送槍》和《想一起》兩首單曲。
              <br />
              <br />
              此外，我們於Discord建構了一個社群。
              <br />
              <br />
              成員將會根據擁有的NFT獲得稱號，而且在不同程度上獲得參與所有音樂及影像的創作過程的權利，包括投票權，共同建構屬於大家的地獄要塞。當然，日後推出的紀念品或活動也會在Discord上優先公佈和預售！
              <br />
              <br />
              有你有我，一起笑著對抗荒謬。
            </Text>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
