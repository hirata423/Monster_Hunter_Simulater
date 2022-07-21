import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "src/firebase";
import { User } from "src/types/StoreDbTypes";

export const useOnAuthState = () => {
  // const [user, setUser] = useState<Partial<User>>();
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

          //読み取り回数多すぎる

          // const uid = auth.currentUser?.uid;
          // const usersCol = db.collection("users").doc(uid);
          // usersCol.get().then((doc) => {
          //   setUser(doc.data());
          // });
        }
      });
    }

    // eslint-disable-next-line
  }, []);

  return;
};
