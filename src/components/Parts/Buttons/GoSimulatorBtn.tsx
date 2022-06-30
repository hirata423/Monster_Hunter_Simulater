import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const GoSimulatorBtn = () => {
  const router = useRouter();
  const goSimulatorPg = useCallback(() => router.push("/Simulator"), [router]);

  return (
    <Box textAlign="right" mr={{ base: "10px", md: "20px" }} pt="100px">
      <Button
        color="black"
        bgColor="green.300"
        _hover={{ cursor: "pointer", bgColor: "green.100" }}
        onClick={goSimulatorPg}
      >
        Simulator
      </Button>
    </Box>
  );
};
