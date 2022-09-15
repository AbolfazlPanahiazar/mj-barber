import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import PackageCard from "./PackageCard";

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

const HomePackagesSlider: FC = () => {
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
    <div className="w-full mt-12 lg:mt-20">
      <div className="w-full px-10 lg:px-28 flex items-center justify-center lg:justify-between">
        <span className="text-md lg:text-2xl font-bold text-B95F1E">
          Packages
        </span>
        <div className="hidden lg:block">
          <Link href="/packages">
            <span className="font-bold text-sm cursor-pointer hover:underline text-191C62">
              SEE All
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full px-10 lg:px-28 mt-3 lg:mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pack, index) =>
            index < 3 ? (
              <PackageCard
                packages={pack}
                packagesIds={[]}
                setPackagesIds={() => {}}
              />
            ) : null
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mt-6 lg:hidden">
        <Link href="/packages">
          <span className="font-bold text-md cursor-pointer hover:underline text-191C62">
            SEE All Packages
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomePackagesSlider;
