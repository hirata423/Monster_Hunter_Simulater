import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";

import { BuguType } from "src/types/BuguType";
import HelmList from "../../../../Helm.json";
import ArmList from "../../../../Arm.json";
import MeilList from "../../../../Meil.json";
import KoilList from "../../../../Koil.json";
import LeginsList from "../../../../Legins.json";
import { Helm } from "../Helm";
import { Meil } from "../Meil";
import { Arm } from "../Arm";
import { Koil } from "../Koil";
import { Legins } from "../Legins";

const helmList: BuguType[] = HelmList;
const armList: BuguType[] = ArmList;
const meilList: BuguType[] = MeilList;
const koilList: BuguType[] = KoilList;
const leginsList: BuguType[] = LeginsList;

const totalList: BuguType[] = [
  ...helmList,
  ...meilList,
  ...armList,
  ...koilList,
  ...leginsList,
];

export const TotalSkill = () => {
  const [defaultValue, setDefalutValue] = useState<string>("");

  const testChange = (e: any) => setDefalutValue(e.target.value);

  const searchAllData = totalList.filter((item: BuguType) => {
    const keyWord =
      item.name +
      item.subName +
      item.skill.firstSK +
      item.skill.secondSK +
      item.skill.thirdSK +
      item.skill.fourthSK;
    return keyWord.includes(defaultValue);
  });

  return (
    <>
      <Flex justify="center">
        <Input
          onChange={testChange}
          value={defaultValue}
          placeholder="キーワードを入力"
          w={{ base: "330px", md: "370px" }}
          h={{ base: "35px", md: "40px" }}
        />
      </Flex>
      <Heading fontSize={{ base: "18px", md: "25px" }}>個別検索</Heading>
      <Box>
        <Helm searchAllData={searchAllData} />
      </Box>

      <Box>
        <Meil searchAllData={searchAllData} />
      </Box>

      <Box>
        <Arm searchAllData={searchAllData} />
      </Box>

      <Box>
        <Koil searchAllData={searchAllData} />
      </Box>

      <Box>
        <Legins searchAllData={searchAllData} />
      </Box>
    </>
  );
};
