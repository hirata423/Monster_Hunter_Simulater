import { Box, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { BsHeartFill } from "react-icons/bs";

export const HeartBt = () => {
  const [heartColor, setHeartColor] = useState<boolean>(true);

  const pushheart = () => {
    setHeartColor(!heartColor);
  };

  return (
    <>
      <Icon
        as={BsHeartFill}
        fontSize={{ base: "11px", md: "16px" }}
        onClick={pushheart}
        color={heartColor ? "White" : "red"}
      />
      <Box fontSize={{ base: "11px", md: "16px" }}>{heartColor ? 0 : 1}</Box>
    </>
  );
};
