import { Avatar, Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { auth, db } from "src/firebase";
import { User } from "src/types/StoreUserTypes";

export const StatusIcon = () => {
  const [user, setUser] = useState<Partial<User>>();

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
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        mr={{ base: "10px", md: "20px" }}
      >
        <HStack>
          <Flex>
            <HStack>
              <Avatar
                size="md"
                display={{ base: "none", md: "block" }}
                src={getAvatar}
              />
              <Avatar
                size="sm"
                display={{ base: "block", md: "none" }}
                src={getAvatar}
              />
              <Flex
                fontSize={{ base: "11px", md: "16px" }}
                fontWeight="700"
                align="center"
                justify="center"
                color="white"
              >
                {getName ? getName : "未ログイン"}
              </Flex>
            </HStack>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};
