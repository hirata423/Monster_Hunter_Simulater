import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const GoTopBtn = () => {
  const router = useRouter();
  const clickTopPage = useCallback(() => router.push("/Top"), [router]);

  return (
    <Box textAlign="right" mr={{ base: "10px", md: "20px" }}>
      <Button
        color="black"
        bgColor="green.300"
        _hover={{ cursor: "pointer", bgColor: "green.100" }}
        onClick={clickTopPage}
      >
        Top
      </Button>
    </Box>
  );
};
