import { Box, Heading, Image } from "@chakra-ui/react";

export const HeaderBar = () => {
  return (
    <>
      <Box
        bgColor="gray.200"
        h={{ base: "75px", md: "85px", lg: "100px" }}
        w={{ base: "200%", md: "100%" }}
        bgSize="cover"
        bgImg="url('/images/header.jpg')"
        // position="fixed"
        // zIndex="99"
      >
        <Heading
          color="white"
          fontSize={{ base: "25px", md: "30", lg: "40px" }}
          pt={{ base: "21px", md: "22px", lg: "25px" }}
          pl="30px"
        >
          MH’Rize スキルシュミレーター
        </Heading>
      </Box>
    </>
  );
};
