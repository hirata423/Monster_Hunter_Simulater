import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
} from "@chakra-ui/react";

export const SelectMenue = () => {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="900">
                このアプリについて
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            ご覧いただきましてありがとうございます。
            <br />
            このアプリのメインは、シュミレーター機能です。
            <br />
            <Link
              href="https://www.capcom.co.jp/monsterhunter/rise/"
              isExternal
            >
              Nintendo Switch のモンスターハンターというゲームです。{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
            <br />
            追加機能として、投稿機能も付与しておりますが、挙動が整っていない箇所がございます。
            <br />
            ユーザー認証はFirebaseを使用してますが制作途中のため、セキュリティが緩くなっております。
            <br />
            機能の改善、コードの見直しを継続しております。
            <br />
            お忙しいところ恐縮ですがご査収のほど、よろしくお願いいたします。
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="900">
                アカウントをご用意しております
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            右上のメニューボタンよりログインをご選択ください。
            <br />
            テストユーザーA
            <br />
            e-mail：testaaa@gmail.com
            <br />
            password：testaaa
            <br />
            <br />
            <Box border="0.5px black solid "></Box>
            <br />
            テストユーザーB
            <br />
            e-mail：testbbb@gmail.com
            <br />
            password：testbbb
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="900">
                使用言語
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Next.js
            <br />
            Typescript
            <br />
            Chakra-ui (UIライブラリ)
            <br />
            Firebase　(現状セキュリティを緩めております)
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
