import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Simulator from "./Simulator";

const Home: NextPage = () => {
  return (
    <Box
      m="0"
      p="0"
      title="モンスターハンターライズ(MH’Rize )-スキルシュミレーター"
    >
      <Simulator />
    </Box>
  );
};

export default Home;
