import { FC, useState } from "react";
import Link from "next/link";

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

interface IPackageCardProps {
  selecable?: boolean;
  packages: IPackages;
  setPackagesIds: (id: string[]) => void;
  packagesIds: string[];
}

const PackageCard: FC<IPackageCardProps> = ({
  selecable,
  packages,
  setPackagesIds,
  packagesIds,
}) => {
  const [isAdded, setIsAdded] = useState<Boolean>(false);
  const addToPackageIds = (id: string) => {
    const copyPackage = [...packagesIds];
    copyPackage.push(id);
    setPackagesIds(copyPackage);
  };
  const removeFromPackageIds = (id: string) => {
    const copyPackage = [...packagesIds.filter((packId) => packId !== id)];
    setPackagesIds(copyPackage);
  };
  return (
    <div className="w-full h-full bg-E7EAEE flex flex-col">
      <img className="w-full" src={packages?.image} alt="package name" />
      <div className="w-full flex-grow bg-E7EAEE p-7 flex flex-col items-center">
        <span className="font-bold text-center text-2xl text-191C62">
          {packages?.title}
        </span>
        <span className="text-center text-md lg:text-lg mt-2 text-191C62">
          {packages?.description}
        </span>
        <div className="w-full mt-4 text-B95F1E flex justify-center">
          <span className="text-xl px-2 font-semibold">
            {packages?.priceEUR} €
          </span>
          <span className="text-xl px-2 font-semibold border-x">
            {packages?.priceTRY} ₺
          </span>
          <span className="text-xl px-2 font-semibold">
            {packages?.priceUSD} ${" "}
          </span>
        </div>
        <div className="w-full flex justify-center mt-2">
          {selecable ? (
            <>
              {isAdded ? (
                <button
                  onClick={() => {
                    removeFromPackageIds(packages?._id);
                    setIsAdded(false);
                  }}
                  className="border-2 border-191C62 text-191C62 font-bold text-lg px-4 mt-1 py-2 hover:text-E7EAEE hover:bg-191C62 transition-all ease-out duration-200"
                >
                  REMOVE
                </button>
              ) : (
                <button
                  onClick={() => {
                    addToPackageIds(packages?._id);
                    setIsAdded(true);
                  }}
                  className="border-2 border-B95F1E text-B95F1E font-bold text-lg px-4 mt-1 py-2 hover:text-E7EAEE hover:bg-B95F1E transition-all ease-out duration-200"
                >
                  ADD
                </button>
              )}
            </>
          ) : (
            <Link href="/book">
              <button className="border-2 border-B95F1E text-B95F1E font-bold text-lg px-4 mt-1 py-2 hover:text-E7EAEE hover:bg-B95F1E transition-all ease-out duration-200">
                BOOK NOW
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
