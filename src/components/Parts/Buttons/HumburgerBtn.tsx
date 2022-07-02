import { HamburgerIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiIdCard, BiJoystick, BiMessageEdit } from "react-icons/bi";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { AiOutlineDesktop } from "react-icons/ai";

export const HumburgerBtn = () => {
  const router = useRouter();

  const goTopPg = useCallback(() => router.push("/Top"), [router]);
  const goPostPg = useCallback(() => router.push("/Post"), [router]);
  const goSimulatorPg = useCallback(() => router.push("/Simulator"), [router]);
  const goAccountPg = useCallback(() => router.push("/Account"), [router]);
  const login = useCallback(() => router.push("/Login"), [router]);
  const logauto = useCallback(() => router.push("/Login"), [router]);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        border="none"
        fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
      />

      <MenuList>
        <MenuItem onClick={goTopPg}>
          <Flex align="center" color="black">
            <HStack>
              <Icon as={AiOutlineDesktop} /> <Box>トップ</Box>
            </HStack>
          </Flex>
        </MenuItem>

        <MenuItem onClick={goPostPg}>
          <Flex align="center" color="black">
            <HStack>
              <Icon as={BiMessageEdit} />
              <Box> 投稿</Box>
            </HStack>
          </Flex>
        </MenuItem>

        <MenuItem onClick={goSimulatorPg}>
          <Flex align="center" color="black">
            <HStack>
              <Icon as={BiJoystick} /> <Box>シュミレーター</Box>
            </HStack>
          </Flex>
        </MenuItem>

        <MenuItem onClick={goAccountPg}>
          <Flex align="center" color="black">
            <HStack>
              <Icon as={BiIdCard} /> <Box>アカウント</Box>
            </HStack>
          </Flex>
        </MenuItem>

        <MenuItem onClick={login}>
          <Flex align="center" color="black">
            <HStack>
              <Icon as={RiLoginCircleLine} /> <Box>ログイン</Box>
            </HStack>
          </Flex>
        </MenuItem>

        <MenuItem onClick={logauto}>
          <Flex align="center" color="black">
            <HStack>
              <Icon as={RiLogoutCircleLine} /> <Box>ログアウト</Box>
            </HStack>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
