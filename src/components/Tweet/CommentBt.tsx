import { Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
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
import { auth, db } from "src/firebase";
import { CommentList } from "./CommentList";

type Log = {
  id: number;
  imageUrl: string;
  hunterName: string;
  comment: string;
  time: string;
};

export const CommentBt = () => {
  const [text, setText] = useState<string>("");
  const [time, setTime] = useState<string[]>([]);
  const [commentBox, setCommentBox] = useState<string[]>([]);
  const removeUndefind = commentBox.filter((v) => v);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const commentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);
  const timeChange = (e: any) => setTime(e.target.value);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const now = [year + "/" + month + "/" + date + "/" + hours + ":" + minutes];

  const Sent = () => {
    setCommentBox((pre) => [...pre, text]);
    onClose();
    setText("");
    setTime([...time, ...now]);
  };

  //テスト グローバルstateに、uid,huntername,avatar,comment,timestamp,を格納
  const image = [
    "/images/avatar2.jpg",
    "/images/avatar1.jpg",
    "/images/avatar2.jpg",
    "/images/avatar1.jpg",
  ];
  const name = ["平田", "佐藤", "山田", "近藤"];

  // const loginUser = auth.currentUser?.uid;
  // const testdb = db.collection("users").where("uid", "==", loginUser);
  // console.log(testdb);

  const logBox: Log[] = [];
  for (let i = 0; i < removeUndefind.length; i++) {
    logBox.push({
      id: i,
      //テスト
      imageUrl: image[i],
      hunterName: name[i],
      comment: removeUndefind[i],
      time: time[i],
    });
  }

  console.log(logBox);

  const contents = logBox.map((item: Log) => {
    return (
      <Box key={item.id} mb="20px" borderBottom="1px solid gray">
        <Flex align="center" justify="space-between" mb="8px">
          <Flex align="center">
            <Avatar size="sm" mr="8px" src={item.imageUrl} />
            <Box fontSize={{ base: "12px", md: "16px" }}>
              {item.hunterName ? item.hunterName : "名無しさん"}
            </Box>
          </Flex>

          <Flex fontSize={{ base: "10px", md: "16px" }} onChange={timeChange}>
            {item.time}
          </Flex>
        </Flex>
        <Box fontSize={{ base: "11px", md: "16px" }}>{item.comment}</Box>
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
        <ModalContent>
          <ModalHeader>Create Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={4}>
            <FormControl>
              {/* // dbからログイン中のユーザー名を表示する */}
              <FormLabel fontWeight="700">HunterName</FormLabel>
              <Textarea
                h="130px"
                mt="3px"
                ref={initialRef}
                placeholder="ハッピーなコメントを！"
                value={text}
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
      <Box fontSize={{ base: "13px", md: "16px" }}>{removeUndefind.length}</Box>

      <CommentList removeUndefind={removeUndefind} contents={contents} />
    </>
  );
};
