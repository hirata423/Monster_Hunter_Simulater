import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const GoTopBtn = () => {
  const router = useRouter();
  const clickTopPage = useCallback(() => router.push("/Top"), [router]);

  return (
    <Box textAlign="right" mr={{ base: "10px", md: "20px" }}>
      <Button
        onClick={clickTopPage}
        size=""
        px={{ base: "10px", md: "18" }}
        py={{ base: "8px", md: "11px" }}
        color="black"
        bgColor="green.300"
        fontSize={{ base: "8px", md: "14px", lg: "18px" }}
        _hover={{ cursor: "pointer", bgColor: "green.100" }}
      >
        Top
      </Button>
    </Box>
  );
};
