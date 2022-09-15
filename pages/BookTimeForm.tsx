import PackageCard from "components/PackageCard";
import React, { FC, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

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

interface IBarbers {
  _id: string;
  fullname: string;
  __V: number;
}

const BookTimeForm: FC = () => {
  const [packages, setPackages] = useState<IPackages[]>([]);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [barbers, setBarbers] = useState<IBarbers[]>([]);
  const [date, setDate] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [barberId, setBarberId] = useState<string>("");
  const [packagesIds, setPackagesIds] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get<never, AxiosResponse<any>>("/api/barbers")
      .then((res) => {
        setBarbers(res.data.barbers);
        setBarberId(res.data.barbers[0]._id);
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`);
      });

    axios
      .get<never, AxiosResponse<any>>("/api/packages")
      .then((res) => {
        setPackages(res.data.packages);
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`);
      });
  }, []);

  const orderHandler = () => {
    axios
      .post<never, AxiosResponse<any>>("/api/orders", {
        fullname: fullName,
        phoneNumber: phoneNumber,
        barberId: barberId,
        datetime: date,
        address: address,
        packageIds: packagesIds,
      })
      .then((res) => {
        toast.success(`${res.data.message}`);
      })
      .catch((error) => {
        toast.error(`${error.response.data.message}`);
      });
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="col-span-1 flex flex-col">
        <span className="text-B95F1E font-semibold lg:text-3xl">FULL NAME</span>
        <input
          type="text"
          className="w-full h-11 px-3 text-l font-bold mt-2 bg-F2F5F7 text-191C62 placeholder:text-{#cccccc} border border-191C62"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
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
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="col-span-1 flex flex-col">
        <span className="text-B95F1E font-semibold lg:text-3xl">EMAIL</span>
        <input
          type="text"
          className="w-full h-11 px-3 text-l font-bold mt-2 bg-F2F5F7 text-191C62 placeholder:text-{#cccccc} border border-191C62"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="col-span-1 flex flex-col">
        <span className="text-B95F1E font-semibold lg:text-3xl">BARBER</span>
        <select
          value={barberId}
          onChange={(e) => setBarberId(e.target.value)}
          className="w-full h-11 px-3 text-l font-bold mt-2 bg-F2F5F7 text-191C62 placeholder:text-{#cccccc} border border-191C62"
        >
          {barbers.map((bar) => {
            return <option key={bar._id} value={bar._id}>{bar.fullname}</option>;
          })}
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
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>
      <div className="col-span-1 flex flex-col">
        <button
          onClick={orderHandler}
          className="border-2 border-B95F1E text-B95F1E font-bold text-lg px-4 mt-1 py-2 hover:text-E7EAEE hover:bg-B95F1E transition-all ease-out duration-200"
        >
          Submit
        </button>
      </div>
      <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {packages.map((pack) => (
          <PackageCard
          key={pack._id}
            selecable
            packages={pack}
            setPackagesIds={setPackagesIds}
            packagesIds={packagesIds}
          />
        ))}
      </div>
    </div>
  );
};

export default BookTimeForm;
