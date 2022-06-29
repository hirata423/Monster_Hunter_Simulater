import { Box, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { SkillType } from "src/types/SkillTypes";

export const SkillTab = (props: SkillType) => {
  const { id, name, slotLv, effect, levell, explanation } = props;

  return (
    <Box
      key={id}
      fontSize={{ base: "13px", md: "15px" }}
      p="18px"
      w={{ base: "325px", md: "300px" }}
      h="auto"
      mb="20px"
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
        <Box borderBottom={explanation.one ? "solid 1px gray" : "none"}>
          {explanation.one}
        </Box>
        <Box>{levell.two}</Box>
        <Box borderBottom={explanation.two ? "solid 1px gray" : "none"}>
          {explanation.two}
        </Box>
        <Box>{levell.three}</Box>
        <Box borderBottom={explanation.three ? "solid 1px gray" : "none"}>
          {explanation.three}
        </Box>
        <Box>{levell.four}</Box>
        <Box borderBottom={explanation.four ? "solid 1px gray" : "none"}>
          {explanation.four}
        </Box>
        <Box>{levell.five}</Box>
        <Box borderBottom={explanation.five ? "solid 1px gray" : "none"}>
          {explanation.five}
        </Box>
        <Box>{levell.six}</Box>
        <Box borderBottom={explanation.six ? "solid 1px gray" : "none"}>
          {explanation.six}
        </Box>
        <Box>{levell.seven}</Box>
        <Box borderBottom={explanation.seven ? "solid 1px gray" : "none"}>
          {explanation.seven}
        </Box>
      </Stack>
    </Box>
  );
};
