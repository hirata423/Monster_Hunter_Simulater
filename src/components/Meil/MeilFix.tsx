import { Box, Button, Flex, HStack, Stack } from "@chakra-ui/react";

import { useMeilDate } from "../../hooks/useMeilDate";
import { BuguType } from "../../types/BuguType";

export const MeilFix = (props: BuguType) => {
  const { id, name, subName, blockPoint, skill, skillLevel, slot, flag } =
    props;
  const { setMeilList } = useMeilDate();

  const clickChecked = (prevList: BuguType[]) => {
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

    const foo = prevList.map((item) => {
      if (item.id === id) {
        return targetItem;
      }
      return item;
    });
    return foo;
  };

  const click = () => {
    setMeilList((prevList) => [...clickChecked(prevList)]);
  };

  return (
    <Stack spacing="15px" m="15px" fontSize="15px" key={id}>
      <Flex>
        <Box>武具名　：{name}</Box>
        <Box ml="100px">
          <Button
            onClick={click}
            size="sm"
            backgroundColor={!flag ? "blue.200" : "orange.200"}
            _hover={{ backgroundColor: !flag ? "blue.100" : "orange.100" }}
          >
            {!flag ? "決定" : "解除"}
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
          <Box ml="89px">{skill.thirdSK}</Box>
          <Box>{skillLevel.thirdSK}</Box>
        </HStack>
      </Flex>
    </Stack>
  );
};

export default MeilFix;
