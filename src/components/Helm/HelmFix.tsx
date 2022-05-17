import { Box, Button, Flex, HStack, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useTotalDate } from "../../hooks/useTotalDate";
import { BuguType } from "../../types/BuguType";

export const HelmFix = (props: BuguType) => {
  const { id, name, subName, blockPoint, skill, skillLevel, slot, flag } =
    props;
  const { total, setTotal } = useTotalDate();
  const [buttonColor, setButtonColor] = useState("blue.200");

  const targetItem = {
    id,
    name,
    subName,
    blockPoint,
    skill,
    skillLevel,
    slot,
    flag: !flag,
  };

  // const removeBugu = (prevList: BuguType[]) => {
  //   const foo = prevList.map((item) => {
  //     if (item.id === id) {
  //       return targetItem;
  //     }
  //     return item;
  //   });
  //   return foo;
  // };

  const removeBugu = (prevList: BuguType[]) => {
    const removeItem = prevList.findIndex((item: BuguType) => {
      return item.id === id;
    });
    const spliceItem = prevList.splice(removeItem, 1);
    return spliceItem;
  };

  const settingButton = () => {
    //一度装備→リスト登録すると、skillLevelSumにある3種のstateに情報が逃げてしまうから削除されずに加算されてしまう？
    //→多分違う
    if (buttonColor === "orange.300") {
      setTotal((prevList) => [...removeBugu(prevList)]);
      setButtonColor("blue.200");
    }
    if (buttonColor === "blue.200") {
      setTotal((prevList) => [...prevList, targetItem]);
      setButtonColor("orange.300");
    }
  };

  console.log("total", total);

  return (
    <Stack spacing="15px" fontSize="15px" key={id}>
      <Flex>
        <Box>防具名　：{name}</Box>
        <Box ml="100px">
          <Button
            onClick={settingButton}
            size="sm"
            color="black"
            backgroundColor={buttonColor}
            _hover={{
              backgroundColor:
                buttonColor === "blue.200" ? "blue.100" : "orange.100",
            }}
          >
            {buttonColor === "blue.200" ? "装着" : "脱着"}
          </Button>
        </Box>
      </Flex>
      <Box>防御力　：{blockPoint}</Box>
      <Flex>
        <HStack spacing="30px">
          <Box>スロット：{slot.firstSL}</Box>
          <Box>{slot.secondSL}</Box>
        </HStack>
      </Flex>
      <Flex>
        <HStack spacing="30px">
          <Flex>
            スキル　：<Box mr="15px">{skill.firstSK}</Box>
            <Box> {skillLevel.firstSK}</Box>
          </Flex>
          <Flex>
            <Box mr="15px"> {skill.secondSK}</Box>
            <Box> {skillLevel.secondSK}</Box>
          </Flex>
        </HStack>
      </Flex>
      <Flex>
        <HStack spacing="15px">
          <Box ml="74px">{skill.thirdSK}</Box>
          <Box>{skillLevel.thirdSK}</Box>
        </HStack>
      </Flex>
    </Stack>
  );
};
