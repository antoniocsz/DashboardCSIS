import {
  Flex,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Th,
  Thead,
  Tr,
  VStack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";

// contexts
// import { useSession } from "../contexts/useSession";

// Components
import { Layout } from "../components/templates/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dashboard CSIS</title>
      </Head>

      <Flex>
        <VStack>
          <HStack></HStack>

          <HStack>
            <TableContainer bg="#fff">
              <HStack>
                <Text p="3">Últimas ocorrências</Text>
              </HStack>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Identificador</Th>
                    <Th>Prioridade</Th>
                    <Th>Descrição</Th>
                    <Th>Localidade</Th>
                    <Th>Orgão</Th>
                  </Tr>
                </Thead>
              </Table>
            </TableContainer>
          </HStack>
        </VStack>
      </Flex>
    </Layout>
  );
}
