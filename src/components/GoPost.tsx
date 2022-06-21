import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const GoPost = () => {
  const router = useRouter();
  const clickTweetPage = useCallback(() => router.push("/Tweet"), [router]);

  return (
    <Box textAlign="right" mr="20px">
      <Button
        color="black"
        bgColor="green.300"
        _hover={{ cursor: "pointer", bgColor: "green.100" }}
        onClick={clickTweetPage}
      >
        Post
      </Button>
    </Box>
  );
};

export default GoPost;
