import { Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useArmDate } from "../../hooks/useArmDate";
import { useTotalDate } from "../../hooks/useTotalDate";
import { BuguType } from "../../types/BuguType";

export const ArmmTable = () => {
  const { armList } = useArmDate();
  const { total, setTotal } = useTotalDate();

  const filterDate = armList.filter((item: BuguType) => {
    return item.flag === true;
  });

  const sum = filterDate.reduce((acc: number, val: BuguType): number => {
    return acc + val.blockPoint;
  }, 0);

  const testClick = () => {
    setTotal([...total, ...filterDate]);
  };

  useEffect(() => {
    console.log("ArmTotal", total);
  }, [total]);

  const skillmap = filterDate.map((item: BuguType) => {
    return (
      <Box key={item.id}>
        <Box>
          {item.skill.firstSK}
          {item.skillLevel.firstSK}
        </Box>
        <Box>
          {item.skill.secondSK}
          {item.skillLevel.secondSK}
        </Box>
        <Box>
          {item.skill.thirdSK}
          {item.skillLevel.thirdSK}
        </Box>
      </Box>
    );
  });

  return (
    <>
      <Box>
        {"防御力"}：{sum}
      </Box>
      <Box>{skillmap}</Box>
      <Button onClick={testClick} size="sm">
        テスト
      </Button>
    </>
  );
};

export default ArmmTable;
