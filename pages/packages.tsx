import type { NextPage } from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import PageContainer from "../components/PageContainer";
import PageTitle from "components/PageTitle";
import PackageCard from "components/PackageCard";
import Footer from "components/Footer";

interface IPackages {
  title: string;
  priceTRY: number;
  priceUSD: number;
  priceEUR: number;
  description: string;
  image: string;
  _id: string;
  __v: number;
}

const Packages: NextPage = () => {
  const [packages, setPackages] = useState<IPackages[]>([]);

  useEffect(() => {
    axios
      .get<never, AxiosResponse<any>>("/api/packages")
      .then((res) => {
        setPackages(res.data.packages);
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Packages Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageTitle title="MJ PACKAGES" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pack) => (
            <PackageCard
            key={pack._id}
              packages={pack}
              packagesIds={[]}
              setPackagesIds={() => {}}
            />
          ))}
        </div>
        <Footer />
      </PageContainer>
    </>
  );
};

export default Packages;
