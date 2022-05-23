import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { TotalDateProvider } from "../provider/TotalDateProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TotalDateProvider>
        <Component {...pageProps} />
      </TotalDateProvider>
    </ChakraProvider>
  );
}

export default MyApp;
