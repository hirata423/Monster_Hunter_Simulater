import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { BuguType } from "src/types/BuguType";
import { useTotalDate } from "../hooks/useTotalDate";

export const TakeOffBugu = (props: BuguType) => {
  const { id, name } = props;
  const { total, setTotal } = useTotalDate();

  const deleteSomeName = () => {
    //idが【0】だけ削除される。※helm.jsonのバルファルクのヘルム
    setTotal((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  return (
    <>
      <Box key={id}>
        <Flex>
          <Box>{name}</Box>
          <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<DeleteIcon />}
            onClick={deleteSomeName}
          />
        </Flex>
      </Box>
    </>
  );
};
