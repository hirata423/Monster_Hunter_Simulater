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
import React, { useEffect, useState } from "react";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { db } from "src/firebase";
import { useOnAuthState } from "src/hooks/useOnAuthState";
import { useGetDate } from "src/hooks/useGetDate";
import { Comment } from "src/types/StoreDbTypes";
import { CommentList } from "./CommentList";
import { useGetAuthUser } from "src/hooks/useGetAuthUser";
import { DeleteCommentBtn } from "./DeleteCommentBtn";

export const CommentBtn = (props: any) => {
  const { likeId } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [comment, setComment] = useState<string>("");
  const [commentBox, setCommentBox] = useState<Comment[]>([]);

  const { now } = useGetDate();
  // const getUser = useOnAuthState();
  // const uid = getUser?.uid;
  // const avatar = getUser?.avatar;
  // const username = getUser?.username;

  const getUser = useGetAuthUser();
  const uid = getUser?.uid;
  const avatar = getUser?.avatar;
  const username = getUser?.username;

  const commentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment(e.target.value);

  const commentRef = db.collection("posts").doc(likeId).collection("comments");

  const commentData = {
    uid: uid,
    avatar: avatar,
    username: username,
    comment: comment,
    time: now,
    likeId: likeId,
  };

  const getComments = () => {
    commentRef.get().then((snapshot) => {
      const localComments: any[] = [];
      snapshot.forEach((doc) => {
        localComments.push({
          ...doc.data(),
        });
      });
      setCommentBox(localComments);
    });
  };

  useEffect(() => {
    getComments();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Sent = () => {
    commentRef.doc().set(commentData);
    setComment("");
    getComments();
    onClose();
  };

  const contents = commentBox.map((item: Comment, index: number) => {
    return (
      <Box key={index} borderBottom="1px solid gray">
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
                {item.username ? item.username : "名無しさん"}
              </Box>
              {/* <DeleteCommentBtn likeId={likeId} uid={uid} /> */}
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
      <Box fontSize={{ base: "11px", md: "16px" }}>{commentBox.length}</Box>

      <CommentList commentBox={commentBox} contents={contents} />
    </>
  );
};
