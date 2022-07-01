import { Box, Flex, HStack, Image, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { HeaderBar } from "src/components/Parts/Header/HeaderBar";

export const Top = () => {
  const router = useRouter();
  const goSimulatorPg = useCallback(() => router.push("/Simulator"), [router]);
  const goPostPg = useCallback(() => router.push("/Post"), [router]);

  return (
    <>
      <HeaderBar />
      <Box
        py={{ base: "13px", md: "20px", lg: "" }}
        px={{ base: "13px", md: "20px", lg: "" }}
        fontSize="25px"
        fontWeight="500"
        backgroundColor="gray.300"
        w="100%"
        minH="100vh"
      >
        <Flex justify="space-between" align="center" py="10px"></Flex>
        <Box
          fontSize={{ base: "17px", md: "25px" }}
          fontWeight="700"
          color="black"
        >
          Top
        </Box>

        <Box
          borderBottom="1px solid gray"
          mb={{ base: "13px", md: "20px", lg: "" }}
        ></Box>

        <Flex
          fontSize={{ base: "13px", md: "25px" }}
          fontWeight="900"
          justify="center"
          my={{ base: "20px", md: "50px" }}
          onClick={goSimulatorPg}
          _hover={{ color: "blue", cursor: "pointer" }}
        >
          ＜防具・スキルシュミレーター＞
        </Flex>

        <Flex align="center" justify="center" mt="30px">
          <HStack spacing="30px">
            <Box w={{ base: "300px", md: "550px" }}>
              {/* eslint-disable-next-line */}
              <Image src="/images/siumlation.jpg" />
            </Box>
            {/* //横表示 */}
            <Box
              display={{ base: "none", lg: "block" }}
              w={{ base: "300px", md: "550px" }}
              fontSize={{ base: "11px", md: "20px" }}
              fontWeight="800"
            >
              <Stack>
                <Box>１、検索バーに入力（防具名・モンスター名・スキル名）</Box>
                <Box>２、装着ボタンで登録→着脱ボタンで解除</Box>
                <Box>３、装着済リストに各項目の合計値が表示</Box>
                <Box>４、スキル検索でスキル詳細を検索可能</Box>
              </Stack>
            </Box>
          </HStack>
        </Flex>

        {/* //縦表示 */}
        <Flex justify="center" align="center" mt="10px">
          <Box
            display={{ base: "block", lg: "none" }}
            w={{ base: "300px", md: "550px" }}
            fontSize={{ base: "11px", md: "20px" }}
            fontWeight="800"
          >
            <Stack>
              <Box>１、検索バーに入力（防具名・モンスター名・スキル名）</Box>
              <Box>２、装着ボタンで登録→着脱ボタンで解除</Box>
              <Box>３、装着済リストに各項目の合計値が表示</Box>
              <Box>４、スキル検索でスキル詳細を検索可能</Box>
            </Stack>
          </Box>
        </Flex>

        <Flex
          fontSize={{ base: "13px", md: "25px" }}
          fontWeight="900"
          justify="center"
          mt={{ base: "20px", md: "80px" }}
          mb={{ base: "10px", md: "50px" }}
          onClick={goPostPg}
          _hover={{ color: "blue", cursor: "pointer" }}
        >
          ＜投稿ツール＞
        </Flex>

        <Flex align="center" justify="center" mt="30px">
          <HStack>
            {/* //横表示 */}
            <Box
              display={{ base: "none", lg: "block" }}
              w={{ base: "300px", md: "550px" }}
              fontSize={{ base: "11px", md: "20px" }}
              fontWeight="800"
            >
              <Stack>
                <Box>１、投稿ボタンから投稿を作成して登録</Box>
                <Box>２、作成した投稿が一蘭に追加</Box>
                <Box>３、「コメント」「いいね！」が可能</Box>
              </Stack>
            </Box>
            <Box w={{ base: "300px", md: "550px" }}>
              {/* eslint-disable-next-line */}
              <Image
                src="/images/post2.jpg"
                h={{ base: "165px", md: "330px" }}
              />
            </Box>
          </HStack>
        </Flex>

        {/* //縦表示 */}
        <Flex justify="center" align="center" mt="10px">
          <Box
            display={{ base: "block", lg: "none" }}
            w={{ base: "300px", md: "550px" }}
            fontSize={{ base: "11px", md: "20px" }}
            fontWeight="800"
          >
            <Stack>
              <Box>１、投稿ボタンから投稿を作成して登録</Box>
              <Box>２、作成した投稿が一蘭に追加</Box>
              <Box>３、「コメント」「いいね！」が可能</Box>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Top;
