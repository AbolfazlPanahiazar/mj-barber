import { FC } from "react";

interface IPackageCardProps {
  selecable?: boolean;
}

const PackageCard: FC<IPackageCardProps> = ({ selecable }) => {
  return (
    <div className="w-full">
      <img className="w-full" src="packageSample.jpg" alt="package name" />
      <div className="w-full flex-grow bg-E7EAEE p-7 flex flex-col items-center">
        <span className="font-bold text-2xl">HEAd</span>
        <span className="text-center text-md lg:text-lg mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do
        </span>
        <div className="w-full mt-4 text-B95F1E flex justify-center">
          <span className="text-xl px-2 font-semibold">12$</span>
          <span className="text-xl px-2 font-semibold border-x">12$</span>
          <span className="text-xl px-2 font-semibold">12$</span>
        </div>
        <div className="w-full flex justify-center mt-2">
          {selecable ? (
            <>
              {false ? (
                <button className="border-2 border-191C62 text-191C62 font-bold text-lg px-4 mt-1 py-2 hover:text-E7EAEE hover:bg-191C62 transition-all ease-out duration-200">
                  REMOVE
                </button>
              ) : (
                <button className="border-2 border-B95F1E text-B95F1E font-bold text-lg px-4 mt-1 py-2 hover:text-E7EAEE hover:bg-B95F1E transition-all ease-out duration-200">
                  ADD
                </button>
              )}
            </>
          ) : (
            <button className="border-2 border-B95F1E text-B95F1E font-bold text-lg px-4 mt-1 py-2 hover:text-E7EAEE hover:bg-B95F1E transition-all ease-out duration-200">
              BOOK NOW
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
