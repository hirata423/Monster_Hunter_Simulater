import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { BukiSDateProvider } from "../src/provider/BukisDateProvider";
import { HelmDateProvider } from "../src/provider/HelmDateProvider";
import { ArmDateProvider } from "../src/provider/ArmDateProvider";
import { TotalDateProvider } from "../src/provider/TotalDateProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TotalDateProvider>
        <BukiSDateProvider>
          <HelmDateProvider>
            <ArmDateProvider>
              <Component {...pageProps} />
            </ArmDateProvider>
          </HelmDateProvider>
        </BukiSDateProvider>
      </TotalDateProvider>
    </ChakraProvider>
  );
}

export default MyApp;
