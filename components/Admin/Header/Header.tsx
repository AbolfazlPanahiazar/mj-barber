import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header: FC = () => {
  const { push } = useRouter();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="/mj.png" alt="mj barber logo" className="h-9" />
      </div>

      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <Link href="/admin/package" passHref>
            <a className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
              Packages
            </a>
          </Link>
          <Link href="/admin/barbers" passHref>
            <a className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
              Barbers
            </a>
          </Link>
          <Link href="/admin/orders" passHref>
            <a className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white">
              Orders
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
