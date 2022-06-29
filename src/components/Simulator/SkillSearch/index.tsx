import { Box, Flex, HStack, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import SkillName from "../../../../SkillName.json";
import { SkillType } from "../../../types/SkillTypes";
import { SkillTab } from "./SkillTab";

export const SkillSearch = () => {
  const [defaultValue, setDefalutValue] = useState("");
  const skillName: SkillType[] = SkillName;
  const searchSkill = (e: any) => setDefalutValue(e.target.value);

  const filterItme = skillName.filter((item: SkillType) => {
    const kewWord =
      item.name + item.subName + item.slotLv + item.effect + item.explanation;
    return kewWord.includes(defaultValue);
  });

  const mapItem = filterItme.map((item: SkillType) => {
    return (
      <Box key={item.id} display={!defaultValue ? "none" : "block"}>
        <SkillTab {...item} />
      </Box>
    );
  });

  return (
    <Flex align="center" pl="10px">
      <Stack>
        <Input
          placeholder="キーワードを入力"
          value={defaultValue}
          onChange={searchSkill}
          w={{ base: "325px", md: "300px" }}
          h={{ base: "35px", md: "40px" }}
          mb="20px"
        />
        <Box>{mapItem}</Box>
      </Stack>
    </Flex>
  );
};
