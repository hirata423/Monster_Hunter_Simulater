import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import { HeaderBar } from "../components/Parts/Header/HeaderBar";
import { SumBox } from "../components/Simulator/SumBox/Index";
import { SkillSearch } from "../components/Simulator/SkillSearch";
import { GoTopBtn } from "src/components/Parts/Buttons/GoTopBtn";
import { StatusIcon } from "src/components/Parts/StatusIcon/StatusIcon";
import { useOnAuthState } from "src/hooks/useOnAuthState";
import { TotalSkill } from "src/components/Simulator/TotalSkill";

const Simulator = () => {
  useOnAuthState();
  return (
    <>
      <HeaderBar />
      <Box
        py={{ base: "13px", md: "20px", lg: "" }}
        px={{ base: "13px", md: "20px", lg: "" }}
        color="white"
        fontSize="25px"
        fontWeight="500"
        backgroundColor="blue.900"
        w="100%"
        minH="100vh"
      >
        <Flex justify="space-between">
          <Box
            fontSize={{ base: "17px", md: "25px" }}
            fontWeight="700"
            ml={{ base: "8px", md: "20px" }}
          >
            Simulator
          </Box>
          <StatusIcon />
        </Flex>

        <Box
          borderBottom="1px solid white"
          mb={{ base: "13px", md: "20px", lg: "30px" }}
          pb={{ base: "13px", md: "20px", lg: "20px" }}
        ></Box>

        <Flex justify="center">
          <Stack spacing="40px" pr={{ base: "0px", lg: "50px" }}>
            {/** position:"fixed"するなら,mt="120px" */}
            <Heading
              fontSize={{ base: "18px", md: "25px" }}
              mb={{ base: "0", md: "20px" }}
            >
              一括検索
            </Heading>

            <TotalSkill />

            <Box display={{ base: "block", lg: "none" }}>
              <Heading fontSize={{ base: "18px", md: "25px" }} mb="30px">
                装着済リスト
              </Heading>
              <SumBox />
            </Box>

            <Box display={{ base: "block", md: "none" }}>
              <Heading fontSize={{ base: "18px", md: "25px" }} mb="30px">
                スキル詳細検索
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
              <Heading fontSize="25px">スキル詳細検索</Heading>
              <SkillSearch />
            </Stack>
          </Box>
        </Flex>
        <Box pt="100px">
          <GoTopBtn />
        </Box>
      </Box>
    </>
  );
};

export default Simulator;
