import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import GoSimulator from "src/components/Parts/Buttons/GoSimulatorBt";
import { PostBt } from "../components/Post/PostBt";
import { HeaderBar } from "../components/Parts/Header/HeaderBar";
import Logout from "src/components/Parts/Buttons/LogoutBt";
import { useRouter } from "next/router";
import { auth } from "src/firebase";

export const Tweet = () => {
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
    }
  });

  return (
    <>
      <HeaderBar />
      <Box
        w="100%"
        h="auto"
        py={{ base: "13px", md: "20px", lg: "" }}
        backgroundColor="blue.900"
        color="white"
      >
        <Box fontSize={{ base: "17px", md: "25px" }} fontWeight="700" pl="20px">
          Post
        </Box>

        <PostBt />
        <GoSimulator />
        <Box pt="20px">
          <Logout />
        </Box>

        {/* <Input type="file" /> */}
      </Box>
    </>
  );
};

export default Tweet;
