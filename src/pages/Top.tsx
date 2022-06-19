import { Box, Flex, Heading, Spinner, Stack, useToast } from "@chakra-ui/react";

import { Helm } from "../components/Helm";
import { Arm } from "../components/Arm";
import { Meil } from "../components/Meil";
import { Koil } from "../components/Koil";
import { Legins } from "../components/Legins";
import { SumBox } from "../components/SumBox";
import { HeaderBar } from "../components/HeaderBar";
import { SkillSearch } from "../components/SkillSearch";
import { TotalSkill } from "src/components/TotalSkill";
import { Logout } from "src/components/Logout";
import { auth } from "src/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";

const TopPage = () => {
  //Vercelでデプロイ時にエラー
  //Error: No router instance found. you should only use "next/router"
  //inside the client side of your app. https://nextjs.org/docs/messages/no-router-instance
  //isReadeyを使う？？

  const router = useRouter();
  const isReady = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (isReady) {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          console.log("未サインイン");
          router.push("/");
        } else {
          console.log("サインイン済");
        }
      });
    } else {
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />;
    }
  });

  return (
    <>
      <HeaderBar />
      {/*開発中機能 */}
      <TotalSkill />

      <Box
        p="25px"
        color="white"
        fontSize="25px"
        fontWeight="500"
        backgroundColor="blue.900"
        w={{ base: "71vh", md: "109.5vh", lg: "100%" }}
      >
        <Flex>
          <Stack spacing="58px" pr={{ base: "0px", lg: "25px" }}>
            {/** position:"fixed"するなら,mt="120px" */}
            <Heading fontSize="25px">防具パーツ</Heading>

            <Box>
              <Helm />
            </Box>

            <Box>
              <Meil />
            </Box>

            <Box>
              <Arm />
            </Box>

            <Box>
              <Koil />
            </Box>

            <Box>
              <Legins />
            </Box>

            {/* //縦に並ばせる */}
            <Box display={{ base: "block", lg: "none" }}>
              <Heading fontSize="25px" mb="30px">
                装着済リスト
              </Heading>
              <SumBox />
            </Box>

            <Box display={{ base: "block", md: "none" }}>
              <Heading fontSize="25px" mb="30px">
                スキル検索
              </Heading>
              <SkillSearch />
            </Box>
          </Stack>

          {/** position:"fixed"するなら,mt="120px" */}
          {/* //横に並ばせる */}
          <Box display={{ base: "none", lg: "block" }} pr="50px">
            <Stack spacing="53px">
              <Heading fontSize="25px">装着済リスト</Heading>
              <SumBox />
            </Stack>
          </Box>

          <Box
            display={{ base: "none", md: "block" }}
            ml={{ base: "0", md: "-20px" }}
          >
            <Stack spacing="53px" ml="15px">
              <Heading fontSize="25px">スキル検索</Heading>
              <SkillSearch />
            </Stack>
          </Box>
        </Flex>
        <Logout />
      </Box>
    </>
  );
};

export default TopPage;
