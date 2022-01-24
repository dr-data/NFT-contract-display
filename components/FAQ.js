import Faq from "react-faq-component";

import { Heading, Link, Flex, Box, Button, Divider } from "@chakra-ui/react";

const data = {
  title: "",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
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
