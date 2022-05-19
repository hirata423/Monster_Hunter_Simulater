import { Box } from "@chakra-ui/react";
import { Bukis } from "../../types/BukiTypes";
import BukiList from "../../../Buki.json";

export const Table = () => {
  const bukiList: Bukis[] = BukiList;

  const filterDate = bukiList.filter((item: Bukis) => {
    return item.checked === true;
  });

  // const mapDate = filterDate.map((item: Bukis) => {
  //   return (
  //     <Box key={item.id}>
  //       <Box>{item.power}</Box>
  //     </Box>
  //   );
  // });

  const sum = filterDate.reduce((acc: number, val: Bukis): number => {
    return acc + val.power;
  }, 0);

  return (
    <>
      {/* <Box>{mapDate}</Box> */}
      <Box>{sum}</Box>
    </>
  );
};
