import type { NextPage } from "next";
import Head from "next/head";

import PageContainer from "../components/PageContainer";
import PageTitle from "components/PageTitle";
import PackageCard from "components/PackageCard";
import Footer from "components/Footer";

const Packages: NextPage = () => {
  return (
    <>
      <Head>
        <title>Packages Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageTitle title="MJ PACKAGES" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <PackageCard />
          ))}
        </div>
        <Footer />
      </PageContainer>
    </>
  );
};

export default Packages;
