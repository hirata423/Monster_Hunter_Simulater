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
import { auth, db } from "src/firebase";
import { PostList } from "./PostList";

type Post = {
  id: number;
  username: string;
  avatar?: string;
  intro?: string;
  image?: string;
  timestamp: string;
};

type User = {
  uid: string;
  email: string;
  username: string;
  avatar?: string;
};

export const PostBt = () => {
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

  const uid = auth.currentUser?.uid;
  useEffect(() => {
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

  //デプロイ後に表示されないのは、URL.createobjectURL()で一時的なURLを生成しているから？
  console.log(getAvatar);

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
  // console.log("Post", userNameBox, avatarBox, introBox, imageBox, timeStamp);

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
          w={{ base: "270px", md: "500px" }}
          h={{ base: "165px", md: "330px" }}
        />
      </Box>
    );
  });

  return (
    <>
      <Box
        textAlign="right"
        mr={{ base: "10px", md: "20px" }}
        borderBottom="1px solid white"
      >
        <Button
          size="lg"
          mb="20px"
          bgColor="green.300"
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
        <ModalContent bgColor="gray.200" justifyContent="center">
          <ModalHeader fontSize={{ base: "20px", md: "30px" }}>
            Create Post
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Flex justify="center" display={postBoxMap ? "block" : "none"}>
              <WrapItem>
                <Box
                  w={{ base: "300px", md: "550px" }}
                  h="auto"
                  borderBottom="1px white solid"
                >
                  <Box m="20px">
                    <Flex align="center">
                      <HStack spacing="10px">
                        <Avatar size="md" src={user?.avatar} />
                        <Box
                          fontWeight="600"
                          fontSize={{ base: "15px", md: "20px" }}
                        >
                          {user?.username}
                        </Box>
                      </HStack>
                    </Flex>

                    <Textarea
                      mt="10px"
                      mb="15px"
                      w={{ base: "270px", md: "500px" }}
                      h={{ base: "20px", md: "60px" }}
                      bgColor="white"
                      color="black"
                      value={intro}
                      ref={initialRef}
                      onChange={introChange}
                    />
                    <FormLabel
                      w={{ base: "270px", md: "500px" }}
                      h={{ base: "165px", md: "330px" }}
                      border="solid gray.300 "
                      bgColor="white"
                      color="gray.400"
                      borderRadius="5px"
                    >
                      <Flex justify="center" align="center">
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
                          justify="center"
                          display={!image[0] ? "block" : "none"}
                        >
                          クッリクしてファイルを選択
                        </Flex>
                      </Flex>
                    </FormLabel>
                  </Box>
                </Box>
              </WrapItem>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addPost}>
              Sent
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
