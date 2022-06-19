import { Box, Flex, HStack, Image, Textarea, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { CommentModal } from "./CommentModal";

export const TweetCard = () => {
  const [heartColor, setHeartColor] = useState(true);

  const pushheart = () => {
    setHeartColor(!heartColor);
  };

  return (
    <WrapItem>
      <Box m="30px" p="10px" w="600px" h="auto" borderBottom="1px white solid">
        <Box m="20px">
          <Box fontWeight="600" fontSize="20px">
            HunterName
          </Box>
          <Textarea
            mt="10px"
            mb="15px"
            w="540px"
            h="70px"
            bgColor="white"
            color="black"
          ></Textarea>
          {/* eslint-disable*/}
          <Image
            w="550px"
            h="330px"
            mb="20px"
            border="1px White solid"
            borderRadius="5px"
            bgColor="white"
            src="/images/testphoto.jpg"
          />
          <Box>
            <Flex mr="5px" justifyContent="right">
              <HStack spacing="20px">
                <CommentModal />
                <BsHeartFill
                  onClick={pushheart}
                  color={heartColor ? "White" : "red"}
                />
                <Box>{heartColor ? 0 : 1}</Box>
              </HStack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </WrapItem>
  );
};
