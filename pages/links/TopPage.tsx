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
import { Move } from "../../src/components/move";

export const TopPage = () => {
  return (
    <>
      <HeaderBar />

      <Box
        textAlign="left"
        fontSize="25px"
        backgroundColor="blue.900"
        color="white"
        w={{ base: "200%", md: "100%" }}
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
            <Heading fontSize="25px">防具パーツ</Heading>

            <Flex>
              <Box>
                <Helm />
              </Box>
            </Flex>

            <Flex>
              <Box>
                <Arm />
              </Box>
            </Flex>

            <Flex>
              <Box>
                <Meil />
              </Box>
            </Flex>

            <Flex>
              <Box>
                <Koil />
              </Box>
            </Flex>

            <Flex>
              <Box>
                <Legins />
              </Box>
            </Flex>

            <Flex display={{ base: "block", lg: "none" }}>
              <Box mt="-100px">
                <SkillLevelSumPage />
              </Box>
            </Flex>
          </Stack>

          <Flex display={{ base: "none", lg: "block" }} mr="30px">
            <SkillLevelSumPage />
          </Flex>
        </Flex>

        {/* <Box pl="780px">
          <Move />
        </Box> */}
      </Box>
    </>
  );
};
