import { Box, Button, Flex, Image, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";

import { BuguType } from "../../types/BuguType";
import { HelmFix } from "./HelmFix";
import HelmList from "../../../Helm.json";
import { useTotalData } from "src/hooks/useTotalData";

export const Helm = () => {
  const [defaultHelm, setDefaultHelm] = useState("");
  const [able, setAble] = useState(false);
  const { total, setTotal } = useTotalData();
  const helmList: BuguType[] = HelmList;
  const changeBugu = (e: any) => setDefaultHelm(e.target.value);
  const toast = useToast();

  const filterItem = helmList.filter((item: BuguType) => {
    const itemKey =
      item.name +
      item.subName +
      item.skill.firstSK +
      item.skill.secondSK +
      item.skill.thirdSK +
      item.skill.fourthSK;
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
        <HelmFix {...item} setDefaultHelm={setDefaultHelm} setAble={setAble} />
      </Box>
    );
  });

  const takeOff = () => {
    setTotal((prev) => [
      ...prev.filter((item) => item.icon !== "./public/images/helm.jpg"),
    ]);
    toast({
      title: "ヘルムを解除しました！",
      status: "warning",
      position: "top-right",
      duration: 1300,
      isClosable: true,
    });
    setAble(false);
    setDefaultHelm("");
  };

  const takeOffBugu = total.map((item: BuguType) => {
    if (item.icon === "./public/images/helm.jpg") {
      return (
        <Box key={item.id} pt="10px">
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
        <Image src="/images/helm.jpg" mt="-11px" />

        <Box pl="25px">
          <Input
            placeholder="キーワードを入力"
            w="350px"
            h="40px"
            top="-5px"
            disabled={able}
            value={defaultHelm}
            onChange={changeBugu}
          />
        </Box>
      </Flex>
      <Box pl="90px" pt="-190px">
        <Box display={defaultHelm ? "none" : "block"} fontSize="15px">
          武具名：
        </Box>
        {mapItem}
        <Box fontSize={{ base: "13px", lg: "15px" }}>{takeOffBugu}</Box>
      </Box>
    </>
  );
};
