import type { NextPage } from "next";
import Head from "next/head";

import React, { useState } from "react";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-screen h-screen   flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
      ></div>
    </>
  );
};

export default Home;
