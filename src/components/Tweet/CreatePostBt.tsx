import {
  Box,
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { PostCard } from "./PostCard";

export const CreatePostBt = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Box
        textAlign="right"
        mr={{ base: "10px", md: "20px" }}
        borderBottom="1px solid white"
      >
        <Button
          size="lg"
          mb="20px"
          bgColor="green.300"
          _hover={{ cursor: "pointer", bgColor: "green.100" }}
          borderRadius="full"
          onClick={onOpen}
        >
          <BsPencilSquare color="black" />
        </Button>
      </Box>
      <Box>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="2xl"
        >
          <ModalOverlay />
          <ModalContent justifyContent="center">
            <ModalHeader fontSize={{ base: "20px", md: "30px" }}>
              Create Post
            </ModalHeader>
            <ModalCloseButton />
            <PostCard />
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
