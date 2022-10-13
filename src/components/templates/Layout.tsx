import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

// Contexts
import { useSession } from "../../contexts/useSession";
import { Loading } from "../atoms/Loading";

type ILayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: ILayoutProps) {
  const { isInitialized } = useSession();

  if (isInitialized) {
    return (
      <Flex w="100vw" h="100vh" bg="#000" align="center" justify="center">
        <Loading />
      </Flex>
    );
  }

  return (
    <Flex w="100vw" h="100vh" bg="#000">
      {children}
    </Flex>
  );
}
