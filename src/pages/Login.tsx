import { auth, db, provider } from "../firebase";

import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { HeaderBar } from "src/components/Parts/Header/HeaderBar";
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
      .catch((error) => alert("アカウント情報が見つかりませんでした"));
    router.push("/Simulator");
  };

  const clickLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/Simulator");
    } catch (error) {
      alert("アカウント情報が見つかりませんでした");
    }
  };

  return (
    <>
      <HeaderBar />

      <Box
        w="100%"
        h="auto"
        pt={{ base: "40px", md: "90px" }}
        pb={{ base: "90px", md: "180px" }}
        backgroundColor="blue.900"
        color="white"
      >
        <Stack spacing="25px" align="center">
          <Box>
            <Heading>LogIn</Heading>
          </Box>

          <Box>
            <Box py="5px">E-mail</Box>
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              onChange={changeName}
              value={email}
              bgColor="White"
              color="black"
              w={{ base: "270px", md: "370px" }}
            />
            <Box py="5px">Password</Box>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              onChange={changePass}
              value={password}
              bgColor="White"
              color="black"
              w={{ base: "270px", md: "370px" }}
            />

            <Flex justify="space-between">
              <Button
                mt="25px"
                mb="18px"
                w={{ base: "125px", md: "170px" }}
                bgColor="blue.300"
                color="black"
                onClick={clickLogin}
              >
                LogIn
              </Button>
              <Button
                mt="25px"
                w={{ base: "125px", md: "170px" }}
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
