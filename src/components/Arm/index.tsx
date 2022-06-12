import { Box, Button, Flex, Image, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";

import { useTotalData } from "src/hooks/useTotalData";
import { BuguType } from "../../types/BuguType";
import { ArmFix } from "./ArmFix";
import ArmList from "../../../Arm.json";

export const Arm = () => {
  const [defaultArm, setDefaultArm] = useState("");
  const [able, setAble] = useState(false);
  const { total, setTotal } = useTotalData();
  const armList: BuguType[] = ArmList;
  const changeBugu = (e: any) => setDefaultArm(e.target.value);
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
        <Image src="/images/arm.jpg" mt="-9px" />

        <Box pl="25px">
          <Input
            placeholder="キーワードを入力"
            w="350px"
            h="40px"
            top="-5px"
            disabled={able}
            value={defaultArm}
            onChange={changeBugu}
          />
        </Box>
      </Flex>
      <Box pl="90px" pt="-190px">
        <Box display={defaultArm ? "none" : "block"} fontSize="15px">
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
