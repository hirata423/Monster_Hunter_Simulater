import { auth, db, provider } from "../firebase";

import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { HeaderBar } from "src/components/HeaderBar";
import React, { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const changePass = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const router = useRouter();
  const clickCreateNewAccount = useCallback(
    () => router.push("/Register"),
    [router]
  );

  const signInGoogle = async () => {
    await auth
      .signInWithPopup(provider)
      .catch((error: any) => alert("アカウント情報が見つかりませんでした"));
    router.push("/Top");
  };

  const clickLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/Top");
    } catch (error) {
      alert("アカウント情報が見つかりませんでした");
    }
  };

  return (
    <>
      <HeaderBar />

      <Box
        w={{ base: "71vh", md: "109.5vh", lg: "100%" }}
        pt="30px"
        pb="30px"
        backgroundColor="blue.900"
        color="white"
      >
        <Stack spacing="25px" align="center">
          <Box justifyItems="left">
            <Heading>LogIn</Heading>
          </Box>
          <Box boxSize="300px">
            <Box>E-mail</Box>
            <Input
              id="email"
              type="email"
              onChange={changeName}
              value={email}
              bgColor="White"
              color="black"
            ></Input>
            <Box>Password</Box>
            <Input
              id="password"
              type="password"
              onChange={changePass}
              value={password}
              bgColor="White"
              color="black"
            ></Input>

            <Flex>
              <Button
                mt="25px"
                mr="20px"
                mb="18px"
                w="140px"
                bgColor="blue.300"
                color="black"
                onClick={clickLogin}
              >
                LogIn
              </Button>
              <Button
                mt="25px"
                w="140px"
                bgColor="green.300"
                color="black"
                onClick={signInGoogle}
              >
                Google LogIn
              </Button>
            </Flex>
            <Box
              onClick={clickCreateNewAccount}
              _hover={{ cursor: "pointer", color: "green" }}
            >
              Create New Account
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
