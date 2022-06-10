import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTotalDate } from "../hooks/useTotalDate";
import { BuguType } from "../types/BuguType";

type SkillLevelType = {
  id: number;
  name: string;
  skill?: string;
  skillLevel: number;
  slot?: string;
  count: number;
};

export const SumBox = () => {
  const { total } = useTotalDate();
  const [idNum, setIdNum] = useState<number[]>([]);
  const [newName, setName] = useState<string[]>([]);
  const [skill, setSkill] = useState<(string | undefined)[]>([]);
  const [skillLevel, setSkillLevel] = useState<any[]>([]); //型変えるとエラーでる
  const [slot, setSlot] = useState<(string | undefined)[]>([]);

  const totalId = total.map((item: BuguType) => {
    return item.id;
  });

  const totalNameMap = total.map((item: BuguType) => {
    return item.name;
  });

  const totalSkillMap = total.map((item: BuguType) => {
    return item.skill.firstSK;
  });
  const totalSkill2Map = total.map((item: BuguType) => {
    return item.skill.secondSK;
  });
  const totalSkill3Map = total.map((item: BuguType) => {
    return item.skill.thirdSK;
  });
  const totalSkill4Map = total.map((item: BuguType) => {
    return item.skill.fourthSK;
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
  const totalSKLevel4Map = total.map((item: BuguType) => {
    return item.skillLevel.fourthSK;
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

  // const RegisterButtonA = () => {
  useEffect(() => {
    setIdNum([...totalId]);
    setName([...totalNameMap]);
    setSkill([
      ...totalSkillMap,
      ...totalSkill2Map,
      ...totalSkill3Map,
      ...totalSkill4Map,
    ]);
    setSkillLevel([
      ...totalSKLevelMap,
      ...totalSKLevel2Map,
      ...totalSKLevel3Map,
      ...totalSKLevel4Map,
    ]);
    setSlot([...totalSlotevelMap, ...totalSlotevel2Map, ...totalSlotevel3Map]);
    console.log("effect");
  }, [total]);

  const reSkill = skill.filter((v) => v);
  const reSkillLevel = skillLevel.filter((v) => v);
  const test: number = 0;

  const skillList: SkillLevelType[] = [];
  for (let i = 0; i < reSkill.length; i++) {
    skillList.push({
      id: idNum[i],
      name: newName[i],
      skill: reSkill[i],
      skillLevel: reSkillLevel[i],
      slot: slot[i],
      count: test,
    });
  }
  // console.log("skillList:スキルを細分化した新配列", skillList);

  //skillとskillLevell
  const reduceList = skillList.reduce(
    (a: SkillLevelType[], v: SkillLevelType) => {
      const element = a.find((p: SkillLevelType) => p.skill === v.skill);
      if (element) {
        element.skillLevel += v.skillLevel;
      } else {
        a.push({
          id: v.id,
          name: v.name,
          skill: v.skill,
          skillLevel: v.skillLevel,
          slot: v.slot,
          count: 1,
        });
      }
      return a;
    },
    []
  );
  // console.log("reduceList:スキル名重複削除、レベルの足し算", reduceList);

  //slot
  const reduceList2 = skillList.reduce(
    (a: SkillLevelType[], v: SkillLevelType) => {
      const element2 = a.find((p: SkillLevelType) => p.slot === v.slot);
      if (element2) {
        element2.count++;
      } else {
        a.push({
          id: v.id,
          name: v.name,
          skill: v.skill,
          skillLevel: v.skillLevel,
          slot: v.slot,
          count: 1,
        });
      }
      return a;
    },
    []
  );
  // console.log("reduceList2:スロットの数計算", reduceList2);

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

  const slotCountMapItem = reduceList2.map(
    (item: SkillLevelType, index: number) => {
      if (index < 3) {
        return (
          <Box key={index}>
            <Flex>
              <HStack spacing="15px">
                <Box>{item.slot}</Box>
                <Box>×{item.count}</Box>
              </HStack>
            </Flex>
          </Box>
        );
      }
    }
  );

  //防御力の足し算
  // const sumBlockPoint = total.reduce((acc: number, val: BuguType): number => {
  //   return acc + val.blockPoint;
  // }, 0);

  return (
    <>
      <Stack spacing="30px" alignItems="center" pt="7px" w="450px">
        <Flex fontSize={{ base: "13px", lg: "15px" }}>
          <Stack>
            <Box pr="87px">
              <Box>発動スキル</Box>
              <Box pl="7px" pt="9px">
                {skillMapItem}
              </Box>
            </Box>
          </Stack>

          <Stack>
            <Box pr="90px">
              <Box>スキルレベル</Box>
              <Box pl="43px" pt="9px">
                {skillLevelMapItem}
              </Box>
            </Box>
          </Stack>

          <Stack>
            <Box>
              <Box>スロット数</Box>
              <Box pl="13px" pt="9px">
                {slotCountMapItem}
              </Box>
            </Box>
          </Stack>

          {/* <Flex>
            <Stack>
              <Box>防御力合計</Box>
              <Box mt="" pl="27px">{sumBlockPoint}</Box>
            </Stack>
          </Flex> */}
        </Flex>
      </Stack>
    </>
  );
};
