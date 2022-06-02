import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { SkillType } from "src/types/SkillTypes";
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

export const SkillLevelSumPage = (props: BuguType) => {
  const { id } = props;
  const { total, setTotal } = useTotalDate();
  const [idNum, setIdNum] = useState<number[]>([]);
  const [name, setName] = useState<string[]>([]);
  const [skill, setSkill] = useState<(string | undefined)[]>([]);
  const [skillLevel, setSkillLevel] = useState<any[]>([]); //型変えるとエラーでる
  const [slot, setSlot] = useState<(string | undefined)[]>([]);
  const toast = useToast();

  const totalId = total.map((item: BuguType) => {
    return item.id;
  });

  const totalNameMap = total.map((item: BuguType) => {
    return item.name;
  });

  const totalMap = total.map((item: BuguType) => {
    return item.skill.firstSK;
  });
  const total2Map = total.map((item: BuguType) => {
    return item.skill.secondSK;
  });
  const total3Map = total.map((item: BuguType) => {
    return item.skill.thirdSK;
  });
  const total4Map = total.map((item: BuguType) => {
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

  //クリックじゃなくす
  const RegisterButton = () => {
    setIdNum([...totalId]);
    setName([...totalNameMap]);
    setSkill([...totalMap, ...total2Map, ...total3Map, ...total4Map]);
    setSkillLevel([
      ...totalSKLevelMap,
      ...totalSKLevel2Map,
      ...totalSKLevel3Map,
      ...totalSKLevel4Map,
    ]);
    setSlot([...totalSlotevelMap, ...totalSlotevel2Map, ...totalSlotevel3Map]);

    // toast({
    //   title: "装着済防具を登録しました！",
    //   status: "success",
    //   position: "top-right",
    //   duration: 2000,
    //   isClosable: true,
    // });

    // //total配列が空の時は警告toast出したい
    // if (total === []) {
    //   toast({
    //     title: "防具が追加されてません！",
    //     status: "warning",
    //     position: "top-right",
    //     duration: 2000,
    //     isClosable: true,
    //   });
    // }
  };

  const reSkill = skill.filter((v) => v);
  const reSkillLevel = skillLevel.filter((v) => v);
  const test: number = 0;
  //  const idIndex:number=1

  const skillList: SkillLevelType[] = [];
  for (let i = 0; i < reSkill.length; i++) {
    skillList.push({
      id: idNum[i],
      name: name[i],
      skill: reSkill[i],
      skillLevel: reSkillLevel[i],
      slot: slot[i],
      count: test,
      // id:idIndex[i]
    });
  }
  console.log("skillList:スキルを細分化した新配列", skillList);

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
  console.log("reduceList:スキル名重複削除、レベルの足し算", reduceList);

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
  console.log("reduceList2:スロットの数計算", reduceList2);

  // idを持たない為、indexで代用　※配列変更、filter等使う際は注意
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

  //防御力の足し算計算
  // const sumBlockPoint = total.reduce((acc: number, val: BuguType): number => {
  //   return acc + val.blockPoint;
  // }, 0);

  //idで削除対象を見つけるロジックを書く
  const deleteSomeName = () => {
    setTotal((prev) => [...prev.filter((item) => item.id === id)]);
    console.log("削除コンソール");
  };

  const nametest = total.map((item: BuguType) => {
    return (
      <Box key={item.id}>
        <Flex>
          <Box>{item.name}</Box>
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<DeleteIcon />}
            onClick={deleteSomeName}
          />
        </Flex>
      </Box>
    );
  });

  return (
    <>
      <Stack spacing="30px" alignItems="center">
        <Button
          onClick={RegisterButton}
          bgColor="blue.200"
          _hover={{ backgroundColor: "blue.100" }}
          color="black"
          w="450px"
        >
          防具リストに登録
        </Button>
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
      <Flex>
        <Box fontSize={{ base: "13px", lg: "15px" }}>{nametest}</Box>
      </Flex>
    </>
  );
};
