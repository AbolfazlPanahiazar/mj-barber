import type { NextPage } from "next";
import Head from "next/head";

import PageContainer from "../components/PageContainer";

const Gallary: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gallary Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <div className="bg-orange-600">a</div>
      </PageContainer>
    </>
  );
};

export default Gallary;
