import { Box, Flex, Heading } from "@chakra-ui/react";

export const HeaderBar = () => {
  return (
    <Box
      bgSize="cover"
      bgPosition="center"
      bgImage="url('/images/header.jpg')"
      w={{ base: "71vh", md: "109.5vh", lg: "100%" }}
      h={{ base: "10vh", md: "12vh" }}
      // position="fixed"
      // zIndex="99"
    >
      <Flex>
        <Heading
          color="white"
          fontSize={{ base: "25px", md: "30", lg: "40px" }}
          pt={{ base: "18px", md: "22px", lg: "20px" }}
          // pb={{ base: "18px", md: "22px", lg: "25px" }}
          pl={{ base: "15px", md: "30px" }}
        >
          MH’Rize スキルシュミレーター
        </Heading>
      </Flex>
    </Box>
  );
};
