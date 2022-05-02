import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { useTotalDate } from "../hooks/useTotalDate";
import { BuguType } from "../types/BuguType";

export const TestPage = () => {
  const { total, setTotal } = useTotalDate();

  const sum = total.reduce((acc: number, val: BuguType): number => {
    return acc + val.blockPoint;
  }, 0);

  const sum2 = total.reduce((acc: number, val: BuguType): number => {
    // return acc + val.skillLevel.firstSK;
    // if("firstSK" in val.skillLevel){
    if (val.skillLevel.hasOwnProperty("firstSK")) {
      return acc + val?.skillLevel?.;
    }
  }, 0);

  const map = total.map((item: BuguType) => {
    return (
      <Box key={item.id}>
        <Flex>
          <Box>{item.skill.firstSK}：</Box>
          <Box>{item.skillLevel.firstSK}</Box>
        </Flex>
        <Flex>
          <Box>{item.skill.secondSK}：</Box>
          <Box>{item.skillLevel.secondSK}</Box>
        </Flex>
        <Flex>
          <Box>{item.skill.thirdSK}：</Box>
          <Box>{item.skillLevel.thirdSK}</Box>
        </Flex>
      </Box>
    );
  });

  //   console.log("testtotal", total);

  return (
    <Stack spacing="30px">
      <Flex>
        <Box>防御力合計：</Box>
        <Box>{sum}</Box>
      </Flex>
      <Flex>
        <Box>スキル値合計：</Box>
        <Box>{map}</Box>
      </Flex>
    </Stack>
  );
};

export default TestPage;
