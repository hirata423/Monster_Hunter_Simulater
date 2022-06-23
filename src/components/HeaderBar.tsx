import { Box, extendTheme, Flex, Heading } from "@chakra-ui/react";

export const HeaderBar = () => {
  return (
    <Box
      bgSize="cover"
      bgPosition="center"
      bgImage="url('/images/header.jpg')"
      //Top,Login,Registerのヘッダー
      // w={{ base: "71vh", md: "109.5vh", lg: "100%" }}
      h={{ base: "10vh", md: "12vh", lg: "15vh" }}
      w="100%"
      // position="fixed"
      // zIndex="99"
    >
      <Flex>
        <Heading
          color="white"
          //Top,Login,Registerのヘッダー
          // fontSize={{ base: "25px", md: "30", lg: "40px" }}
          fontSize={{ base: "20px", md: "33", lg: "40px" }}
          pt={{ base: "19px", md: "20px", lg: "23px" }}
          // pb={{ base: "18px", md: "22px", lg: "25px" }}
          pl={{ base: "13px", md: "24px", lg: "30px" }}
        >
          MH’Rize ツールアプリ（仮称）
        </Heading>
      </Flex>
    </Box>
  );
};
