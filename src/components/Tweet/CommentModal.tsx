import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { db } from "src/firebase";
import { CommentList } from "./CommentList";

export const CommentModal = () => {
  const [commentBox, setCommentBox] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const valueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);
  const removeUndefind = commentBox.filter((v) => v);

  const Sent = () => {
    setCommentBox((pre) => [...pre, value]);
    onClose();
    setValue("");
  };

  return (
    <>
      <BsChatSquareDotsFill onClick={onOpen} />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={4}>
            <FormControl>
              <FormLabel fontWeight="700">HunterName</FormLabel>
              <Textarea
                h="130px"
                mt="3px"
                ref={initialRef}
                placeholder="コメント"
                value={value}
                onChange={valueChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={Sent} colorScheme="blue" mr={3} size="sm">
              Sent
            </Button>
            <Button onClick={onClose} size="sm">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>{removeUndefind.length}</Box>
      <CommentList removeUndefind={removeUndefind} />
    </>
  );
};
