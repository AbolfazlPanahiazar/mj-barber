import type { NextPage } from "next";
import Head from "next/head";
import PhotoAlbum from "react-photo-album";

import PageContainer from "../components/PageContainer";
import PageTitle from "components/PageTitle";
import Footer from "components/Footer";

const photos1 = [
  {
    src: "g1.jpg",
    width: 288,
    height: 432,
  },
  {
    src: "g2.jpg",
    width: 600,
    height: 432,
  },
  {
    src: "g3.jpg",
    width: 288,
    height: 432,
  },
];

const photos2 = [
  {
    src: "g4.jpg",
    width: 288,
    height: 432,
  },
  {
    src: "g5.jpg",
    width: 288,
    height: 432,
  },
  {
    src: "g6.jpg",
    width: 600,
    height: 432,
  },
];

const photos3 = [
  {
    src: "g7.jpg",
    width: 288,
    height: 432,
  },
  {
    src: "g9.jpg",
    width: 600,
    height: 432,
  },
  {
    src: "g10.jpg",
    width: 288,
    height: 432,
  },
];

const photos4 = [
  {
    src: "g11.jpg",
    width: 288,
    height: 250,
  },
  {
    src: "g12.jpg",
    width: 288,
    height: 250,
  },
  {
    src: "g13.jpg",
    width: 600,
    height: 250,
  },
];

const Gallary: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gallary Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageTitle title="MJ GALLARY" />
        <div className="w-full px-3">
          <PhotoAlbum layout="rows" photos={photos1} />
          <div className="w-full mt-4"></div>
          <PhotoAlbum layout="rows" photos={photos2} />
          <div className="w-full mt-4"></div>
          <PhotoAlbum layout="rows" photos={photos3} />
          <div className="w-full mt-4"></div>
          <PhotoAlbum layout="rows" photos={photos4} />
        </div>
        <Footer />
      </PageContainer>
    </>
  );
};

export default Gallary;
