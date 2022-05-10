import { Box, Button, Flex, HStack, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTotalDate } from "../hooks/useTotalDate";
import { BuguType } from "../types/BuguType";

type SkillLevelType = {
  // id: number;
  skill: string;
  skillLevel: number;
  slot: string;
};

export const SkillLevelSumPage = () => {
  const { total } = useTotalDate();
  const [skill, setSkill] = useState<any[]>([]);
  const [skillLevel, setSkillLevel] = useState<any[]>([]);
  const [slot, seSlot] = useState<any[]>([]);
  //[]のstringにしたい↑↑ anyだと不安

  //表示するわけでは無いから、forEachにしたいけど、void型になる
  const totalMap = total.map((item: BuguType) => {
    return item.skill.firstSK;
  });
  const total2Map = total.map((item: BuguType) => {
    return item.skill.secondSK;
  });
  const total3Map = total.map((item: BuguType) => {
    return item.skill.thirdSK;
  });

  const totalSKLevelMap = total.map((item: BuguType) => {
    return item.skillLevel.firstSK;
  });
  const totalSKLevel2Map = total.map((item: BuguType) => {
    return item.skillLevel.secondSK;
  });
  const totalSKLevel3Map = total.map((item: BuguType) => {
    return item.skillLevel.thirdSK;
  });

  const totalSlotevelMap = total.map((item: BuguType) => {
    return item.slot.firstSL;
  });
  const totalSlotevel2Map = total.map((item: BuguType) => {
    return item.slot.secondSL;
  });
  const totalSlotevel3Map = total.map((item: BuguType) => {
    return item.slot.thirdSL;
  });

  const RegisterClick = () => {
    setSkill([...totalMap, ...total2Map, ...total3Map]);
    setSkillLevel([
      ...totalSKLevelMap,
      ...totalSKLevel2Map,
      ...totalSKLevel3Map,
    ]);
    seSlot([...totalSlotevelMap, ...totalSlotevel2Map, ...totalSlotevel3Map]);
  };

  const reSkill = skill.filter((v) => v);
  const reSkillLevel = skillLevel.filter((v) => v);
  // const reSlot = slot.filter((v) => v);

  //配列番号の自動生成にするか、undefindを含むオブジェクとの削除
  //重複分が削除されるskill名と同じidを持つ、skillLevelをreduceさせようと考えた
  //予め定義した数字配列だとreduceしたときにundefindのせいでNanを返す
  // const idNum = [
  //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  // ];

  const skillList: SkillLevelType[] = [];
  for (let i = 0; i < reSkill.length; i++) {
    skillList.push({
      skill: reSkill[i],
      skillLevel: reSkillLevel[i],
      slot: slot[i],
    });
  }
  console.log("skillList", skillList);

  const reduceList = skillList.reduce(
    (a: SkillLevelType[], v: SkillLevelType) => {
      const element = a.find((p: SkillLevelType) => p.skill === v.skill);
      if (element) {
        element.skillLevel += v.skillLevel;
      } else {
        a.push({
          skill: v.skill,
          skillLevel: v?.skillLevel,
          slot: v.slot,
        });
      }
      return a;
    },
    []
  );
  console.log("reduceList", reduceList);

  // idを持たな為、indexで代用　※配列変更、filter等使う際は注意
  const skillMapItem = reduceList.map((item: SkillLevelType, index: number) => {
    return (
      <Box key={index}>
        <Flex>
          <HStack spacing="250px">
            <Box>{item.skill}</Box>
          </HStack>
        </Flex>
      </Box>
    );
  });

  const skillLevelMapItem = reduceList.map(
    (item: SkillLevelType, index: number) => {
      return (
        <Box key={index}>
          <Flex>
            <HStack spacing="250px">
              <Box>{item.skillLevel}</Box>
            </HStack>
          </Flex>
        </Box>
      );
    }
  );

  const slotMapItem = reduceList.map((item: SkillLevelType, index: number) => {
    return (
      <Box key={index}>
        <Flex>
          <HStack spacing="250px">
            <Box>{item.slot}</Box>
          </HStack>
        </Flex>
      </Box>
    );
  });

  const sumBlockPoint = total.reduce((acc: number, val: BuguType): number => {
    return acc + val.blockPoint;
  }, 0);

  return (
    <Stack spacing="30px">
      <Button onClick={RegisterClick}>テストテスト</Button>
      <Flex>
        <HStack spacing="150px">
          <Box>発動スキル</Box>
          <Box>スキルレベル</Box>
          <Box>スロット数</Box>
          <Box>防御力合計</Box>
        </HStack>
      </Flex>
      <Flex>
        <HStack spacing="250px">
          <Box>{skillMapItem}</Box>
          <Box>{skillLevelMapItem}</Box>
          <Box>{slotMapItem}</Box>
          <Box>{sumBlockPoint}</Box>
        </HStack>
      </Flex>
    </Stack>
  );
};

export default SkillLevelSumPage;
