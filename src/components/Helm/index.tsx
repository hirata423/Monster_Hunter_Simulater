import { Box, Flex, Heading, Image, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

import { useHelmDate } from "../../hooks/useHelmsDate";
import { BuguType } from "../../types/BuguType";
import { HelmFix } from "./HelmFix";

export const Helm = () => {
  const [defaultHelm, setDefaultHelm] = useState("");
  const { helmList } = useHelmDate();

  const changeHelm = (e: any) => setDefaultHelm(e.target.value);

  const filterItem = helmList.filter((item: BuguType) => {
    const itemKey =
      item.name +
      item.subName +
      item.skill.firstSK +
      item.skill.secondSK +
      item.skill.thirdSK;
    return itemKey.includes(defaultHelm);
  });

  const mapItem = filterItem.map((item: BuguType) => {
    return (
      <Box
        display={!defaultHelm ? "none" : "block"}
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
        <Image src="/images/helm.jpg" mt="-11px" />

        <Input
          placeholder="キーワードを入力"
          w="350px"
          h="40px"
          top="-5px"
          ml="-100px"
          value={defaultHelm}
          onChange={changeHelm}
        />
      </Flex>
      <Box ml="120px" mt="-90px">
        <Box display={defaultHelm ? "none" : "block"} fontSize="15px">
          武具名：
        </Box>
        {mapItem}
      </Box>
    </>
  );
};
