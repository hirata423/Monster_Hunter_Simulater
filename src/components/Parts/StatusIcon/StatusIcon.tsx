import { Avatar, Flex, HStack } from "@chakra-ui/react";
import { useGetAuthUser } from "src/hooks/useGetAuthUser";

export const StatusIcon = () => {
  const getUser = useGetAuthUser();
  const avatar = getUser?.avatar;
  const username = getUser?.username;

  console.log("StatusIcon");

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
                src={avatar}
              />
              <Avatar
                size="sm"
                display={{ base: "block", md: "none" }}
                src={avatar}
              />
              <Flex
                fontSize={{ base: "11px", md: "16px" }}
                fontWeight="700"
                align="center"
                justify="center"
                color="white"
              >
                {username ? username : "未ログイン"}
              </Flex>
            </HStack>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};
