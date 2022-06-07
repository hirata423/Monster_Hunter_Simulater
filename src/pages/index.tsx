import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Login from "./Login";

const Home: NextPage = () => {
  return (
    <Box m="0" p="0">
      <Login />
    </Box>
  );
};

export default Home;
