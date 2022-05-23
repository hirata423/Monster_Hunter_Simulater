import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import { Helm } from "../../components/Helm";
import { Arm } from "../../components/Arm";
import { Meil } from "../../components/Meil";
import { Koil } from "../../components/Koil";
import { Legins } from "../../components/Legins";
import { SkillLevelSumPage } from "../../components/SkillLevelSum";
import { HeaderBar } from "../../components/HeaderBar";
import { SkillBox } from "../../components/Skill";

export const TopPage = () => {
  return (
    <>
      <HeaderBar />
      <Box
        textAlign="left"
        fontSize="25px"
        fontWeight="500"
        backgroundColor="blue.900"
        color="white"
        w={{ base: "300%", md: "120%" }}
        h="100%"
      >
        <Flex ml={{ base: "40px", md: "20px" }}>
          <Stack spacing="58px" mr="50px" mt="80px" m="40px">
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

            <Box display={{ base: "block", lg: "none" }} mt="-100px">
              <SkillLevelSumPage />
            </Box>
          </Stack>

          {/** position:"fixed"するなら,mt="120px" */}
          <Box display={{ base: "none", lg: "block" }} mr="30px">
            <SkillLevelSumPage />
          </Box>

          <Box mt="122px" ml="10px">
            <Box>
              <SkillBox />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
