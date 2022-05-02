import { Box, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useArmDate } from "../../hooks/useArmDate";
import { BuguType } from "../../types/BuguType";
import ArmFix from "./ArmFix";

export const Arm = () => {
  const [defaultArm, setDefaultArm] = useState("");
  const { armList } = useArmDate();

  const changeArm = (e: any) => setDefaultArm(e.target.value);

  const filterItem = armList.filter((item: BuguType) => {
    const itemKey =
      item.name +
      item.subName +
      item.skill.firstSK +
      item.skill.secondSK +
      item.skill.thirdSK;
    return itemKey.includes(defaultArm);
  });

  const mapItem = filterItem.map((item: BuguType) => {
    return (
      <Box
        display={!defaultArm ? "none" : "block"}
        borderBottom="1px solid black"
        key={item.id}
        fontSize="18px"
      >
        <ArmFix {...item} />
      </Box>
    );
  });

  return (
    <>
      <Flex>
        <Flex>
          <Heading fontSize="25px">アーム　：</Heading>
        </Flex>
        <Box>
          <Box>
            <Input
              placeholder="キーワードを入力"
              w="300px"
              h="30px"
              top="-5px"
              value={defaultArm}
              onChange={changeArm}
            />
          </Box>
          {mapItem}
          <Stack spacing="15px" m="15px">
            <Box display={defaultArm ? "none" : "block"} fontSize="18px">
              武具名：
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Arm;
