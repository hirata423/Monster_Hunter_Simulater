import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "src/firebase";

import { HeaderBar } from "../components/Parts/Header/HeaderBar";
import { PostBtn } from "../components/Post/PostBtn";
import { GoTopBtn } from "src/components/Parts/Buttons/GoTopBtn";
import { Loading } from "src/components/Parts/Spinner/Loading";
import { StatusIcon } from "src/components/Parts/StatusIcon/StatusIcon";

export const Post = () => {
  const router = useRouter();
  const isReady = useRouter();
  useEffect(() => {
    if (isReady) {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          console.log("未サインイン");
          router.push("/Login");
        } else {
          console.log("サインイン済");
        }
      });
    } else {
      <Loading />;
    }
  });
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

        <PostBtn />
        <Box pt="20px">
          <GoTopBtn />
        </Box>
      </Box>
    </>
  );
};

export default Post;
