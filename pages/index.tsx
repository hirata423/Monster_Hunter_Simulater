import { createRoot } from "react-dom/client";
import type { NextPage } from "next";
import { TopPage } from "./links/TopPage";

const Home: NextPage = () => {
  return (
    <>
      <TopPage></TopPage>
    </>
  );
};

export default Home;
