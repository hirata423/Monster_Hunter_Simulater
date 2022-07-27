import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTotalData } from "../../../hooks/useTotalData";
import { BuguType } from "../../../types/BuguType";

type SkillLevelType = {
  id: number;
  name: string;
  skill?: string;
  skillLevel: number;
  slot?: string;
  count: number;
};

export const SumBox = () => {
  const { total } = useTotalData();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      return (
        <Box key={index}>
          <Flex>
            <HStack spacing="15px">
              <Box>{item.slot}</Box>
              <Box display={item.slot === undefined ? "none" : "block"}>
                {`×${item.count}`}
              </Box>
            </HStack>
          </Flex>
        </Box>
      );
    }
  );

  //防御力の足し算
  // const sumBlockPoint = total.reduce((acc: number, val: BuguType): number => {
  //   return acc + val.blockPoint;
  // }, 0);

  return (
    <>
      <Flex
        justify="space-between"
        w="360px"
        fontSize={{ base: "13px", lg: "15px" }}
      >
        <Stack>
          <Box pr="5px">
            <Box fontWeight="700">発動スキル</Box>
            <Box pl="7px" pt="9px">
              {skillMapItem}
            </Box>
          </Box>
        </Stack>

        <Stack>
          <Box pr={{ base: "33px", lg: "15px" }}>
            <Box fontWeight="700">スキルレベル</Box>
            <Box pl="43px" pt="9px">
              {skillLevelMapItem}
            </Box>
          </Box>
        </Stack>

        <Stack>
          <Box>
            <Box fontWeight="700">スロット数</Box>
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
    </>
  );
};
