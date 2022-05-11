import { Box, Heading, Image } from "@chakra-ui/react";

export const HeaderBar = () => {
  return (
    <>
      <Box
        bgColor="gray.200"
        h="12vh"
        w="100%"
        bgSize="cover"
        bgImg="url('/images/header.jpg')"
      >
        <Heading color="white" fontSize="40px" pt="30px" pl="30px">
          MH’Rize スキルシュミレーター
        </Heading>
      </Box>
    </>
  );
};

export default HeaderBar;
