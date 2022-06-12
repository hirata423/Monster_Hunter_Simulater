import { Box } from "@chakra-ui/react";
import { Bukis } from "../../types/BukiTypes";
import BukiList from "../../../Buki.json";

export const Table = () => {
  const bukiList: Bukis[] = BukiList;

  const filterData = bukiList.filter((item: Bukis) => {
    return item.checked === true;
  });

  // const mapData = filterData.map((item: Bukis) => {
  //   return (
  //     <Box key={item.id}>
  //       <Box>{item.power}</Box>
  //     </Box>
  //   );
  // });

  const sum = filterData.reduce((acc: number, val: Bukis): number => {
    return acc + val.power;
  }, 0);

  return (
    <>
      {/* <Box>{mapData}</Box> */}
      <Box>{sum}</Box>
    </>
  );
};
