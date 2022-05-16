import { Box, Flex, Heading, Image, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

import { useLeginsDate } from "../../hooks/useLeginsDate";
import { BuguType } from "../../types/BuguType";
import { LeginsFix } from "./LeginsFix";

export const Legins = () => {
  const [defaultHelm, setDefaultHelm] = useState("");
  const { leginsList } = useLeginsDate();

  const changeHelm = (e: any) => setDefaultHelm(e.target.value);

  const filterItem = leginsList.filter((item: BuguType) => {
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
        <LeginsFix {...item} />
      </Box>
    );
  });

  return (
    <Flex>
      <Flex>
        <Image src="/images/legins.jpg" mt="-9px" />
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

export default Legins;
