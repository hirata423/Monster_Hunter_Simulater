import { Box } from "@chakra-ui/react";
import React from "react";
import GoTop from "src/components/GoTop";
import { CreatePostBt } from "src/components/Tweet/CreatePostBt";
import { PostList } from "src/components/Tweet/PostList";
import { HeaderBar } from "../components/HeaderBar";

export const Tweet = () => {
  return (
    <>
      <HeaderBar />
      <Box
        w={{ base: "71vh", md: "109.5vh", lg: "100%" }}
        h="1000vh"
        // h="auto"
        pt={{ base: "30px", md: "50px" }}
        backgroundColor="blue.900"
        color="white"
      >
        <CreatePostBt />
        <PostList />
        <GoTop />
      </Box>
    </>
  );
};

export default Tweet;
