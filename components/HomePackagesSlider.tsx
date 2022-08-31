import { FC } from "react";
import Link from "next/link";

import PackageCard from "./PackageCard";

const HomePackagesSlider: FC = () => {
  return (
    <div className="w-full mt-12 lg:mt-20">
      <div className="w-full px-10 lg:px-28 flex items-center justify-center lg:justify-between">
        <span className="text-md lg:text-2xl font-bold text-B95F1E">
          Packages
        </span>
        <div className="hidden lg:block">
          <Link href="/packages">
            <span className="font-bold text-sm cursor-pointer hover:underline">
              SEE All
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full px-10 lg:px-28 mt-3 lg:mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PackageCard />
          <PackageCard />
          <PackageCard />
        </div>
      </div>
    </div>
  );
};

export default HomePackagesSlider;
