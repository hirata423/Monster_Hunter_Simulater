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
        <Box
          borderBottom="solid 1px White"
          color="yellow.400"
          textAlign="center"
          fontWeight="900"
          pb="8px"
        >
          {name}
          {slotLv}
        </Box>
        <Box textAlign="center" fontWeight="900">
          効果
        </Box>
        <Wrap borderBottom="solid 1px White">
          <WrapItem>{effect}</WrapItem>
        </Wrap>
        <Box textAlign="center" fontWeight="900">
          詳細
        </Box>
        <Box>{levell.one}</Box>
        <Box borderBottom="solid 1px White">{explanation.one}</Box>
        <Box>{levell.two}</Box>
        <Box borderBottom="solid 1px White">{explanation.two}</Box>
        <Box>{levell.three}</Box>
        <Box borderBottom="solid 1px White">{explanation.three}</Box>
        <Box>{levell.four}</Box>
        <Box borderBottom="solid 1px White">{explanation.four}</Box>
        <Box>{levell.five}</Box>
        <Box borderBottom="solid 1px White">{explanation.five}</Box>
        <Box>{levell.six}</Box>
        <Box borderBottom="solid 1px White">{explanation.six}</Box>
        <Box>{levell.seven}</Box>
        <Box>{explanation.seven}</Box>
      </Stack>
    </Box>
  );
};
