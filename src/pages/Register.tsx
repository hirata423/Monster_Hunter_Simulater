import { auth, db } from "../firebase";

import { Box, Button, Heading, Input, Stack } from "@chakra-ui/react";
import { HeaderBar } from "src/components/HeaderBar";
import { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const changePass = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const clickSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const authUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("userName", userName);
      console.log("email", authUser.user?.email);
      console.log("uid", authUser.user?.uid);
      if (userName) {
        const uid = authUser.user?.uid;
        const userData = {
          uid: uid,
          username: userName,
          email: authUser.user?.email,
        };
        db.collection("users").doc(uid).set(userData);
      }
      router.push("/Top");
    } catch (error) {
      alert("errormessage");
    }
  };

  const clickCreateNewAccount = useCallback(() => router.push("/"), [router]);

  return (
    <>
      <HeaderBar />

      <Box
        w={{ base: "71vh", md: "109.5vh", lg: "100%" }}
        h="130vh"
        pt={{ base: "30px", md: "90px" }}
        pb="30px"
        backgroundColor="blue.900"
        color="white"
      >
        <Stack spacing="25px" align="center">
          <Box justifyItems="left">
            <Heading size="xl">New Account</Heading>
          </Box>
          <Box boxSize="300px">
            <Box>HunterName</Box>
            <Input
              id="username"
              type="username"
              onChange={changeName}
              value={userName}
              bgColor="White"
              color="black"
            ></Input>
            <Box>E-mail</Box>
            <Input
              id="email"
              type="email"
              onChange={changeEmail}
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

            <Button
              type={"submit"}
              onClick={clickSubmit}
              mt="25px"
              mr="20px"
              mb="18px"
              w="300px"
              bgColor="green.300"
              color="black"
            >
              Submit
            </Button>
            <Box
              onClick={clickCreateNewAccount}
              _hover={{ cursor: "pointer", color: "green" }}
            >
              Back to Loginpage
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Register;
