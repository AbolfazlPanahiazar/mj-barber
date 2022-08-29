import type { NextPage } from "next";
import Head from "next/head";

import PageContainer from "../components/PageContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <div className="bg-orange-600">a</div>
      </PageContainer>
    </>
  );
};

export default Home;
