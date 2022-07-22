import { Icon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { db } from "src/firebase";
import { useGetAuthUser } from "src/hooks/useGetAuthUser";

export const DeletePostBtn = (props: any) => {
  const { likeId, uid } = props;

  const router = useRouter();

  const getUser = useGetAuthUser();
  const id = getUser?.uid;

  const loading = useCallback(() => router.push("/LoadingDisplay"), [router]);

  const postRef = db.collection("posts").doc(likeId);

  const deletePost = () => {
    postRef.delete();
    loading();
  };
  return (
    <>
      <Icon
        as={IoTrashBinOutline}
        onClick={deletePost}
        display={uid === id ? "block" : "none"}
      />
    </>
  );
};
