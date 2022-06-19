import { Box, Button, Flex, HStack, Input, Wrap } from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";
import { TweetCard } from "src/components/Tweet/TweetCard";
import { HeaderBar } from "../components/HeaderBar";

export const Tweet = () => {
  return (
    <>
      <HeaderBar />
      <Box
        w={{ base: "71vh", md: "109.5vh", lg: "100%" }}
        h="1000vh"
        // h="auto"
        pt={{ base: "30px", md: "50px" }}
        backgroundColor="blue.900"
        color="white"
      >
        <Flex mt="50px" mb="80px" justify="center">
          <HStack spacing="40px">
            <Input w="450px"></Input>
            {/* 新規投稿ボタン */}
            <Button
              size="lg"
              bgColor="orange.400"
              _hover={{ bgColor: "orange.200" }}
              borderRadius="full"
            >
              <BsPencilSquare color="blsck" />
            </Button>
          </HStack>
        </Flex>
        <Wrap justify="center" borderTop="1px White solid">
          <TweetCard />
        </Wrap>
      </Box>
    </>
  );
};

export default Tweet;
