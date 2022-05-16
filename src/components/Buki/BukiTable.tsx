import { Box } from "@chakra-ui/react";
import { useBukisDate } from "../../hooks/useBukisDate";
import { Bukis } from "../../types/BukiTypes";

export const Table = () => {
  const { bukiList } = useBukisDate();

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
