import type { NextPage } from "next";
import Head from "next/head";

import PageContainer from "../components/PageContainer";
import HomeBanner from "components/HomeBanner";
import HomePackagesSlider from "components/HomePackagesSlider";
import HomeAboutUs from "components/HomeAboutUs";
import Footer from "components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HomeBanner />
        <HomePackagesSlider />
        <HomeAboutUs />
        <Footer />
      </PageContainer>
    </>
  );
};

export default Home;
