import { Box, Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import Arm from "../../src/components/Arm/Arm";
import Buki from "../../src/components/Buki/Bukis";
import Helm from "../../src/components/Helm/Helm";
import Koil from "../../src/components/Koil/Koil";
import Legins from "../../src/components/Legins/Legins";
import Meil from "../../src/components/Meil/Meil";
import Table from "../../src/components/Buki/BukiTable";
import HelmTable from "../../src/components/Helm/HelmTable";
import ArmmTable from "../../src/components/Arm/ArmTable";

import skillLevelSumPage, {
  SkillLevelSumPage,
} from "../../src/components/SkillLevelSum";

export const TopPage = () => {
  return (
    <>
      <Box textAlign="left" fontSize="25px" m="40px" mt="80px">
        <Stack spacing="58px">
          <Flex>
            <HStack spacing="80px">
              <Box>
                <Buki />
              </Box>
              <Box>
                <Table />
              </Box>
            </HStack>
          </Flex>
          <Heading fontSize="25px">防具名</Heading>
          <Flex>
            <HStack spacing="80px">
              <Box>
                <Helm />
              </Box>
              <Box>
                <HelmTable />
              </Box>
            </HStack>
          </Flex>
          <Flex>
            <HStack spacing="80px">
              <Box>
                <Arm />
              </Box>
              <Box>
                <ArmmTable />
              </Box>
            </HStack>
          </Flex>
          <Box>
            <SkillLevelSumPage />
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
        </Stack>
      </Box>
    </>
  );
};

export default TopPage;
