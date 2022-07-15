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
  const { contents } = props;
  const [modal, setModal] = useState(true);
  const { isOpen, onClose, onToggle } = useDisclosure();

  const commentDisplay = () => {
    setModal(!modal);
    onToggle();
  };

  return (
    <>
      <Button
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
          <ModalHeader>Comment List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify="center">
              <Box
                w={{ base: "400px", md: "800px" }}
                py={{ base: "10px", md: "20px" }}
                px={{ base: "10px", md: "20px" }}
                color="black"
              >
                <UnorderedList
                  m="0px"
                  mb="20px"
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
