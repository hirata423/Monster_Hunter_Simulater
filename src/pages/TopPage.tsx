import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import { Helm } from "../components/Helm";
import { Arm } from "../components/Arm";
import { Meil } from "../components/Meil";
import { Koil } from "../components/Koil";
import { Legins } from "../components/Legins";
import { SkillLevelSumPage } from "../components/SkillLevelSum";
import { HeaderBar } from "../components/HeaderBar";
import { SkillBox } from "../components/Skill";

const TopPage = () => {
  return (
    <>
      <HeaderBar />
      <Box
        p="25px"
        color="white"
        fontSize="25px"
        fontWeight="500"
        backgroundColor="blue.900"
        w={{ base: "71vh", md: "109.5vh", lg: "195vh" }}
      >
        <Flex>
          <Stack spacing="58px" pr={{ base: "0px", lg: "25px" }}>
            {/** position:"fixed"するなら,mt="120px" */}
            <Heading fontSize="25px">防具パーツ</Heading>

            <Box>
              <Helm />
            </Box>

            <Box>
              <Arm />
            </Box>

            <Box>
              <Meil />
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
              <SkillLevelSumPage />
            </Box>

            <Box display={{ base: "block", md: "none" }}>
              <Heading fontSize="25px" mb="30px">
                スキル検索
              </Heading>
              <SkillBox />
            </Box>
          </Stack>

          {/** position:"fixed"するなら,mt="120px" */}
          {/* //横に並ばせる */}
          <Box display={{ base: "none", lg: "block" }} pr="50px">
            <Stack spacing="53px">
              <Heading fontSize="25px">装着済リスト</Heading>
              <SkillLevelSumPage />
            </Stack>
          </Box>

          <Box
            display={{ base: "none", md: "block" }}
            ml={{ base: "0", md: "-20px" }}
          >
            <Stack spacing="53px" ml="10px">
              <Heading fontSize="25px">スキル検索</Heading>
              <SkillBox />
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default TopPage;
