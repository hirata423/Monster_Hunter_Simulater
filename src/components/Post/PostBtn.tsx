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
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";

import { auth, db } from "src/firebase";
import { useOnAuthState } from "src/hooks/useOnAuthState";
import { useGetDate } from "src/hooks/useGetDate";
import { useStorage } from "src/hooks/useStorage";
import { Post, User } from "src/types/StoreDbTypes";
import { PostList } from "./PostList";
import { useGetAuthUser } from "src/hooks/useGetAuthUser";

export const PostBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const router = useRouter();

  const getUser = useGetAuthUser();
  const uid = getUser?.uid;
  const avatar = getUser?.avatar;
  const username = getUser?.username;

  // const getUser = useOnAuthState();
  // const uid = getUser?.uid;
  // const avatar = getUser?.avatar;
  // const username = getUser?.username;

  const { image, setImage, stg } = useStorage();
  const { now } = useGetDate();

  const [post, setPost] = useState<Post[]>([]);
  const [intro, setIntro] = useState<string>("");

  const introChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setIntro(e.target.value);
  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files[0]) {
      stg({ Children: "postimage", File: e.target.files[0] });
    }
  };

  const postRef = db.collection("posts");

  const randomId = Math.random().toString(32).substring(2);
  const postData = {
    uid: uid,
    userName: username,
    avatar: avatar,
    intro: intro,
    image: image,
    timeStamp: now,
    likeId: randomId,
  };

  const addPost = () => {
    if (image) {
      postRef.doc(randomId).set(postData);
    } else {
      console.log("error");
    }
    //投稿完了toastを出す
    onClose();
    setIntro("");
    setImage("");
    loading();
  };

  const getPosts = () => {
    postRef.get().then((snapshot) => {
      const localPosts: any[] = [];
      snapshot.forEach((doc) => {
        localPosts.push({
          ...doc.data(),
        });
      });
      setPost(localPosts);
    });
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //第二引数にpostを入れると、下のエラー
  //Warning: Can't perform a React state update on an unmounted component.
  //This is a no-op, but it indicates a memory leak in your application.
  //To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

  const postListMap = post.map((item, index) => {
    return (
      <Box key={index}>
        <PostList {...item} />
      </Box>
    );
  });

  const loading = useCallback(() => router.push("/LoadingDisplay"), [router]);

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
                          {username}
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
