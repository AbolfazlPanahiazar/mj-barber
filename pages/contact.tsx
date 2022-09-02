import type { NextPage } from "next";
import Head from "next/head";

import PageContainer from "../components/PageContainer";
import Footer from "components/Footer";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Footer />
      </PageContainer>
    </>
  );
};

export default Contact;
