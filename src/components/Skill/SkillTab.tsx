import { Box, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { SkillType } from "src/types/SkillTypes";

export const SkillTab = (props: SkillType) => {
  const { id, name, slotLv, effect, levell, explanation } = props;

  return (
    <Box
      key={id}
      fontSize="15px"
      pt="10px"
      pr="20px"
      pl="10px"
      w="283px"
      borderRadius="13px"
      border="1px"
    >
      <Stack>
        <Box>スキル：{name}</Box>
        <Box>スロットLv,{slotLv}</Box>
        <Box>効果</Box>
        <Wrap>
          <WrapItem>{effect}</WrapItem>
        </Wrap>
        <Box>詳細</Box>
        <Box>{levell.one}</Box>
        <Box>{explanation.one}</Box>
        <Box>{levell.two}</Box>
        <Box>{explanation.two}</Box>
        <Box>{levell.three}</Box>
        <Box>{explanation.three}</Box>
        <Box>{levell.four}</Box>
        <Box>{explanation.four}</Box>
        <Box>{levell.five}</Box>
        <Box>{explanation.five}</Box>
        <Box>{levell.six}</Box>
        <Box>{explanation.six}</Box>
        <Box>{levell.seven}</Box>
        <Box>{explanation.seven}</Box>
      </Stack>
    </Box>
  );
};
