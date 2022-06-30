import { Flex } from "@chakra-ui/react";
import { HumburgerBtn } from "../Buttons/HumburgerBtn";

export const HeaderBar = () => {
  return (
    <Flex
      bgSize="cover"
      bgPosition="center"
      bgImage="url('/images/header.jpg')"
      h={{ base: "8vh", md: "10vh", lg: "13vh" }}
      w="100%"
      justify="space-between"
      // position="fixed"
      // zIndex="99"
    >
      <Flex
        align="center"
        color="white"
        fontWeight={{ base: "500", md: "300" }}
        fontSize={{ base: "13px", md: "33", lg: "40px" }}
        pl={{ base: "13px", md: "24px", lg: "30px" }}
      >
        MH’Rize ツールアプリ（仮称）
      </Flex>

      <Flex align="center" color="white" mr={{ base: "10px", md: "20px" }}>
        <HumburgerBtn />
      </Flex>
    </Flex>
  );
};
