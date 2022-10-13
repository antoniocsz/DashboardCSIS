import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

// thems
import { theme } from "../theme";

// Contexts
import { SessionProvider } from "../contexts/useSession";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}
