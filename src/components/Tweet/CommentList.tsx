import {
  Box,
  Button,
  Flex,
  ListItem,
  Slide,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export const CommentList = (props: any) => {
  const { removeUndefind } = props;
  const [modal, setModal] = useState(true);
  const { isOpen, onToggle } = useDisclosure();

  const commentDisplay = () => {
    setModal(!modal);
    onToggle();
  };

  const CommentMapItem = removeUndefind.map((item: string, index: number) => {
    return (
      <Box key={index}>
        <ListItem>{item}</ListItem>
      </Box>
    );
  });

  return (
    <>
      <Button
        display={removeUndefind == [] ? "none" : "block"}
        variant="link"
        onClick={commentDisplay}
      >
        {modal ? "コメントを表示..." : "閉じる"}
      </Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Flex justify="center">
          <Box
            w="800px"
            p="40px"
            mb="30px"
            bg="White"
            color="black"
            rounded="lg"
          >
            <UnorderedList>{CommentMapItem}</UnorderedList>
          </Box>
        </Flex>
      </Slide>
    </>
  );
};
