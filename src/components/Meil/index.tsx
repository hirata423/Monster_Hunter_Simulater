import { Box, Flex, Heading, Image, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

import { useMeilDate } from "../../hooks/useMeilDate";
import { BuguType } from "../../types/BuguType";
import { MeilFix } from "./MeilFix";

export const Meil = () => {
  const [defaultHelm, setDefaultHelm] = useState("");
  const { meilList } = useMeilDate();

  const changeHelm = (e: any) => setDefaultHelm(e.target.value);

  const filterItem = meilList.filter((item: BuguType) => {
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
      >
        <MeilFix {...item} />
      </Box>
    );
  });

  return (
    <Flex>
      <Flex>
        <Image src="/images/meil.jpg" mt="-9px" />
      </Flex>
      <Box>
        <Box>
          <Input
            placeholder="キーワードを入力"
            w="350px"
            h="40px"
            top="-5px"
            ml="-100px"
            value={defaultHelm}
            onChange={changeHelm}
          />
        </Box>
        {mapItem}
        <Stack spacing="15px" m="15px">
          <Box
            display={defaultHelm ? "none" : "block"}
            ml="-100px"
            fontSize="18px"
          >
            武具名：
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};
