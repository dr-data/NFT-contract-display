import Faq from "react-faq-component";

import { Heading, Link, Flex, Box, Button, Divider } from "@chakra-ui/react";

const data = {
  title: "",
  rows: [
    {
      title: "《傳送槍》的NFT 在哪一個blockchain鑄造？",
      content: "在Polygon Network上，並可以在opensea搜尋到!"
    },
    {
      title: "《傳送槍》的NFT是甚麼？",
      content:
        "《傳送槍》的NFT是與動畫導演Nic合作製作的動畫MV分別以全首及不同部份的剪輯製作而成，莊正希望可以將這個動畫與大家分享，一起擁有!"
    },
    {
      title: "如何購買莊正的NFT？",
      content:
        "是次NFT的首輪發售經已完結，後續請留意Discord及Instagram的最新資訊！你亦可於Discord發表意見！會有各種活動及不同售賣方式繼續供大家購買！"
    },
    {
      title: "是次NFT有多少種類？",
      content:
        "共6種，包括：《傳送槍》全MV、MV Animatic、MV 黑白x彩色gif、MV 彩色gif、MV定格、單曲MP3。"
    },
    {
      title: "如有問題可以如何查詢？",
      content: "可以於Discord查詢，或電郵至flowingmoment.c@gmail.com。"
    }
  ]
};

export default function home() {
  return (
    <div>
      <Box bg="#1A1C2A" m={{ base: 30, md: 40, lg: 40 }}>
        <Box>
          <Divider sx={{ borderColor: "#DE00FF", borderBottomWidth: 3 }} />
        </Box>

        <Heading as="h2" marginY="1.2rem" textAlign="center" color="#DE00FF">
          常見問題
        </Heading>

        <Faq
          data={data}
          styles={{
            bgColor: "#1A1C2A",
            titleTextColor: "#DE00FF",
            rowTitleColor: "#6A6A6A",
            rowContentColor: "white",
            rowContentPaddingTop: "20px",
            rowContentPaddingBottom: "10px",
            arrowColor: "white"
          }}
          config={{
            arrowIcon: "+"
          }}
        />
      </Box>
    </div>
  );
}
