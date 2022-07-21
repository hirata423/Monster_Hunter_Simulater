import { Box, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { db } from "src/firebase";
import { useGetAuthUser } from "src/hooks/useGetAuthUser";
import { useOnAuthState } from "src/hooks/useOnAuthState";
import { Like } from "src/types/StoreDbTypes";

export const HeartBtn = (props: any) => {
  const { likeId } = props;
  const [heartColor, setHeartColor] = useState<boolean>(true);
  const [likes, setLikes] = useState<Like[]>([]);

  // const getUser = useOnAuthState();
  // const uid = getUser?.uid;

  const getUser = useGetAuthUser();
  const uid = getUser?.uid;

  const likedUser = {
    uid: uid,
    likePostId: likeId,
  };

  const postRef = db.collection("posts").doc(likeId).collection("likeUsers");

  const like = () => {
    // if (heartColor == true) {
    postRef.doc().set(likedUser);
    // } else {
    //   return;
    //ここに削除ロジック
    // }
  };

  const getLikes = () => {
    postRef.get().then((snapshot) => {
      const localLikes: any[] = [];
      snapshot.forEach((doc) => {
        localLikes.push({
          ...doc.data(),
        });
      });
      setLikes(localLikes);
    });
  };

  useEffect(() => {
    getLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //useEffectでgetLikesをラップしないといいね数が描画されない
  //ラップしてもボタンを押して更新しないと表示されない

  const pushheart = () => {
    setHeartColor(!heartColor);
    like();
    getLikes();
  };

  return (
    <>
      <Icon
        as={BsHeartFill}
        fontSize={{ base: "11px", md: "16px" }}
        onClick={pushheart}
        color={likes.length == 0 ? "White" : "red"}
      />
      <Box fontSize={{ base: "11px", md: "16px" }}>{likes.length}</Box>
    </>
  );
};
