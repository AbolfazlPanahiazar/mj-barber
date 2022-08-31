import { FC } from "react";

const HomeBanner: FC = () => {
  return (
    <div className="w-full bg-B95F1E">
      <div className="w-full lg:hidden">
        <img className="w-full" src="banner1.jpg" alt="mj barber" />
        <img className="w-full" src="banner2.jpg" alt="mj barber" />
      </div>
      <div
        className="w-full bg-no-repeat bg-cover hidden lg:flex justify-center"
        style={{ backgroundImage: "url(banner2.jpg)" }}
      >
        <img className="w-2/6 py-40" src="banner1.jpg" alt="mj barber" />
      </div>
    </div>
  );
};

export default HomeBanner;
