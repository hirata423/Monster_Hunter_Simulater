import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { BukiSDateProvider } from "../src/provider/BukisDateProvider";
import { HelmDateProvider } from "../src/provider/HelmDateProvider";
import { ArmDateProvider } from "../src/provider/ArmDateProvider";
import { TotalDateProvider } from "../src/provider/TotalDateProvider";
import { MeilDateProvider } from "../src/provider/MeilDateProvider";
import { KoilDateProvider } from "../src/provider/KoilDateProvider";
import { LeginsDateProvider } from "../src/provider/LeginsDateProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TotalDateProvider>
        <BukiSDateProvider>
          <HelmDateProvider>
            <ArmDateProvider>
              <MeilDateProvider>
                <KoilDateProvider>
                  <LeginsDateProvider>
                    <Component {...pageProps} />
                  </LeginsDateProvider>
                </KoilDateProvider>
              </MeilDateProvider>
            </ArmDateProvider>
          </HelmDateProvider>
        </BukiSDateProvider>
      </TotalDateProvider>
    </ChakraProvider>
  );
}

export default MyApp;
