import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

import { useTotalDate } from "src/hooks/useTotalDate";
import { BuguType } from "../../types/BuguType";
import { MeilFix } from "./MeilFix";
import MeilList from "../../../Meil.json";

export const Meil = () => {
  const [defaultMeil, setDefaultMeil] = useState("");
  const [able, setAble] = useState(false);
  const { total, setTotal } = useTotalDate();
  const meilList: BuguType[] = MeilList;
  const changeBugu = (e: any) => setDefaultMeil(e.target.value);
  const toast = useToast();

  const filterItem = meilList.filter((item: BuguType) => {
    const itemKey =
      item.name +
      item.subName +
      item.skill.firstSK +
      item.skill.secondSK +
      item.skill.thirdSK;
    return itemKey.includes(defaultMeil);
  });

  const mapItem = filterItem.map((item: BuguType) => {
    return (
      <Box
        display={!defaultMeil ? "none" : "block"}
        borderBottom="1px solid white"
        key={item.id}
        fontSize="18px"
        mb="25px"
      >
        <MeilFix {...item} setDefaultMeil={setDefaultMeil} setAble={setAble} />
      </Box>
    );
  });

  const takeOff = () => {
    setTotal((prev) => [
      ...prev.filter((item) => item.icon !== "./public/images/meil.jpg"),
    ]);
    toast({
      title: "メイルを解除しました！",
      status: "warning",
      position: "top-right",
      duration: 1300,
      isClosable: true,
    });
    setAble(false);
    setDefaultMeil("");
  };

  const takeOffBugu = total.map((item: BuguType) => {
    if (item.icon === "./public/images/meil.jpg") {
      return (
        <Box key={item.id}>
          <Flex>
            <Box>{item.name}</Box>
            <Box>
              <Button
                size="sm"
                ml="15px"
                mt="-2px"
                bgColor="orange.300"
                _hover={{ bgColor: "orange.100" }}
                color="black"
                onClick={takeOff}
              >
                脱着
              </Button>
            </Box>
          </Flex>
        </Box>
      );
    }
  });

  return (
    <>
      <Flex>
        {/* eslint-disable*/}
        <Image src="/images/meil.jpg" mt="-9px" />
        <Box pl="25px">
          <Input
            placeholder="キーワードを入力"
            w="350px"
            h="40px"
            top="-5px"
            disabled={able}
            value={defaultMeil}
            onChange={changeBugu}
          />
        </Box>
      </Flex>
      <Box pl="90px" pt="-190px">
        <Box display={defaultMeil ? "none" : "block"} fontSize="15px">
          武具名：
        </Box>
        {mapItem}
        <Box>
          <Box fontSize={{ base: "13px", lg: "15px" }}>{takeOffBugu}</Box>
        </Box>
      </Box>
    </>
  );
};
