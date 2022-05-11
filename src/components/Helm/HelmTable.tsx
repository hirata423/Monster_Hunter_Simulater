import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useHelmDate } from "../../hooks/useHelmsDate";
import { useTotalDate } from "../../hooks/useTotalDate";
import { BuguType } from "../../types/BuguType";

export const HelmTable = () => {
  const { helmList } = useHelmDate();
  const { total, setTotal } = useTotalDate();
  const [color, setColor] = useState("blue.200");

  const filterDate = helmList.filter((item: BuguType) => {
    return item.flag === true;
  });

  const addClick = () => {
    if (color === "blue.200") {
      setColor("orange.200");
      setTotal([...total, ...filterDate]);
    }
    if (color === "orange.200") {
      setColor("blue.200");
      setTotal([]);
    }
  };

  useEffect(() => {
    // console.log("HelmTotal", total);
  }, [total]);

  const skillmap = filterDate.map((item: BuguType) => {
    return (
      <Box fontSize="15px" key={item.id}>
        <Box>
          {"防御力　"}：{item.blockPoint}
        </Box>
        <Flex>
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
        <Flex>
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
          backgroundColor={color}
        >
          {color === "blue.200" ? "一覧追加" : "一覧解除"}
        </Button>
      </Flex>
      <Box>{skillmap}</Box>
    </>
  );
};

export default HelmTable;
