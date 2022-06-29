import { auth, db } from "../firebase";

import {
  Avatar,
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { HeaderBar } from "src/components/Parts/Header/HeaderBar";
import { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<File[]>([]);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const changePass = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const changeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setAvatar([...avatar, ...e.target.files]);
  };

  //Avatar画像のプレビュー用
  const displayAvatarBox = avatar.map((item, index) => {
    return (
      <Box key={index}>
        <Avatar src={URL.createObjectURL(item)} />
      </Box>
    );
  });

  const avatarMap = avatar.map((item) => {
    return URL.createObjectURL(item);
  });

  const clickSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const authUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (userName) {
        const uid = authUser.user?.uid;
        const userData = {
          uid: uid,
          username: userName,
          email: authUser.user?.email,
          avatar: avatarMap,
        };
        db.collection("users").doc(uid).set(userData);
        // console.log(userData);
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
        w="100%"
        h="auto"
        pt={{ base: "40px", md: "90px" }}
        pb={{ base: "90px", md: "180px" }}
        backgroundColor="blue.900"
        color="white"
      >
        <Stack spacing="17px" align="center">
          <Box>
            <Heading size="xl">New Account</Heading>
          </Box>
          <Flex>
            <Stack spacing="1px">
              <FormLabel>
                <Input
                  display="none"
                  type="file"
                  accept="/image/*"
                  onChange={changeAvatar}
                />
                <Avatar size="md" display={avatar[0] ? "none" : "block"} />
                <Box>{displayAvatarBox}</Box>
              </FormLabel>

              <Box py="3px">Avatar</Box>
            </Stack>
          </Flex>

          <Box>
            <Box py="3px">HunterName</Box>
            <Input
              id="username"
              type="text"
              placeholder="HunterName"
              onChange={changeName}
              value={userName}
              bgColor="White"
              color="black"
              w={{ base: "270px", md: "370px" }}
            />
            <Box py="3px">E-mail</Box>
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              onChange={changeEmail}
              value={email}
              bgColor="White"
              color="black"
              w={{ base: "270px", md: "370px" }}
            />
            <Box py="3px">Password</Box>
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
            <Box>
              <Button
                type={"submit"}
                onClick={clickSubmit}
                bgColor="green.300"
                color="black"
                my="25px"
                w={{ base: "270px", md: "370px" }}
              >
                Submit
              </Button>
            </Box>

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
