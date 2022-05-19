import { Box, Flex, Image, Input } from "@chakra-ui/react";
import { useState } from "react";

import { BuguType } from "../../types/BuguType";
import { HelmFix } from "./HelmFix";
import HelmList from "../../../Helm.json";

export const Helm = () => {
  const [defaultBugu, setDefaultBugu] = useState("");
  const helmList: BuguType[] = HelmList;

  const changeBugu = (e: any) => setDefaultBugu(e.target.value);

  const filterItem = helmList.filter((item: BuguType) => {
    const itemKey =
      item.name +
      item.subName +
      item.skill.firstSK +
      item.skill.secondSK +
      item.skill.thirdSK +
      item.skill.fourthSK +
      item.skillLevel.firstSK +
      item.skillLevel.secondSK +
      item.skillLevel.thirdSK +
      item.skillLevel.fourthSK +
      item.slot.firstSL +
      item.slot.secondSL +
      item.slot.thirdSL;
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
        <HelmFix {...item} />
      </Box>
    );
  });

  return (
    <>
      <Flex>
        {/* eslint-disable*/}
        <Image src="/images/helm.jpg" mt="-11px" />

        <Input
          placeholder="キーワードを入力"
          w="350px"
          h="40px"
          top="-5px"
          ml="-100px"
          value={defaultBugu}
          onChange={changeBugu}
        />
      </Flex>
      <Box ml="120px" mt="-90px">
        <Box display={defaultBugu ? "none" : "block"} fontSize="15px">
          武具名：
        </Box>
        {mapItem}
      </Box>
    </>
  );
};
