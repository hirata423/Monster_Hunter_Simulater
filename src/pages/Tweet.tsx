import { Box, Input } from "@chakra-ui/react";
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
        w="100%"
        h="auto"
        pt={{ base: "30px", md: "50px" }}
        backgroundColor="blue.900"
        color="white"
      >
        <CreatePostBt />
        <PostList />
        <GoTop />

        {/* <Input type="file" /> */}
      </Box>
    </>
  );
};

export default Tweet;
