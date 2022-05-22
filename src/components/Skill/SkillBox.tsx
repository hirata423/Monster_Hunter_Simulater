import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";
// import SkillName from "../../../SkillName.json";
import { SkillType } from "../../types/SkillTypes";
import { SkillTab } from "./SkillTab";

export const SkillBox = () => {
  // const [defaultValue, setDefalutValue] = useState("");
  // const skillName: SkillType[] = SkillName;
  // const searchSkill = (e: any) => setDefalutValue(e.target.value);
  // const filterItme = skillName.filter((item: SkillType) => {
  //   const kewWord =
  //     item.name + item.subName + item.slotLv + item.effect + item.explanation;
  //   return kewWord.includes(defaultValue);
  // });
  // const mapItem = filterItme.map((item: SkillType) => {
  //   return (
  //     <Box key={item.id} display={!defaultValue ? "none" : "block"}>
  //       <SkillTab {...item} />
  //     </Box>
  //   );
  // });
  // return (
  //   <Box>
  //     <Input
  //       placeholder="キーワードを入力"
  //       value={defaultValue}
  //       onChange={searchSkill}
  //       w="280px"
  //       h="40px"
  //       mb="20px"
  //     />
  //     <Box>{mapItem}</Box>
  //   </Box>
  // );
};
