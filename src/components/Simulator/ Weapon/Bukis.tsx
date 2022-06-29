import { Box, Flex, Heading, HStack, Input, Stack } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";

import { BukiFix } from "./BukiFix";
import { Bukis } from "../../../types/BukiTypes";
import BukiList from "../../../../Buki.json";

export const Buki = () => {
  const [defaultBuki, setDefaultBuki] = useState("");
  const bukiList: Bukis[] = BukiList;

  const changeBuki = (e: { target: { value: SetStateAction<string> } }) =>
    setDefaultBuki(e.target.value);

  const filterItem = bukiList.filter((item: Bukis) => {
    const itemKey = item.name + item.subName;
    return itemKey.includes(defaultBuki);
  });

  const mapItem = filterItem.map((item: Bukis) => {
    return (
      <Box
        display={!defaultBuki ? "none" : "block"}
        key={item.id}
        fontSize="18px"
        borderBottom="1px solid black"
      >
        <BukiFix {...item} />
      </Box>
    );
  });

  return (
    <>
      <Flex>
        <Flex>
          <Heading fontSize="25px">武器名　：</Heading>
        </Flex>
        <Box>
          <Box>
            <Input
              placeholder="キーワードを入力"
              w="300px"
              h="30px"
              top="-5px"
              value={defaultBuki}
              onChange={changeBuki}
            />
          </Box>
          {mapItem}
          <Stack spacing="15px" m="15px">
            <Box display={defaultBuki ? "none" : "block"} fontSize="18px">
              武器名：
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};
