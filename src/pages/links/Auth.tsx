import { auth, provider, storage } from "../../firebase";
// import firebase from "firebase/app";

import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { HeaderBar } from "src/components/HeaderBar";

export const Auth = () => {
  const signInGoogle = async () => {
    // const auth = firebase.auth();
    await auth
      .signInWithPopup(provider)
      .catch((err: any) => alert(err.message));
  };

  return (
    <>
      <HeaderBar />

      <Flex
        align="center"
        justify="center"
        backgroundColor="blue.900"
        w="100%"
        h="auto"
        color="white"
      >
        <Stack spacing="25px" mt="100px">
          <Heading borderBottom="1px">Log in</Heading>
          <Box boxSize="300px">
            <Box>HunterName</Box>
            <Input bgColor="White" color="black"></Input>
            <Box>E-mail</Box>
            <Input bgColor="White" color="black"></Input>
            <Box>Password</Box>
            <Input bgColor="White" color="black"></Input>

            <Flex>
              <Button
                mt="25px"
                mr="20px"
                w="140px"
                bgColor="blue.300"
                color="black"
              >
                SignIn
              </Button>
              <Button
                mt="25px"
                w="140px"
                bgColor="green.300"
                color="black"
                onClick={signInGoogle}
              >
                Google SignIn
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Auth;
