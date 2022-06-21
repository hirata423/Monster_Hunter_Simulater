import { Box, Flex, HStack, Image, Textarea, WrapItem } from "@chakra-ui/react";
import { CommentBt } from "./CommentBt";
import { HeartBt } from "./HeartBt";

export const PostList = () => {
  return (
    <Flex justify="center">
      <WrapItem>
        <Box
          w={{ base: "400px", md: "600px" }}
          h="auto"
          borderBottom="1px white solid"
        >
          <Box m="20px">
            <Box fontWeight="600" fontSize="20px">
              HunterName
            </Box>

            <Textarea
              mt="10px"
              mb="15px"
              w={{ base: "350px", md: "560px" }}
              h={{ base: "20px", md: "70px" }}
              bgColor="white"
              color="black"
            />
            {/* eslint-disable*/}
            <Image
              w={{ base: "350px", md: "570px" }}
              h={{ base: "200px", md: "330px" }}
              mb="20px"
              border="1px White solid"
              borderRadius="5px"
              bgColor="white"
              src="/images/testphoto2.jpg"
            />
            <Flex justify="space-between">
              <Box fontSize={{ base: "13px", md: "16px" }}>2022/0/0/00:00</Box>
              <Flex mr="5px">
                <HStack spacing="20px">
                  <CommentBt />
                  <HeartBt />
                </HStack>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </WrapItem>
    </Flex>
  );
};
