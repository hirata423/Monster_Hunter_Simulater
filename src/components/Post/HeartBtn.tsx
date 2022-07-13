import { Box, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { db } from "src/firebase";
import { useGetAuthUser } from "src/hooks/useGetAuthUser";
import { Post } from "src/types/StoreDbTypes";

export const HeartBtn = (props: any) => {
  const { post } = props;
  const [heartColor, setHeartColor] = useState<boolean>(true);

  const getUser = useGetAuthUser();
  const uid = getUser?.uid;
  const usersRef = db.collection("users").doc(uid);
  const postsRef = usersRef.collection("posts");

  const yooo = post.map((item: Post, index: number) => {
    return item.likeId;
  });
  const piii = yooo.shift();
  console.log(piii);

  const likedUser = {
    uid: uid,
    likeCount: 1,
  };

  const like = () => {
    postsRef.doc(piii).collection("likeUsers").doc().set(likedUser);
  };

  const pushheart = () => {
    setHeartColor(!heartColor);
    like();
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
