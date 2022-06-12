import { Box, Button, Flex, HStack, Stack, useToast } from "@chakra-ui/react";

import { useTotalData } from "../../hooks/useTotalData";

export const ArmFix = (props: any) => {
  const {
    id,
    name,
    subName,
    blockPoint,
    skill,
    skillLevel,
    slot,
    flag,
    icon,
    setAble,
    setDefaultArm,
  } = props;
  const { setTotal } = useTotalData();
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
    setAble(true);
    setDefaultArm("アームは追加済です");
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
            backgroundColor="blue.300"
            _hover={{
              backgroundColor: "blue.100",
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
