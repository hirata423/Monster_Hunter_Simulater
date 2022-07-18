import { Box, Flex } from "@chakra-ui/react";

import { HeaderBar } from "../components/Parts/Header/HeaderBar";
import { GoTopBtn } from "src/components/Parts/Buttons/GoTopBtn";
import { StatusIcon } from "src/components/Parts/StatusIcon/StatusIcon";
import { PostBtn } from "src/components/Post/PostBtn";
import { useOnAuthState } from "src/hooks/useOnAuthState";

export const Post = () => {
  useOnAuthState();
  return (
    <>
      <HeaderBar />
      <Box
        w="100%"
        minH="100vh"
        py={{ base: "13px", md: "20px", lg: "" }}
        backgroundColor="blue.900"
        color="white"
      >
        <Flex justify="space-between">
          <Box
            fontSize={{ base: "17px", md: "25px" }}
            fontWeight="700"
            ml={{ base: "20px", md: "30px" }}
          >
            Post
          </Box>
          <StatusIcon />
        </Flex>

        <Box
          borderBottom="1px solid white"
          mb={{ base: "13px", md: "20px", lg: "30px" }}
          pb={{ base: "13px", md: "20px", lg: "20px" }}
        ></Box>

        {/* <LocalPostBtn /> */}
        <PostBtn />
        <Box pt="20px">
          <GoTopBtn />
        </Box>
      </Box>
    </>
  );
};

export default Post;
