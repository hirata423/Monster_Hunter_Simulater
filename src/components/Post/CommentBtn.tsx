import { Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { useGetAuthUser } from "src/hooks/useGetAuthUser";
import { useGetDate } from "src/hooks/useGetDate";
import { Log } from "src/types/StoreDbTypes";
import { CommentList } from "./CommentList";

export const CommentBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // const [time, setTime] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");
  const [commentBox, setCommentBox] = useState<string[]>([]);
  const removeUndefind = commentBox.filter((v) => v);

  const { now } = useGetDate();
  const getUser = useGetAuthUser();
  const uid = getUser?.uid;
  const avatar = getUser?.avatar;
  const username = getUser?.username;

  const commentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment(e.target.value);
  // const timeChange = (e: any) => setTime(e.target.value);

  const Sent = () => {
    setCommentBox((pre) => [...pre, comment]);
    onClose();
    setComment("");
    // setTime([...time, ...now]);
  };

  const logBox: Log[] = [];
  for (let i = 0; i < removeUndefind.length; i++) {
    logBox.push({
      id: i,
      uid: uid,
      avatar: avatar,
      username: username,
      comment: removeUndefind[i],
      time: now,
    });
  }

  const contents = logBox.map((item: Log) => {
    return (
      <Box key={item.id} borderBottom="1px solid gray">
        <Flex align="center" justify="space-between" my="10px">
          <Flex>
            <HStack>
              <Avatar
                size="sm"
                display={{ base: "block", md: "none" }}
                src={item.avatar}
              />
              <Avatar
                size="md"
                display={{ base: "none", md: "block" }}
                src={item.avatar}
              />
              <Box fontSize={{ base: "12px", md: "16px" }}>
                {username ? username : "名無しさん"}
              </Box>
            </HStack>
          </Flex>

          <Flex fontSize={{ base: "12px", md: "16px" }}>{item.time}</Flex>
        </Flex>
        <Box fontSize={{ base: "12px", md: "16px" }}>{item.comment}</Box>
      </Box>
    );
  });

  return (
    <>
      <Icon
        as={BsChatSquareDotsFill}
        onClick={onOpen}
        fontSize={{ base: "12px", md: "16px" }}
      />

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bgColor="gray.200">
          <ModalHeader>Create Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Flex align="center">
                <FormLabel>
                  <HStack>
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

                    <Box
                      fontWeight="600"
                      fontSize={{ base: "15px", md: "20px" }}
                    >
                      {username ? username : "名無しさん"}
                    </Box>
                  </HStack>
                </FormLabel>
              </Flex>

              <Textarea
                h="130px"
                mt="3px"
                bgColor="white"
                ref={initialRef}
                placeholder="ハッピーなコメントを！"
                value={comment}
                onChange={commentChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={Sent} colorScheme="blue" mr={3} size="sm">
              Sent
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box fontSize={{ base: "11px", md: "16px" }}>{removeUndefind.length}</Box>

      <CommentList removeUndefind={removeUndefind} contents={contents} />
    </>
  );
};
