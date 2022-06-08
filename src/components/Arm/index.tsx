import { Box, Flex, Image, Input } from "@chakra-ui/react";
import { useState } from "react";

import { BuguType } from "../../types/BuguType";
import { ArmFix } from "./ArmFix";
import ArmList from "../../../Arm.json";

export const Arm = () => {
  const [defaultBugu, setDefaultBugu] = useState("");
  const armList: BuguType[] = ArmList;
  const changeBugu = (e: any) => setDefaultBugu(e.target.value);

  const filterItem = armList.filter((item: BuguType) => {
    const itemKey =
      item.name +
      item.subName +
      item.skill.firstSK +
      item.skill.secondSK +
      item.skill.thirdSK;
    return itemKey.includes(defaultBugu);
  });

  const mapItem = filterItem.map((item: BuguType) => {
    return (
      <Box
        display={!defaultBugu ? "none" : "block"}
        borderBottom="1px solid white"
        key={item.id}
        fontSize="18px"
        mb="25px"
      >
        <ArmFix {...item} />
      </Box>
    );
  });

  return (
    <>
      <Flex>
        {/* eslint-disable*/}
        <Image src="/images/arm.jpg" mt="-9px" />

        <Box pl="25px">
          <Input
            placeholder="キーワードを入力"
            w="350px"
            h="40px"
            top="-5px"
            value={defaultBugu}
            onChange={changeBugu}
          />
        </Box>
      </Flex>
      <Box pl="90px" pt="-190px">
        <Box display={defaultBugu ? "none" : "block"} fontSize="15px">
          武具名：
        </Box>
        {mapItem}
      </Box>
    </>
  );
};
