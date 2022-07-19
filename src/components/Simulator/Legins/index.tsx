import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

import { useTotalData } from "src/hooks/useTotalData";
import { BuguType } from "../../../types/BuguType";
import { LeginsFix } from "./LeginsFix";
import LeginsList from "../../../../Legins.json";
import { ChevronDownIcon } from "@chakra-ui/icons";

const leginsList: BuguType[] = LeginsList;

export const Legins = (props: any) => {
  const { searchAllData } = props;
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const closeModal = () => onClose();

  const { total, setTotal } = useTotalData();

  const [defaultLegins, setDefaultLegins] = useState<string>("");
  const [able, setAble] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);
  const [display2, setDisplay2] = useState<boolean>(false);

  const changeBugu = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDefaultLegins(e.target.value);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [defaultLegins]
  );

  const filterItem = leginsList.filter((item: BuguType) => {
    const itemKey =
      item.name +
      item.subName +
      item.skill.firstSK +
      item.skill.secondSK +
      item.skill.thirdSK +
      item.skill.fourthSK;
    return itemKey.includes(defaultLegins);
  });

  const mapItem = filterItem.map((item: BuguType) => {
    return (
      <Box
        display={!defaultLegins ? "none" : "block"}
        borderBottom="1px solid white"
        key={item.id}
        fontSize="18px"
        mb="25px"
      >
        <LeginsFix
          {...item}
          setDefaultLegins={setDefaultLegins}
          setAble={setAble}
          closeModal={closeModal}
        />
      </Box>
    );
  });

  //////////////////////////////////////////////////////////////////////

  console.log(searchAllData);
  const searchItem = searchAllData.map((item: BuguType) => {
    if (item.icon === "./public/images/legins.jpg") {
      return (
        <Box borderBottom="1px solid white" p="15px" key={item.id}>
          <LeginsFix
            {...item}
            setDefaultLegins={setDefaultLegins}
            setAble={setAble}
            closeModal={closeModal}
          />
        </Box>
      );
    }
  });
  const removeUndefind = searchItem.filter((v: any) => v);
  //////////////////////////////////////////////////////////////////////

  const takeOff = () => {
    setTotal((prev) => [
      ...prev.filter((item) => item.icon !== "./public/images/legins.jpg"),
    ]);
    toast({
      title: "グリーヴを解除しました！",
      status: "warning",
      position: "top-right",
      duration: 1300,
      isClosable: true,
    });
    setAble(false);
    setDefaultLegins("");
  };

  const takeOffBugu = total.map((item: BuguType) => {
    if (item.icon === "./public/images/legins.jpg") {
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

  const dsiplayNone = () => setDisplay(!display);
  const dsiplayNone2 = () => setDisplay2(!display2);

  return (
    <>
      <Flex align="center" justify="center">
        <Box boxSize={{ base: "39px", md: "48px" }}>
          {/* eslint-disable*/}
          <Image src="/images/legins.jpg" mt="-9px" />
        </Box>

        <Box pl={{ base: "13px", md: "25px" }}>
          <Input
            top="-10px"
            placeholder="キーワードを入力"
            w={{ base: "280px", md: "300px" }}
            h={{ base: "35px", md: "40px" }}
            disabled={able}
            value={defaultLegins}
            onChange={changeBugu}
          />
        </Box>
      </Flex>
      <Box pl={{ base: "58px", md: "76px" }} mt="10px">
        <Button
          mt={3}
          ref={btnRef}
          onClick={onOpen}
          rightIcon={<ChevronDownIcon />}
          color="green.600"
          fontWeight="700"
          display={able ? "none" : "block"}
        >
          個別({defaultLegins ? mapItem.length : "0"}) 一括 (
          {searchItem ? removeUndefind.length : "0"})
        </Button>

        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent bgColor="blue.900" color="white">
            <ModalHeader>防具リスト</ModalHeader>
            <ModalCloseButton />
            <Flex justify="center" fontWeight="700" fontSize="18px">
              <Box
                onClick={dsiplayNone}
                _hover={{ cursor: "pointer", color: "green.300" }}
              >
                {display ? "個別：表示" : "個別：非表示"}
              </Box>
            </Flex>
            <ModalBody m="10px" hidden={display}>
              {mapItem}
            </ModalBody>

            <Flex justify="center" fontWeight="700" fontSize="18px">
              <Box
                onClick={dsiplayNone2}
                _hover={{ cursor: "pointer", color: "green.300" }}
              >
                {display2 ? "一括：表示" : "一括：非表示"}
              </Box>
            </Flex>
            <ModalBody m="10px" hidden={display2}>
              {searchItem}
            </ModalBody>
          </ModalContent>
        </Modal>

        <Box fontSize={{ base: "13px", lg: "15px" }}>{takeOffBugu}</Box>
      </Box>
    </>
  );
};
