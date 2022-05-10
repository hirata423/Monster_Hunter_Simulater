import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMeilDate } from "../../hooks/useMeilDate";
import { useTotalDate } from "../../hooks/useTotalDate";
import { BuguType } from "../../types/BuguType";

export const MeilTable = () => {
  const { meilList } = useMeilDate();
  const { total, setTotal } = useTotalDate();
  const [color, setColor] = useState(true);

  const filterDate = meilList.filter((item: BuguType) => {
    return item.flag === true;
  });

  const addClick = () => {
    setTotal([...total, ...filterDate]);
    setColor(false);
  };
  const cancellClick = () => {
    setTotal([]);
    setColor(true);
  };

  useEffect(() => {
    // console.log("HelmTotal", total);
  }, [total]);

  const skillmap = filterDate.map((item: BuguType) => {
    return (
      <Box key={item.id}>
        <Box fontSize="18px">
          {"防御力　"}：{item.blockPoint}
        </Box>
        <Flex fontSize="18px">
          {"スキル　"}：
          <Box>
            <Box>
              {item.skill.firstSK}
              {item.skillLevel.firstSK}
            </Box>
            <Box>
              {item.skill.secondSK}
              {item.skillLevel.secondSK}
            </Box>
            <Box>
              {item.skill.thirdSK}
              {item.skillLevel.thirdSK}
            </Box>
          </Box>
        </Flex>
        <Flex fontSize="18px">
          {"スロット"}：
          <Flex>
            <HStack spacing="20px">
              <Box>{item.slot.firstSL}</Box>
              <Box>{item.slot.secondSL}</Box>
              <Box>{item.slot.thirdSL}</Box>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    );
  });

  return (
    <>
      <Flex>
        <Button
          onClick={addClick}
          size="sm"
          mb="46px"
          mr="6px"
          backgroundColor="blue.200"
          _hover={{ backgroundColor: "blue.100" }}
        >
          一覧追加
        </Button>

        <Button
          onClick={cancellClick}
          size="sm"
          mb="46px"
          backgroundColor="orange.200"
          _hover={{ backgroundColor: "orange.100" }}
        >
          一覧解除
        </Button>
      </Flex>

      <Box>{skillmap}</Box>
    </>
  );
};

export default MeilTable;
