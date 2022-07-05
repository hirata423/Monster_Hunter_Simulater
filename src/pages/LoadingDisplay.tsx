import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { HeaderBar } from "src/components/Parts/Header/HeaderBar";
import { StatusIcon } from "src/components/Parts/StatusIcon/StatusIcon";

export const LoadigDisplay = () => {
  const router = useRouter();

  setTimeout(function () {
    router.push("Post"), [router];
  }, 2 * 1000);

  return (
    <>
      <HeaderBar />
      <Box
        w="100%"
        minH="100vh"
        py={{ base: "13px", md: "20px", lg: "" }}
        backgroundColor="blue.900"
        color="white"
      >
        <Flex justify="space-between">
          <Box
            fontSize={{ base: "17px", md: "25px" }}
            fontWeight="700"
            ml={{ base: "20px", md: "30px" }}
          >
            Post
          </Box>
          <StatusIcon />
        </Flex>

        <Box
          borderBottom="1px solid white"
          mb={{ base: "13px", md: "20px", lg: "30px" }}
          pb={{ base: "13px", md: "20px", lg: "20px" }}
        ></Box>

        <Flex justify="center" pt="200px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      </Box>
    </>
  );
};

export default LoadigDisplay;
