import { FC } from "react";
import { useRouter } from "next/router";

const HomeAboutUs: FC = () => {
  const { push } = useRouter();

  return (
    <div className="w-full mt-32 lg:mt-48 px-10 lg:px-28">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="col-span-1 lg:col-span-2 flex flex-col lg:flex-row-reverse">
          <img
            src="about1.jpg"
            alt="about mj barber shop"
            className="max-w-452"
          />
          <div className="flex flex-col justify-end flex-grow">
            <img
              src="aboutVector.png"
              alt="about mj barber shop"
              className="max-w-219"
            />
            <span className="text-sm lg:text-2xl text-B95F1E font-semibold mt-5">
              ABOUT MJ BARBER SHOP
            </span>
          </div>
        </div>
        <div className="col-span-1 row-span-1 lg:row-span-2">
          <img src="about2.jpg" alt="about mj barber shop" />
        </div>
        <div className="col-span-2">
          <p className="text-sm lg:text-lg text-191C62 text-justify">
            We provide various hair related services, at the comfort of your
            home or hotel. A wide range of beauty services are also provided by
            professionals, so that you can look fresh and crisp as you venture
            into the night. Give our services a try, you'll love it. That's a
            promise.
          </p>
          <div className="w-full flex items-center mt-6">
            <button
              onClick={() => push("/gallary")}
              className="flex-grow lg:flex-grow-0 lg:px-3 font-bold h-12 border-2 border-191C62 text-191C62 hover:text-E7EAEE hover:bg-191C62 transition-all ease-in-out duration-200"
            >
              GO TO GALLARY
            </button>
            <button
              onClick={() => push("/book")}
              className="flex-grow lg:flex-grow-0 lg:px-3 ml-4 font-bold h-12 border-2 border-B95F1E bg-B95F1E text-E7EAEE hover:text-B95F1E hover:bg-E7EAEE transition-all ease-in-out duration-200"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
