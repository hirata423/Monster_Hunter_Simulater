import { Box } from "@chakra-ui/react";
import React from "react";
import GoTop from "src/components/Parts/Buttons/GoTopBt";
import { PostBt } from "../components/Post/PoatBt";
import { HeaderBar } from "../components/Parts/Header/HeaderBar";
import Logout from "src/components/Parts/Buttons/LogoutBt";
import { HumburgerBt } from "src/components/Parts/Buttons/HumburgerBt";

export const Tweet = () => {
  return (
    <>
      <HeaderBar />
      <HumburgerBt />
      <Box
        w="100%"
        h="auto"
        pt={{ base: "30px", md: "50px" }}
        backgroundColor="blue.900"
        color="white"
      >
        <PostBt />
        <GoTop />
        <Box pt="20px">
          <Logout />
        </Box>

        {/* <Input type="file" /> */}
      </Box>
    </>
  );
};

export default Tweet;
