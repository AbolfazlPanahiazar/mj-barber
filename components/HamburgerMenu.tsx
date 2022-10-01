import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

interface IHamburgerMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const HamburgerMenu: FC<IHamburgerMenuProps> = ({ isOpen, closeMenu }) => {
  const { asPath } = useRouter();

  return (
    <div
      className={`w-full max-w-2xl h-screen fixed top-0 right-0 ${
        isOpen ? "" : "transform translate-x-full"
      } bg-F2F5F7 shadow-2xl transition-all ease-in-out duration-200`}
    >
      <div className="flex justify-end p-5">
        <GrClose size={15} color="#191C62" onClick={closeMenu} />
      </div>
      <div className="w-full flex justify-center items-center mt-3">
        <img src="mj.png" alt="mj barber logo" className="h-14" />
      </div>
      <div className="w-full pt-5 pr-5 flex flex-col items-end">
        <Link onClick={closeMenu} href="/">
          <span
            className={`${
              asPath === "/" ? "text-B95F1E" : "text-191C62"
            } text-md font-bold mt-3 cursor-pointer hover:underline`}
          >
            HOME
          </span>
        </Link>
        <Link onClick={closeMenu} href="/packages">
          <span
            className={`${
              asPath === "/packages" ? "text-B95F1E" : "text-191C62"
            } text-md font-bold mt-3 cursor-pointer hover:underline`}
          >
            PACKAGES
          </span>
        </Link>
        <Link onClick={closeMenu} href="/book">
          <span
            className={`${
              asPath === "/book" ? "text-B95F1E" : "text-191C62"
            } text-md font-bold mt-3 cursor-pointer hover:underline`}
          >
            BOOK NOW
          </span>
        </Link>
        <Link onClick={closeMenu} href="/gallary">
          <span
            className={`${
              asPath === "/gallary" ? "text-B95F1E" : "text-191C62"
            } text-md font-bold mt-3 cursor-pointer hover:underline`}
          >
            GALLARY
          </span>
        </Link>
        <Link onClick={closeMenu} href="/contact">
          <span
            className={`${
              asPath === "/contact" ? "text-B95F1E" : "text-191C62"
            } text-md font-bold mt-3 cursor-pointer hover:underline`}
          >
            CONTACT
          </span>
        </Link>
        <a
          className="mt-3"
          target="_blank"
          href="https://www.google.com/maps/search/?api=1&query=41.02949268093128,28.982238165045"
        >
          <span
            className={
              "text-191C62 text-md font-bold cursor-pointer hover:underline"
            }
          >
            LOCATION
          </span>
        </a>
      </div>
      <div className="w-full flex justify-center py-5">
        <a
          target="_blank"
          href="tel:+905411188894"
          className="flex items-center"
        >
          <IoMdCall size={25} color="#B95F1E" className="mr-1" />
          <span className="text-B95F1E text-xs">+90 541 118 88 94</span>
        </a>
      </div>
      <div className="w-full flex justify-center py-5">
        <a target="_blank" href="https://instagram.com/hairsalon_mj">
          <AiFillInstagram size={25} color="#B95F1E" className="mr-1" />
        </a>
        <a target="_blank" href="https://wa.me/+905323977073">
          <IoLogoWhatsapp size={25} color="#B95F1E" />
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
