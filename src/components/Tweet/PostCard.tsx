import {
  Box,
  Button,
  Flex,
  Image,
  ModalBody,
  ModalFooter,
  Textarea,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export const PostCard = () => {
  const [intro, setIntro] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [timeStamp, setTimeStamp] = useState<string[]>([]);
  const [introBox, setIntroBox] = useState<string[]>([]);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const now = [year + "/" + month + "/" + date + "/" + hours + ":" + minutes];

  const commentChange = (e: any) => setIntro(e.target.value);
  const imageChange = (e: any) => setImage(e.target.value);

  const postAdd = () => {
    alert("sent");
  };

  return (
    <>
      <ModalBody>
        <Flex justify="center">
          <WrapItem>
            <Box
              w={{ base: "350px", md: "600px" }}
              h="auto"
              borderBottom="1px white solid"
            >
              <Box m="20px">
                <Box fontWeight="600" fontSize={{ base: "15px", md: "20px" }}>
                  HunterName
                </Box>

                <Textarea
                  mt="10px"
                  mb="15px"
                  w={{ base: "310px", md: "560px" }}
                  h={{ base: "15px", md: "70px" }}
                  bgColor="white"
                  color="black"
                  value={intro}
                  onChange={commentChange}
                />
                {/* eslint-disable*/}
                <Image
                  w={{ base: "350px", md: "570px" }}
                  h={{ base: "200px", md: "330px" }}
                  mb="20px"
                  border="1px White solid"
                  borderRadius="5px"
                  bgColor="white"
                  onChange={imageChange}
                  src="/images/testphoto2.jpg"
                />
              </Box>
            </Box>
          </WrapItem>
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={postAdd}>
          Sent
        </Button>
      </ModalFooter>
    </>
  );
};
