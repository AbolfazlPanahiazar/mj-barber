import PackageCard from "components/PackageCard";
import { FC } from "react";

const BookTimeForm: FC = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="col-span-1 flex flex-col">
        <span className="text-B95F1E font-semibold lg:text-3xl">FULL NAME</span>
        <input
          type="text"
          className="w-full h-11 px-3 text-l font-bold mt-2 bg-F2F5F7 text-191C62 placeholder:text-{#cccccc} border border-191C62"
          placeholder="Enter your full name"
        />
      </div>
      <div className="col-span-1 flex flex-col">
        <span className="text-B95F1E font-semibold lg:text-3xl">
          PHONE NUMBER
        </span>
        <input
          type="text"
          className="w-full h-11 px-3 text-l font-bold mt-2 bg-F2F5F7 text-191C62 placeholder:text-{#cccccc} border border-191C62"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="col-span-1 flex flex-col">
        <span className="text-B95F1E font-semibold lg:text-3xl">EMAIL</span>
        <input
          type="text"
          className="w-full h-11 px-3 text-l font-bold mt-2 bg-F2F5F7 text-191C62 placeholder:text-{#cccccc} border border-191C62"
          placeholder="Enter your email"
        />
      </div>
      <div className="col-span-1 flex flex-col">
        <span className="text-B95F1E font-semibold lg:text-3xl">BARBER</span>
        <select className="w-full h-11 px-3 text-l font-bold mt-2 bg-F2F5F7 text-191C62 placeholder:text-{#cccccc} border border-191C62">
          <option value="barber1">Barber A</option>
          <option value="barber2">Barber B</option>
        </select>
      </div>
      <div className="col-span-1 flex flex-col">
        <span className="text-B95F1E font-semibold lg:text-3xl">
          DATE & TIME
        </span>
        <input
          className="w-full h-11 px-3 text-l font-bold mt-2 bg-F2F5F7 text-191C62 placeholder:text-{#cccccc} border border-191C62"
          type="datetime-local"
          name="datatime"
          id="datetime"
        />
      </div>
      <div className="col-span-1 flex flex-col">
        <span className="text-B95F1E font-semibold lg:text-3xl">ADDRESS</span>
        <textarea
          className="w-full h-28 px-3 text-l font-bold mt-2 bg-F2F5F7 text-191C62 placeholder:text-{#cccccc} border border-191C62"
          name="address"
          id="address"
          cols={5}
          placeholder="Enter you address"
        ></textarea>
      </div>
      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 2, 2, 2, 2, 2, 2, 2, 2].map((i) => (
          <PackageCard selecable />
        ))}
      </div>
    </div>
  );
};

export default BookTimeForm;
