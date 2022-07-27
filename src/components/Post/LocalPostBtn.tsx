import {
  Avatar,
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { auth, db, storage } from "src/firebase";
import { User } from "src/types/StoreDbTypes";
import { PostList } from "./PostList";

type Post = {
  id: number;
  username: string;
  avatar?: string;
  intro?: string;
  image?: string;
  timestamp: string;
};

export const PostBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [user, setUser] = useState<Partial<User>>();
  const [userNameBox, setUserNameBox] = useState<string[]>([]);
  const [avatarBox, setAvatarBox] = useState<string[]>([]);
  const [intro, setIntro] = useState<string>("");
  const [introBox, setIntroBox] = useState<string[]>([]);
  const [image, setImage] = useState<File[]>([]);
  const [imageBox, setImageBox] = useState<string[]>([]);
  const [timeStamp, setTimeStamp] = useState<string[]>([]);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  if (minutes > 10) {
    `0${minutes}`;
  }
  const now = [year + "/" + month + "/" + date + "/" + hours + ":" + minutes];

  const introChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setIntro(e.target.value);
  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImage([...image, ...e.target.files]);
  };

  const imageMap = image.map((item) => {
    return URL.createObjectURL(item);
  });

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    db.collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        const data = doc.data();
        setUser(data);
      });
    // eslint-disable-next-line
  }, []);
  const getName: any = user?.username;
  const getAvatar: any = user?.avatar;

  const addPost = () => {
    setIntroBox((pre) => [...pre, intro]);
    setImageBox((pre) => [...pre, ...imageMap]);
    setTimeStamp([...timeStamp, ...now]);
    setUserNameBox([getName]);
    setAvatarBox([getAvatar]);
    setIntro("");
    setImage([]);
    onClose();
  };

  const postBox: Post[] = [];
  for (let i = 0; i < introBox.length; i++) {
    postBox.push({
      id: i,
      username: getName,
      avatar: getAvatar,
      intro: introBox[i],
      image: imageBox[i],
      timestamp: timeStamp[i],
    });
  }

  const postBoxMap = postBox.map((item: Post) => {
    return (
      <Box key={item.id}>
        <PostList {...item} />
      </Box>
    );
  });

  //投稿画面のプレビューとして表示
  const displayImage = image.map((item, index) => {
    return (
      <Box key={index}>
        {/* eslint-disable-next-line */}
        <Image
          src={URL.createObjectURL(item)}
          w={{ base: "290px", md: "500px" }}
          h={{ base: "165px", md: "330px" }}
        />
      </Box>
    );
  });

  return (
    <>
      <Box textAlign="right" mr={{ base: "13px", md: "25px", lg: "25px" }}>
        <Button
          size=""
          px={{ base: "12px", md: "16px", lg: "20px" }}
          py={{ base: "11px", md: " 15px", lg: "19px" }}
          mb="20px"
          bgColor="green.300"
          fontSize={{ base: "11px", md: "16", lg: "18px" }}
          _hover={{ cursor: "pointer", bgColor: "green.100" }}
          borderRadius="full"
          onClick={onOpen}
        >
          <BsPencilSquare color="black" />
        </Button>
      </Box>

      <Wrap justify="center">{postBoxMap}</Wrap>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent bgColor="gray.200">
          <ModalHeader fontSize={{ base: "20px", md: "30px" }}>
            Create Post
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <WrapItem>
              <Box
                w={{ base: "400px", md: "650px" }}
                h="auto"
                borderBottom="1px white solid"
              >
                <Flex justify="center">
                  <Box>
                    <Flex>
                      <HStack>
                        <Avatar
                          size="sm"
                          display={{ base: "block", md: "none" }}
                          src={getAvatar}
                        />
                        <Avatar
                          size="md"
                          display={{ base: "none", md: "block" }}
                          src={getAvatar}
                        />
                        <Box
                          fontWeight="600"
                          fontSize={{ base: "15px", md: "20px" }}
                        >
                          {getName}
                        </Box>
                      </HStack>
                    </Flex>

                    <Textarea
                      my="10px"
                      w={{ base: "290px", md: "500px" }}
                      h={{ base: "20px", md: "60px" }}
                      bgColor="white"
                      value={intro}
                      ref={initialRef}
                      onChange={introChange}
                    />
                    <FormLabel
                      w={{ base: "290px", md: "500px" }}
                      h={{ base: "165px", md: "330px" }}
                      bgColor="white"
                      borderRadius="5px"
                    >
                      <Flex justify="center">
                        <Input
                          type="file"
                          accept="image/*"
                          display="none"
                          onChange={imageChange}
                        />
                        <Box>{displayImage}</Box>
                        {/* eslint-disable-next-line */}
                        <Flex
                          pt={{ base: "65px", md: "160px" }}
                          display={image[0] ? "none" : "block"}
                          color="gray.400"
                        >
                          クッリクしてファイルを選択
                        </Flex>
                      </Flex>
                    </FormLabel>
                  </Box>
                </Flex>
              </Box>
            </WrapItem>
          </ModalBody>

          <ModalFooter>
            <Button bgColor="green.300" onClick={addPost}>
              Sent
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
