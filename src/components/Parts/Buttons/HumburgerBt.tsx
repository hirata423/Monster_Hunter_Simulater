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
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiIdCard, BiJoystick, BiMessageEdit } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";

export const HumburgerBt = () => {
  const router = useRouter();

  const goAccountPg = useCallback(() => router.push("/Top"), [router]);
  const goPostPg = useCallback(() => router.push("/Post"), [router]);
  const goSimulatorPg = useCallback(() => router.push("/Top"), [router]);
  const goLoginPg = useCallback(() => router.push("/Login"), [router]);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem onClick={goAccountPg}>
          <Flex align="center">
            <HStack>
              <Icon as={BiIdCard} /> <Box>アカウント</Box>
            </HStack>
          </Flex>
        </MenuItem>

        <MenuItem onClick={goPostPg}>
          <Flex align="center">
            <HStack>
              <Icon as={BiMessageEdit} />
              <Box> 投稿</Box>
            </HStack>
          </Flex>
        </MenuItem>

        <MenuItem onClick={goSimulatorPg}>
          <Flex align="center">
            <HStack>
              <Icon as={BiJoystick} /> <Box>シュミレーター</Box>
            </HStack>
          </Flex>
        </MenuItem>

        <MenuItem onClick={goLoginPg}>
          <Flex align="center">
            <HStack>
              <Icon as={RiLogoutCircleLine} /> <Box>ログアウト</Box>
            </HStack>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
