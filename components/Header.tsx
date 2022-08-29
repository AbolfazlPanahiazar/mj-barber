import { FC } from "react";
import { FaBars } from "react-icons/fa";

const Header: FC = () => {
  return (
    <header className="w-full h-11 lg:h-20 bg-F2F5F7 px-5 lg:px-14 flex items-center">
      <div className="w-full h-full flex justify-between items-center">
        <img src="mj.png" alt="mj barber logo" className="h-9" />
        <FaBars size={20} />
      </div>
    </header>
  );
};

export default Header;
