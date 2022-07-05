import {
  Avatar,
  Box,
  Button,
  Flex,
  FormLabel,
  HStack,
  Img,
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
import { User } from "src/types/StoreUserTypes";
import { PostList } from "./PostList";

type Post = {
  uid: string;
  userName: string;
  avatar: string;
  intro: string;
  image: string;
  timeStamp: string;
};

export const TestPostBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [user, setUser] = useState<Partial<User>>();
  const [post, setPost] = useState<Post[]>([]);
  const [intro, setIntro] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  if (minutes > 10) {
    `0${minutes}`;
  }
  const now = year + "/" + month + "/" + date + "/" + hours + ":" + minutes;

  const introChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setIntro(e.target.value);

  //storage,imageに投稿写真を追加
  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files[0]) {
      const randomId = Math.random().toString(32).substring(2);
      const uploadTask = storage
        .ref(`/images/postimage/${randomId}.png`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapShot: any) => {
          console.log("snapShot", snapShot);
        },
        (err: any) => {
          console.log("err", err);
        },
        () => {
          storage
            .ref("/images/postimage/")
            .child(`${randomId}.png`)
            .getDownloadURL()
            .then((fireBaseUrl: string) => {
              console.log(fireBaseUrl);
              setImage(fireBaseUrl);
            });
        }
      );
    }
  };

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

  //user//uid/post/自動IDでドキュメント追加
  const addPost = () => {
    if (image) {
      const postData = {
        uid: uid,
        userName: getName,
        avatar: getAvatar,
        intro: intro,
        image: image,
        timeStamp: now,
      };
      const subColection = db
        .collection("users")
        .doc(uid)
        .collection("posts")
        .doc()
        .set(postData);
    } else {
      console.log("err");
    }
    //投稿完了toastを出す
    onClose();
    setIntro("");
    setImage("");
  };

  //mypage情報としての方が適当なデータ取得とデータ構造↓

  //ユーザーの投稿データはグループIdを持たせtてwhere()で取得する
  const getPosts = () => {
    db.collection("users")
      .doc(uid)
      .collection("posts")
      .get()
      .then((snapshot) => {
        const localPost: any[] = [];
        snapshot.forEach((doc) => {
          localPost.push({
            ...doc.data(),
          });
        });
        setPost(localPost);
      });
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postListMap = post.map((item, index) => {
    return (
      <Box key={index}>
        <PostList {...item} />
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

      <Wrap justify="center">{postListMap}</Wrap>

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
                        <Img
                          src={image}
                          w={{ base: "290px", md: "500px" }}
                          h={{ base: "165px", md: "330px" }}
                          borderRadius="5px"
                          display={image ? "block" : "none"}
                        />
                        <Flex
                          pt={{ base: "65px", md: "160px" }}
                          display={image ? "none" : "block"}
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
