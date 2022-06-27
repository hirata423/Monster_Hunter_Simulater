import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import { BuguType } from "../../types/BuguType";
import { HelmFix } from "./HelmFix";
import HelmList from "../../../Helm.json";
import { useTotalData } from "src/hooks/useTotalData";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const Helm = () => {
  const [defaultHelm, setDefaultHelm] = useState<string>("");
  const [able, setAble] = useState<boolean>(false);
  const { total, setTotal } = useTotalData();
  //firestoreから取得したデータを配列にすレバOK
  const helmList: BuguType[] = HelmList;
  const changeBugu = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDefaultHelm(e.target.value);
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
          <Image src="/images/helm.jpg" />
        </Box>

        <Box pl={{ base: "13px", md: "25px" }}>
          <Input
            placeholder="キーワードを入力"
            w={{ base: "280px", md: "300px" }}
            h={{ base: "35px", md: "40px" }}
            disabled={able}
            value={defaultHelm}
            onChange={changeBugu}
          />
        </Box>
      </Flex>
      <Box pl={{ base: "58px", md: "76px" }} mt="10px">
        <Box
          display={defaultHelm ? "none" : "block"}
          fontSize={{ base: "11px", md: "14px" }}
        >
          防具名：
        </Box>

        {/* <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color="green.500"
            w="110px"
          >
            防具 × {mapItem.length}
          </MenuButton>
          <MenuList bgColor="blue.900">{mapItem}</MenuList>
        </Menu> */}

        {mapItem}

        <Box fontSize={{ base: "13px", lg: "15px" }}>{takeOffBugu}</Box>
      </Box>
    </>
  );
};
