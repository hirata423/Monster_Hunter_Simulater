import { Box, Button, Flex, HStack, Stack } from "@chakra-ui/react";

import { Bukis } from "../../types/BukiTypes";
import { useBukisDate } from "../../hooks/useBukisDate";

export const BukiFix = (props: Bukis) => {
  const { id, name, subName, power, type, critical, checked } = props;
  const { setBukiList } = useBukisDate();

  const clickChecked = (prevList: any[]) => {
    const targetItem = {
      id,
      name,
      subName,
      power,
      type,
      critical,
      checked: !checked,
    };

    const foo = prevList.map((item) => {
      if (item.id === id) {
        return targetItem;
      }
      return item;
    });
    return foo;
  };

  const click = () => {
    setBukiList((prevList) => [...clickChecked(prevList)]);
  };

  return (
    <Stack spacing="15px" m="15px" key={id}>
      <Flex>
        <Box>武器名：{name}</Box>
        <Button
          ml="100px"
          onClick={click}
          backgroundColor={!checked ? "blue.200" : "orange.200"}
          _hover={{ backgroundColor: !checked ? "blue.100" : "orange.100" }}
        >
          {!checked ? "固定" : "解除"}
        </Button>
      </Flex>

      <Box>攻撃力：{power}</Box>
      <Flex>
        <HStack spacing="30px">
          <Box>属性値：{type}</Box>
          <Box>会心率：{critical}</Box>
        </HStack>
      </Flex>
    </Stack>
  );
};
