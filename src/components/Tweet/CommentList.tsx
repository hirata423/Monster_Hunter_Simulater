import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export const CommentList = (props: any) => {
  const { removeUndefind, contents } = props;
  const [modal, setModal] = useState(true);
  const { isOpen, onClose, onToggle } = useDisclosure();

  const commentDisplay = () => {
    setModal(!modal);
    onToggle();
  };

  //comment,timestamp,ハートを押した投稿情報をログインユーザーの情報としtr紐付ける

  return (
    <>
      <Button
        display={removeUndefind == [] ? "none" : "block"}
        variant="link"
        onClick={commentDisplay}
        fontSize={{ base: "11px", md: "16px" }}
      >
        コメントを表示...
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent bgColor="gray.200">
          {/* // dbからログイン中のユーザー名を表示する */}
          <ModalHeader fontSize={{ base: "16px", md: "20px" }}>
            Comment List
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify="center">
              <Box
                w={{ base: "400px", md: "800px" }}
                py={{ base: "10px", md: "20px" }}
                px={{ base: "10px", md: "20px" }}
                color="black"
                rounded="lg"
              >
                <Flex justify="right" bg="white"></Flex>
                <UnorderedList
                  m="0"
                  p="10px"
                  bgColor="white"
                  borderRadius="5px"
                >
                  {contents}
                </UnorderedList>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
