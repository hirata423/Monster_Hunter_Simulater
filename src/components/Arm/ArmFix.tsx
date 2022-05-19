import { Box, Button, Flex, HStack, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";

import { useTotalDate } from "../../hooks/useTotalDate";
import { BuguType } from "../../types/BuguType";

export const ArmFix = (props: BuguType) => {
  const { id, name, subName, blockPoint, skill, skillLevel, slot, flag } =
    props;
  const { total, setTotal } = useTotalDate();
  const [buttonColor, setButtonColor] = useState("blue.200");
  const toast = useToast();

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
  const removeBugu = () => {
    setTotal((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  const click = () => {
    if (buttonColor === "blue.200") {
      setTotal((prevList) => [...prevList, targetItem]);
      setButtonColor("orange.300");
      toast({
        title: "アームを装着しました！",
        status: "info",
        position: "top-right",
        duration: 1300,
        isClosable: true,
      });
    }
    if (buttonColor === "orange.300") {
      removeBugu();
      setButtonColor("blue.200");
      toast({
        title: "アームを脱ぎました！",
        status: "warning",
        position: "top-right",
        duration: 1300,
        isClosable: true,
      });
    }
  };

  return (
    <Stack spacing="15px" fontSize="15px" key={id}>
      <Flex>
        <Box>防具名　：{name}</Box>
        <Box ml="100px">
          <Button
            onClick={click}
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
