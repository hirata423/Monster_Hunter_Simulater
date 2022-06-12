import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { TotalDataProvider } from "../provider/TotalDataProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TotalDataProvider>
        <Component {...pageProps} />
      </TotalDataProvider>
    </ChakraProvider>
  );
}

export default MyApp;
