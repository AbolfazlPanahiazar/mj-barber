import type { NextPage } from "next";
import Head from "next/head";

import React, { useState, useEffect } from "react";

import Header from "components/Admin/Header/Header";
import { getPackages, postPackage } from "api";

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

const Package: NextPage = () => {
  const [isCreatePackageOpen, setIsCreatePackageOpen] =
    useState<Boolean>(false);
  const [isEditPackageOpen, setIsEditPackageOpen] = useState<Boolean>(false);
  const [packages, setPackages] = useState<IPackages[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [priceEUR, setPriceEUR] = useState<number>(0);
  const [priceUSD, setPriceUSD] = useState<number>(0);
  const [priceTRY, setPriceTRY] = useState<number>(0);

  useEffect(() => {
    getPackages()
      .then((res) => {
        setPackages(res.data.packages);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("packages", packages);

  const createPackageHandler = () => {
    postPackage({
      title: title,
      priceTRY: priceTRY,
      priceUSD: priceUSD,
      priceEUR: priceEUR,
      description: description,
      image: imageUrl,
    })
      .then((res) => console.log("res", res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>Admin Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex flex-col">
        <div className="flex space-x-2 justify-end mx-10">
          <button
            type="button"
            onClick={() => setIsCreatePackageOpen(true)}
            className="inline-block px-6 py-2.5 bg-E7EAEE text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-F2F5F7 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Create Package
          </button>
        </div>

        {isCreatePackageOpen ? (
          <div className="h-screen bg-indigo-100 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
              <form
                onSubmit={createPackageHandler}
                className="bg-white p-10 rounded-lg shadow-lg min-w-full"
              >
                <h2 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
                  Create Package
                </h2>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Title
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Title"
                  />
                </div>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                    placeholder="Your description..."
                  />
                </div>
                <div className="flex items-center justify-around">
                  <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md">
                      priceTRY
                    </label>
                    <input
                      value={priceTRY}
                      onChange={(e) => setPriceTRY(+e.target.value)}
                      className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                    />
                  </div>
                  <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md">
                      priceUSD
                    </label>
                    <input
                      value={priceUSD}
                      onChange={(e) => setPriceUSD(+e.target.value)}
                      className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                    />
                  </div>
                  <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md">
                      priceEUR
                    </label>
                    <input
                      value={priceEUR}
                      onChange={(e) => setPriceEUR(+e.target.value)}
                      className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Image
                  </label>
                  <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center justify-around">
                  <button
                    type="submit"
                    className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => {
                      setIsCreatePackageOpen(false);
                    }}
                    className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                  >
                    Cancell
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        {isEditPackageOpen ? (
          <div className="h-screen bg-indigo-100 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
              <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                <h2 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
                  Edit Package
                </h2>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Title
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Title"
                  />
                </div>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                    placeholder="Your description..."
                  />
                </div>
                <div className="flex items-center justify-around">
                  <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md">
                      priceTRY
                    </label>
                    <input
                      value={priceTRY}
                      onChange={(e) => setPriceTRY(+e.target.value)}
                      className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                    />
                  </div>
                  <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md">
                      priceUSD
                    </label>
                    <input
                      value={priceUSD}
                      onChange={(e) => setPriceUSD(+e.target.value)}
                      className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                    />
                  </div>
                  <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md">
                      priceEUR
                    </label>
                    <input
                      value={priceEUR}
                      onChange={(e) => setPriceEUR(+e.target.value)}
                      className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Image
                  </label>
                  <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center justify-around">
                  <button
                    type="submit"
                    className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => {
                      setIsEditPackageOpen(false);
                    }}
                    className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                  >
                    Cancell
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Title
                </th>
                <th scope="col" className="py-3 px-6">
                  Image
                </th>
                <th scope="col" className="py-3 px-6">
                  price EUR
                </th>
                <th scope="col" className="py-3 px-6">
                  Price TRY
                </th>
                <th scope="col" className="py-3 px-6">
                  price USD
                </th>
                <th scope="col" className="py-3 px-6">
                  Description
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pack) => {
                return (
                  <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {pack.title}
                    </th>
                    <td className="py-4 px-6"> {pack.image}</td>
                    <td className="py-4 px-6"> {pack.priceEUR}</td>
                    <td className="py-4 px-6"> {pack.priceTRY}</td>
                    <td className="py-4 px-6"> {pack.priceUSD}</td>
                    <td className="py-4 px-6"> {pack.description}</td>
                    <td className="py-4 px-6 flex">
                      <button
                        type="button"
                        onClick={() => setIsEditPackageOpen(true)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Package;
