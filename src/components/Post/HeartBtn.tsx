import { Box, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { auth, db } from "src/firebase";
import { Post } from "src/types/StoreDbTypes";

export const HeartBtn = () => {
  const [heartColor, setHeartColor] = useState<boolean>(true);
  // const [doc, setDoc] = useState<Post[]>([]);

  // const uid = auth.currentUser?.uid;

  // const docId = db
  //   .collection("posts")
  //   .get()
  //   .then((snapshot) => {
  //     const docList: any[] = [];
  //     snapshot.forEach((doc) => {
  //       docList.push({
  //         ...doc.data(),
  //       });
  //     });
  //     setDoc(docList);
  //   });

  //   doc.findIndex()

  const pushheart = () => {
    setHeartColor(!heartColor);

    //   try {
    //     const likeData = {
    //       uid: uid,
    //       like: 1,
    //     };
    //     const subColection = db
    //       .collection("posts")
    //       .doc()
    //       .collection("likes")
    //       .doc()
    //       .set(likeData);
    //   } catch {
    //     console.log("err");
    //   }
  };

  return (
    <>
      <Icon
        as={BsHeartFill}
        fontSize={{ base: "11px", md: "16px" }}
        onClick={pushheart}
        color={heartColor ? "White" : "red"}
      />
      <Box fontSize={{ base: "11px", md: "16px" }}>{heartColor ? 0 : 1}</Box>
    </>
  );
};

//likesコレクションの中にランダムIDのDocを生成。uidとcount：1のデータ
//いいね数を取り出して表示する時は配列内のデータ数を表示
//uidはいいねの取り消し、制御のために必要
