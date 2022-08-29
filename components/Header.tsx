import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Header: FC = () => {
  const { asPath } = useRouter();

  const openHamburgerMenu = () => {};

  const linkTextHandler = (link: string) => {
    console.log(asPath);
    console.log(link);
    if (asPath === link) {
      return "text-B95F1E";
    } else {
      return "text-191C62";
    }
  };

  return (
    <header className="w-full h-11 lg:h-20 bg-F2F5F7 px-5 lg:px-14 flex items-center">
      <div className="w-full h-full flex lg:hidden justify-between items-center">
        <img src="mj.png" alt="mj barber logo" className="h-9" />
        <FaBars size={20} onClick={openHamburgerMenu} />
      </div>
      <div className="w-full h-full hidden lg:flex items-center">
        <div className="h-full flex items-center">
          <a target="_blank" href="https://instagram.com/hairsalon_mj">
            <AiFillInstagram size={25} color="#B95F1E" className="mr-1" />
          </a>
          <a target="_blank" href="https://wa.me/+905323977073">
            <IoLogoWhatsapp size={25} color="#B95F1E" />
          </a>
        </div>
        <div className="flex-grow h-full flex justify-evenly items-center">
          <Link href="/">
            <span
              className={`${
                asPath === "/" ? "text-B95F1E" : "text-191C62"
              } text-sm font-bold cursor-pointer hover:underline`}
            >
              HOME
            </span>
          </Link>
          <Link href="/packages">
            <span
              className={`${
                asPath === "/packages" ? "text-B95F1E" : "text-191C62"
              } text-sm font-bold cursor-pointer hover:underline`}
            >
              PACKAGES
            </span>
          </Link>
          <Link href="/book">
            <span
              className={`${
                asPath === "/book" ? "text-B95F1E" : "text-191C62"
              } text-sm font-bold cursor-pointer hover:underline`}
            >
              BOOK NOW
            </span>
          </Link>
        </div>
        <div className="h-full flex justify-center items-center">
          <img src="mj.png" alt="mj barber logo" className="h-14" />
        </div>
        <div className="flex-grow h-full flex justify-evenly items-center">
          <Link href="/gallary">
            <span
              className={`${
                asPath === "/gallary" ? "text-B95F1E" : "text-191C62"
              } text-sm font-bold cursor-pointer hover:underline`}
            >
              GALLARY
            </span>
          </Link>
          <Link href="/contact">
            <span
              className={`${
                asPath === "/contact" ? "text-B95F1E" : "text-191C62"
              } text-sm font-bold cursor-pointer hover:underline`}
            >
              CONTACT
            </span>
          </Link>
          <a
            target="_blank"
            href="https://www.google.com/maps/search/?api=1&query=41.02949268093128,28.982238165045"
          >
            <span
              className={
                "text-191C62 text-sm font-bold cursor-pointer hover:underline"
              }
            >
              LOCATION
            </span>
          </a>
        </div>
        <div className="h-full flex items-center">
          <a
            target="_blank"
            href="tel:+905323977073"
            className="flex items-center"
          >
            <AiFillInstagram size={25} color="#B95F1E" className="mr-1" />
            <span className="text-B95F1E text-xs">+90 532 397 70 73</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
