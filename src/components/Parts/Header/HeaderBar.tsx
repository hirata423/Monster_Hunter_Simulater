import { Avatar, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { auth, db } from "src/firebase";
import { HumburgerBt } from "../Buttons/HumburgerBt";

type User = {
  uid: string;
  email: string;
  username: string;
  avatar?: string;
};

export const HeaderBar = () => {
  const [user, setUser] = useState<Partial<User>>();

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

  return (
    <Flex
      bgSize="cover"
      bgPosition="center"
      bgImage="url('/images/header.jpg')"
      h={{ base: "8vh", md: "10vh", lg: "13vh" }}
      w="100%"
      justify="space-between"
      // position="fixed"
      // zIndex="99"
    >
      <Flex
        align="center"
        color="white"
        fontWeight={{ base: "500", md: "300" }}
        fontSize={{ base: "13px", md: "33", lg: "40px" }}
        pl={{ base: "13px", md: "24px", lg: "30px" }}
      >
        MH’Rize ツールアプリ（仮称）
      </Flex>

      <Flex
        justify="space-between"
        align="center"
        mr={{ base: "10px", md: "20px" }}
      >
        <HStack>
          <Flex>
            <HStack>
              <Avatar
                size="sm"
                display={{ base: "none", md: "block" }}
                src={getAvatar ? getAvatar : "none"}
              />
              <Avatar
                size="xs"
                display={{ base: "block", md: "none" }}
                src={getAvatar ? getAvatar : "未ログイン"}
              />
              <Flex
                fontSize={{ base: "7px", md: "15px" }}
                fontWeight="700"
                align="center"
                justify="center"
                color="white"
              >
                {getName ? getName : "未ログイン"}
              </Flex>
            </HStack>
          </Flex>

          <Flex align="center" color="white" mr={{ base: "10px", md: "20px" }}>
            <HumburgerBt />
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};
