import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { TotalDateProvider } from "../src/provider/TotalDateProvider";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <TotalDateProvider>
        <Component {...pageProps} />
      </TotalDateProvider>
    </ChakraProvider>
  );
};
