import { Box } from "@chakra-ui/react";
import React from "react";
import GoTop from "src/components/GoTop";
import { PostBt } from "../components/Tweet/PoatBt";
import { HeaderBar } from "../components/HeaderBar";

export const Tweet = () => {
  return (
    <>
      <HeaderBar />
      <Box
        w="100%"
        h="auto"
        pt={{ base: "30px", md: "50px" }}
        backgroundColor="blue.900"
        color="white"
      >
        <PostBt />
        <GoTop />

        {/* <Input type="file" /> */}
      </Box>
    </>
  );
};

export default Tweet;
