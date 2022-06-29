import { Flex } from "@chakra-ui/react";

export const HeaderBar = () => {
  return (
    <Flex
      bgSize="cover"
      bgPosition="center"
      bgImage="url('/images/header.jpg')"
      h={{ base: "10vh", md: "12vh", lg: "15vh" }}
      w="100%"
      // position="fixed"
      // zIndex="99"
    >
      <Flex
        align="center"
        color="white"
        fontWeight="300"
        fontSize={{ base: "20px", md: "33", lg: "40px" }}
        pl={{ base: "13px", md: "24px", lg: "30px" }}
      >
        MH’Rize ツールアプリ（仮称）
      </Flex>
    </Flex>
  );
};
