import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

import { Buki } from "../../src/components/Buki/Bukis";
import { Table } from "../../src/components/Buki/BukiTable";
import { Helm } from "../../src/components/Helm";
import { Arm } from "../../src/components/Arm";
import { Meil } from "../../src/components/Meil";
import { Koil } from "../../src/components/Koil";
import { Legins } from "../../src/components/Legins";
import { SkillLevelSumPage } from "../../src/components/SkillLevelSum";
import { HeaderBar } from "../../src/components/HeaderBar";
import { SkillBox } from "../../src/components/Skill/SkillBox";

export const TopPage = () => {
  return (
    <>
      <HeaderBar />
      <Box
        textAlign="left"
        fontSize="25px"
        backgroundColor="blue.900"
        color="white"
        w={{ base: "300%", md: "120%" }}
        h="100%"
      >
        <Flex ml={{ base: "40px", md: "20px" }}>
          <Stack spacing="58px" mr="50px" mt="80px" m="40px">
            {/* <Flex>
            <HStack spacing="80px">
              <Box>
                <Buki />
              </Box>
              <Box>
                <Table />
              </Box>
            </HStack>
          </Flex> */}
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
