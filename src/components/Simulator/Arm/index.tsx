import { Box, Button, Flex, Image, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

import { useTotalData } from "src/hooks/useTotalData";
import { BuguType } from "../../../types/BuguType";
import { ArmFix } from "./ArmFix";
import ArmList from "../../../../Arm.json";

export const Arm = () => {
  const [defaultArm, setDefaultArm] = useState<string>("");
  const [able, setAble] = useState<boolean>(false);
  const { total, setTotal } = useTotalData();
  const armList: BuguType[] = ArmList;
  const changeBugu = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDefaultArm(e.target.value);
  const toast = useToast();

  const filterItem = armList.filter((item: BuguType) => {
    const itemKey =
      item.name +
      item.subName +
      item.skill.firstSK +
      item.skill.secondSK +
      item.skill.thirdSK;
    return itemKey.includes(defaultArm);
  });

  const mapItem = filterItem.map((item: BuguType) => {
    return (
      <Box
        display={!defaultArm ? "none" : "block"}
        borderBottom="1px solid white"
        key={item.id}
        fontSize="18px"
        mb="25px"
      >
        <ArmFix
          {...item}
          defaultArm={defaultArm}
          setDefaultArm={setDefaultArm}
          setAble={setAble}
        />
      </Box>
    );
  });

  const takeOff = () => {
    setTotal((prev) => [
      ...prev.filter((item) => item.icon !== "./public/images/arm.jpg"),
    ]);
    toast({
      title: "アームを解除しました！",
      status: "warning",
      position: "top-right",
      duration: 1300,
      isClosable: true,
    });
    setAble(false);
    setDefaultArm("");
  };

  const takeOffBugu = total.map((item: BuguType) => {
    if (item.icon === "./public/images/arm.jpg") {
      return (
        <Box key={item.id} pt="3px">
          <Flex justify="space-between">
            <Box>{item.name}</Box>
            <Box>
              <Button
                size=""
                px="11px"
                py="8px"
                fontSize={{ base: "11px", md: "14px" }}
                // position={{ base: "absolute", md: "static" }}
                right="5px"
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
      <Flex align="center">
        <Box boxSize={{ base: "39px", md: "48px" }}>
          {/* eslint-disable*/}
          <Image src="/images/arm.jpg" mt="-9px" />
        </Box>

        <Box pl={{ base: "13px", md: "25px" }}>
          <Input
            top="-10px"
            placeholder="キーワードを入力"
            w={{ base: "280px", md: "300px" }}
            h={{ base: "35px", md: "40px" }}
            disabled={able}
            value={defaultArm}
            onChange={changeBugu}
          />
        </Box>
      </Flex>
      <Box pl={{ base: "58px", md: "76px" }} mt="10px">
        <Box
          display={defaultArm ? "none" : "block"}
          fontSize={{ base: "11px", md: "14px" }}
        >
          防具名：
        </Box>
        {mapItem}
        <Box>
          <Box fontSize={{ base: "13px", lg: "15px" }}>{takeOffBugu}</Box>
        </Box>
      </Box>
    </>
  );
};
