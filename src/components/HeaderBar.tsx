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
      >
        <Heading
          color="white"
          fontSize={{ base: "25px", md: "40" }}
          pt={{ base: "21px", md: "21px", lg: "30px" }}
          pl="30px"
        >
          MH’Rize スキルシュミレーター
        </Heading>
      </Box>
    </>
  );
};
