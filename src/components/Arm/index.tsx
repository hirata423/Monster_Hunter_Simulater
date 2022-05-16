import { Box, Flex, Heading, Image, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useArmDate } from "../../hooks/useArmDate";
import { BuguType } from "../../types/BuguType";
import { ArmFix } from "./ArmFix";

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
        borderBottom="1px solid white"
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
          <Image src="/images/arm.jpg" mt="-9px" />
        </Flex>
        <Box>
          <Box>
            <Input
              placeholder="キーワードを入力"
              w="350px"
              h="40px"
              top="-5px"
              ml="-100px"
              value={defaultArm}
              onChange={changeArm}
            />
          </Box>
          {mapItem}
          <Stack spacing="15px" m="15px">
            <Box
              display={defaultArm ? "none" : "block"}
              ml="-100px"
              fontSize="18px"
            >
              武具名：
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};
