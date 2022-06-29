import { Box } from "@chakra-ui/react";
import { HeaderBar } from "src/components/Parts/Header/HeaderBar";

export const Account = () => {
  return (
    <>
      <HeaderBar />
      <Box
        py={{ base: "13px", md: "20px", lg: "" }}
        px={{ base: "13px", md: "20px", lg: "" }}
        color="white"
        fontSize="25px"
        fontWeight="500"
        backgroundColor="blue.900"
        w="100%"
        h="100vh"
      >
        <Box fontSize={{ base: "17px", md: "25px" }} fontWeight="700" pb="20px">
          Account
        </Box>
        <Box
          borderBottom="1px solid white"
          mb={{ base: "13px", md: "20px", lg: "" }}
        ></Box>
      </Box>
    </>
  );
};

export default Account;
