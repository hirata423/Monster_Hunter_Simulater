import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const GoTop = () => {
  const router = useRouter();
  const clickTweetPage = useCallback(() => router.push("/Top"), [router]);

  return (
    <Box textAlign="right" mr="20px" pt="100px">
      <Button
        color="black"
        bgColor="green.300"
        _hover={{ cursor: "pointer", bgColor: "green.100" }}
        onClick={clickTweetPage}
      >
        Top
      </Button>
    </Box>
  );
};

export default GoTop;
