import { Box, Button, Flex, HStack, Stack, useToast } from "@chakra-ui/react";

import { useTotalDate } from "../../hooks/useTotalDate";
import { BuguType } from "../../types/BuguType";

export const LeginsFix = (props: BuguType) => {
  const { id, name, subName, blockPoint, skill, skillLevel, slot, flag, icon } =
    props;
  const { setTotal } = useTotalDate();
  const toast = useToast();

  const targetItem = {
    id,
    name,
    subName,
    blockPoint,
    skill,
    skillLevel,
    slot,
    flag,
    icon,
  };

  const submitBugu = () => {
    setTotal((prevList) => [...prevList, targetItem]);
    toast({
      title: "アームを装着しました！",
      status: "info",
      position: "top-right",
      duration: 1300,
      isClosable: true,
    });
  };

  return (
    <Stack spacing="15px" fontSize="15px" key={id}>
      <Flex>
        <Box>防具名　：{name}</Box>
        <Box ml="100px">
          <Button
            onClick={submitBugu}
            size="sm"
            color="black"
            backgroundColor="blue.200"
            _hover={{
              backgroundColor: "blue.200",
            }}
          >
            装着
          </Button>
        </Box>
      </Flex>

      <Box>防御力　：{blockPoint}</Box>
      <HStack spacing="30px">
        <Box>スロット：{slot.firstSL}</Box>
        <Box>{slot.secondSL}</Box>
      </HStack>
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
          <Box ml="74px"> {skill.thirdSK}</Box>
          <Box> {skillLevel.thirdSK}</Box>
        </HStack>
      </Flex>
    </Stack>
  );
};
