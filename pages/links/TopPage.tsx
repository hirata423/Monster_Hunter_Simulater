import { Box, Flex, Heading, HStack, Stack } from "@chakra-ui/react";

import Buki from "../../src/components/Buki/Bukis";
import Table from "../../src/components/Buki/BukiTable";
import Helm from "../../src/components/Helm/Helm";
import HelmTable from "../../src/components/Helm/HelmTable";
import Arm from "../../src/components/Arm/Arm";
import ArmmTable from "../../src/components/Arm/ArmTable";
import Meil from "../../src/components/Meil/Meil";
import MeilTable from "../../src/components/Meil/MeilTable";
import Koil from "../../src/components/Koil/Koil";
import KoilTable from "../../src/components/Koil/KoilTable";
import Legins from "../../src/components/Legins/Legins";
import LeginsTable from "../../src/components/Legins/LeginsTable";
import { SkillLevelSumPage } from "../../src/components/SkillLevelSum";

export const TopPage = () => {
  return (
    <>
      <Box textAlign="left" fontSize="25px" m="40px" mt="80px">
        <Stack spacing="58px">
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
          <Flex>
            <HStack spacing="80px">
              <Box>
                <Meil />
              </Box>
              <Box>
                <MeilTable />
              </Box>
            </HStack>
          </Flex>
          <Box>
            <SkillLevelSumPage />
          </Box>
          <Flex>
            <HStack spacing="80px">
              <Box>
                <Koil />
              </Box>
              <Box>
                <KoilTable />
              </Box>
            </HStack>
          </Flex>
          <Flex>
            <HStack spacing="80px">
              <Box>
                <Legins />
              </Box>
              <Box>
                <LeginsTable />
              </Box>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default TopPage;
