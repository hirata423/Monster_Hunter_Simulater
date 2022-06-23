import { Box, Button, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { auth } from "src/firebase";

export const Logout = () => {
  const router = useRouter();
  const toast = useToast();
  const clickLogout = async () => {
    // auth.onAuthStateChanged((user) => {
    //   if (!user) {
    //     console.log("サインインしてない");
    //     // サインインしていない状態
    //     // サインイン画面に遷移する等
    //     // 例:
    //     // location.href = "/signin.html";
    //   } else {
    //     console.log("サインイン済");
    //     // サインイン済み
    //   }
    // });

    await auth
      .signOut()
      .then(() => {
        toast({
          title: "ログアウトしました",
          status: "success",
          position: "top-right",
          duration: 1300,
          isClosable: true,
        });
        console.log("サインアウトに成功");
        router.push("/");
      })

      .catch((error) => {
        toast({
          title: "ログアウトに失敗しました",
          status: "error",
          position: "top-right",
          duration: 1300,
          isClosable: true,
        });
        console.log("サインアウトに失敗");
      });

    // auth.onAuthStateChanged((user) => {
    //   if (!user) {
    //     console.log("サインインしてない");
    //     // サインインしていない状態
    //     // サインイン画面に遷移する等
    //     // 例:
    //     // location.href = "/signin.html";
    //   } else {
    //     console.log("サインイン済");
    //     // サインイン済み
    //   }
    // });
  };
  return (
    <Box pt="100px" textAlign="right" mr={{ base: "10px", md: "20px" }}>
      <Button
        color="black"
        bgColor="green.300"
        _hover={{ bgColor: "green.100" }}
        onClick={clickLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Logout;
