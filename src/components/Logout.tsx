import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { auth } from "src/firebase";

export const Logout = () => {
  const router = useRouter();
  const clickLogout = () => {
    auth.signOut().catch((error) => {
      alert("errormessage");
    });
    // ↓無しでは遷移しないのか？
    router.push("/");
  };
  return (
    <>
      <Button onClick={clickLogout}>Logout</Button>
    </>
  );
};
