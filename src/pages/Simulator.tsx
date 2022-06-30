import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "src/firebase";

import { HeaderBar } from "../components/Parts/Header/HeaderBar";
import { Helm } from "../components/Simulator/Helm";
import { Arm } from "../components/Simulator/Arm";
import { Meil } from "../components/Simulator/Meil";
import { Koil } from "../components/Simulator/Koil";
import { Legins } from "../components/Simulator/Legins";
import { SumBox } from "../components/Simulator/SumBox/Index";
import { SkillSearch } from "../components/Simulator/SkillSearch";
import { TotalSkill } from "src/components/Simulator/TotalSkill";

import { LogoutBtn } from "src/components/Parts/Buttons/LogoutBtn";
import { GoPostBtn } from "../components/Parts/Buttons/GoPostBtn";
import { Loading } from "src/components/Parts/Spinner/Loading";
import { User } from "src/types/StoreUserTypes";

const Simulator = () => {
  const [user, setUser] = useState<Partial<User>>();
  //Vercelでデプロイ時にエラー
  //Error: No router instance found. you should only use "next/router"
  //inside the client side of your app. https://nextjs.org/docs/messages/no-router-instance
  //isReadeyを使うと解消
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
      {/*開発中機能 */}
      {/* <TotalSkill /> */}

      <Box
        py={{ base: "13px", md: "20px", lg: "" }}
        px={{ base: "13px", md: "20px", lg: "" }}
        color="white"
        fontSize="25px"
        fontWeight="500"
        backgroundColor="blue.900"
        w="100%"
        h="auto"
      >
        <Box fontSize={{ base: "17px", md: "25px" }} fontWeight="700" pb="20px">
          Simulator
        </Box>
        <Box
          borderBottom="1px solid white"
          mb={{ base: "13px", md: "20px", lg: "" }}
        ></Box>

        <Flex justify="center">
          <Stack spacing="58px" pr={{ base: "0px", lg: "40px" }}>
            {/** position:"fixed"するなら,mt="120px" */}
            <Heading fontSize={{ base: "18px", md: "25px" }}>
              防具パーツ
            </Heading>

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
              <Heading fontSize={{ base: "18px", md: "25px" }} mb="30px">
                装着済リスト
              </Heading>
              <SumBox />
            </Box>

            <Box display={{ base: "block", md: "none" }}>
              <Heading fontSize={{ base: "18px", md: "25px" }} mb="30px">
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
            ml={{ base: "0", md: "15px" }}
          >
            <Stack spacing="62px">
              <Heading fontSize="25px">スキル検索</Heading>
              <SkillSearch />
            </Stack>
          </Box>
        </Flex>
        <Box pt="100px">
          <GoPostBtn />
          <Box pt="20px"></Box>
          <LogoutBtn />
        </Box>
      </Box>
    </>
  );
};

export default Simulator;
