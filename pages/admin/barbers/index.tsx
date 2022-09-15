import type { NextPage } from "next";
import Head from "next/head";

import React, { useState } from "react";

import Header from "components/Admin/Header/Header";

const Barber: NextPage = () => {
  const [isCreateBarberOpen, setIsCreateBarberOpen] =
    useState<Boolean>(false);
  const [isEditBarberOpen, setIsEditBarberOpen] = useState<Boolean>(false);

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
            onClick={() => setIsCreateBarberOpen(true)}
            className="inline-block px-6 py-2.5 bg-E7EAEE text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-F2F5F7 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>

        {isCreateBarberOpen ? (
          <div className="h-screen bg-indigo-100 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
              <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
                  Formregister
                </h1>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Username
                  </label>
                  <input
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                  />
                </div>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Email
                  </label>
                  <input
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="@email"
                  />
                </div>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Password
                  </label>
                  <input
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Confirm password
                  </label>
                  <input
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                    type="text"
                    name="confirm"
                    id="confirm"
                    placeholder="confirm password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                >
                  Register
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setIsCreateBarberOpen(false);
                  }}
                  className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                >
                  Cancell
                </button>
              </form>
            </div>
          </div>
        ) : null}

        {isEditBarberOpen ? (
          <div className="h-screen bg-indigo-100 flex justify-center items-center">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
              <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
                <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
                  Formregister
                </h1>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Username
                  </label>
                  <input
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                  />
                </div>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Email
                  </label>
                  <input
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="@email"
                  />
                </div>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Password
                  </label>
                  <input
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                    type="text"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    Confirm password
                  </label>
                  <input
                    className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                    type="text"
                    name="confirm"
                    id="confirm"
                    placeholder="confirm password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                >
                  Register
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setIsEditBarberOpen(false);
                  }}
                  className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                >
                  Cancell
                </button>
              </form>
            </div>
          </div>
        ) : null}

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Product name
                </th>
                <th scope="col" className="py-3 px-6">
                  Color
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">White</td>
                <td className="py-4 px-6">Laptop PC</td>
                <td className="py-4 px-6">$1999</td>
                <td className="py-4 px-6 flex">
                  <button
                    type="button"
                    onClick={() => setIsEditBarberOpen(true)}
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
              <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">White</td>
                <td className="py-4 px-6">Laptop PC</td>
                <td className="py-4 px-6">$1999</td>
                <td className="py-4 px-6 flex">
                  <button
                    type="button"
                    onClick={() => setIsEditBarberOpen(true)}
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Barber;
