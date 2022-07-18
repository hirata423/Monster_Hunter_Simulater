import { useRouter } from "next/router";
import { useEffect } from "react";
import { Loading } from "src/components/Parts/Spinner/Loading";
import { auth } from "src/firebase";

export const useOnAuthState = () => {
  //Vercelでデプロイ時にエラー
  //Error: No router instance found. you should only use "next/router"
  //inside the client side of your app. https://nextjs.org/docs/messages/no-router-instance
  //isReadeyを使うと解消
  const router = useRouter();
  const isReady = useRouter();

  useEffect(() => {
    if (isReady) {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          console.log("未サインイン");
          router.push("/Login");
        } else {
          console.log("サインイン済");
        }
      });
    } else {
      <Loading />;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return;
};
