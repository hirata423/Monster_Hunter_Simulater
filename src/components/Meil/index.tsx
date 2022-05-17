import { Box, Flex, Heading, Image, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

import { useMeilDate } from "../../hooks/useMeilDate";
import { BuguType } from "../../types/BuguType";
import { MeilFix } from "./MeilFix";

export const Meil = () => {
  const [defaultBugu, setDefaultBugu] = useState("");
  const { meilList } = useMeilDate();

  const changeBugu = (e: any) => setDefaultBugu(e.target.value);

  const filterItem = meilList.filter((item: BuguType) => {
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
        <MeilFix {...item} />
      </Box>
    );
  });

  return (
    <>
      <Flex>
        <Image src="/images/meil.jpg" mt="-9px" />
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
