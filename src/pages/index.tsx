import Head from "next/head";

// contexts
import { useSession } from "../contexts/useSession";

// Components
import { Layout } from "../components/templates/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dashboard CSIS</title>
      </Head>
    </Layout>
  );
}
