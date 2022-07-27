import { Box, Button, Flex, HStack, Stack, useToast } from "@chakra-ui/react";
import { useTotalData } from "../../../hooks/useTotalData";

export const HelmFix = (props: any) => {
  const {
    setDefaultHelm,
    setAble,
    closeModal,
    id,
    name,
    subName,
    blockPoint,
    skill,
    skillLevel,
    slot,
    flag,
    icon,
  } = props;
  // const { id, name, subName, blockPoint, skill, skillLevel, slot, flag, icon } =
  //   item;

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
      title: "ヘルムを装着しました！",
      status: "info",
      position: "top-right",
      duration: 1300,
      isClosable: true,
    });
    setDefaultHelm("ヘルムは追加済です");
    setAble(true);
    closeModal();
  };

  return (
    <Stack
      spacing="15px"
      fontSize={{ base: "11px", md: "13px", lg: "15px" }}
      key={id}
    >
      <Flex justify="space-between">
        <Box>防具名　：{name}</Box>
        <Box ml="100px">
          <Button
            onClick={submitBugu}
            size=""
            px="11px"
            py="8px"
            fontSize={{ base: "11px", md: "14px" }}
            right={{ base: "10px", md: "20px" }}
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
          <Box ml={{ base: "55px", md: "65px", lg: "74px" }}>
            {skill.thirdSK}
          </Box>
          <Box> {skillLevel.thirdSK}</Box>
        </HStack>
      </Flex>
    </Stack>
  );
};
