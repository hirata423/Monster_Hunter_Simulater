import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Textarea,
  WrapItem,
} from "@chakra-ui/react";
import { CommentBtn } from "./CommentBtn";
import { HeartBtn } from "./HeartBtn";

export const PostList = (props: any) => {
  const { uid, userName, avatar, intro, image, timeStamp } = props;

  return (
    <>
      <WrapItem justifyContent="center" key={uid}>
        <Box
          w={{ base: "330px", md: "600px" }}
          h="auto"
          borderBottom="1px white solid"
        >
          <Box m="20px">
            <Flex align="center">
              <HStack spacing="10px">
                <Avatar
                  size="sm"
                  display={{ base: "block", md: "none" }}
                  src={avatar}
                />
                <Avatar
                  size="md"
                  display={{ base: "none", md: "block" }}
                  src={avatar}
                />
                <Box fontWeight="600" fontSize={{ base: "15px", md: "20px" }}>
                  {userName}
                </Box>
              </HStack>
            </Flex>

            <Textarea
              mt="10px"
              mb="15px"
              w={{ base: "290px", md: "560px" }}
              h={{ base: "20px", md: "90px" }}
              bgColor="white"
              color="black"
              defaultValue={intro}
              disabled={true}
            />

            {/* eslint-disable*/}
            <Image
              w={{ base: "290px", md: "570px" }}
              h={{ base: "165px", md: "330px" }}
              mb="20px"
              border="1px White solid"
              borderRadius="5px"
              bgColor="white"
              src={image}
            />

            <Flex justify="space-between">
              <Box fontSize={{ base: "11px", md: "16px" }}>{timeStamp}</Box>
              <Flex mr="5px">
                <HStack spacing={{ base: "6px", md: "13px", lg: "20px" }}>
                  <CommentBtn />
                  <HeartBtn />
                </HStack>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </WrapItem>
    </>
  );
};
