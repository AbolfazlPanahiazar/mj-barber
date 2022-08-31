import type { NextPage } from "next";
import Head from "next/head";

import PageContainer from "../components/PageContainer";
import HomeBanner from "components/HomeBanner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HomeBanner />
      </PageContainer>
    </>
  );
};

export default Home;
