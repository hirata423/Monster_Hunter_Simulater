import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { auth } from "src/firebase";

export const Logout = () => {
  const router = useRouter();
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
        console.log("サインアウトに成功");
        router.push("/");
      })
      .catch((error) => {
        console.log("errormessage");
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
    <>
      <Button onClick={clickLogout}>Logout</Button>
    </>
  );
};
