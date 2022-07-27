import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { memo, useCallback, useEffect, useState } from "react";

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

export const TotalSkill = memo(function TotalSkill() {
  const [defaultValue, setDefalutValue] = useState<string>("");
  // const [too, setToo] = useState<BuguType[]>([]);

  const testChange = useCallback((e: any) => {
    setDefalutValue(e.target.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // const testClick = () => {
  //   setToo(searchAllData);
  // };

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
        {/* <Button color="white" bgColor="green" onClick={testClick}>
          test
        </Button> */}
      </Flex>
      <Heading fontSize={{ base: "18px", md: "25px" }}>個別検索</Heading>
      <Box>
        <Helm searchAllData={searchAllData} defaultValue={defaultValue} />
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
});
