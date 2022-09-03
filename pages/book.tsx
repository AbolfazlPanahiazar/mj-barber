import type { NextPage } from "next";
import Head from "next/head";

import PageContainer from "../components/PageContainer";
import PageTitle from "components/PageTitle";
import BookTimeForm from "./BookTimeForm";
import Footer from "components/Footer";

const Book: NextPage = () => {
  return (
    <>
      <Head>
        <title>Book Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageTitle title="BOOK A TIME" />
        <BookTimeForm />
        <Footer />
      </PageContainer>
    </>
  );
};

export default Book;
