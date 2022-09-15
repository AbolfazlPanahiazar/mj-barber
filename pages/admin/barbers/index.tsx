import type { NextPage } from "next";
import Head from "next/head";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import Header from "components/Admin/Header/Header";
import { postBarbers, getBarbers, editBarbers, deleteBarbers } from "api";
import { FiEdit, FiDelete } from "react-icons/fi";

interface IBarbers {
  _id: string;
  fullname: string;
  __V: number;
}

const Barber: NextPage = () => {
  const [isCreateBarberOpen, setIsCreateBarberOpen] = useState<Boolean>(false);
  const [isEditBarberOpen, setIsEditBarberOpen] = useState<Boolean>(false);
  const [barbers, setBarbers] = useState<IBarbers[]>([]);
  const [fullName, setFullName] = useState<string>("");
  const [barberId, setBarberId] = useState<string>("");

  useEffect(() => {
    getBarbers()
      .then((res) => {
        setBarbers(res.data.barbers);
      })
      .catch((error) => toast.error(`${error.response.data.message}`));
  }, [barbers]);

  const createBarberHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postBarbers(fullName)
      .then((res) => {
        setIsCreateBarberOpen(false);
        toast.success(`${res.data.message}`);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
      });
  };

  const editBarberHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editBarbers(fullName, barberId)
      .then((res) => {
        setIsEditBarberOpen(false);
        toast.success(`${res.data.message}`);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
      });
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
            onClick={() => {
              setFullName("");
              setIsCreateBarberOpen(true);
            }}
            className="inline-block px-6 py-2.5 bg-E7EAEE text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-F2F5F7 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Create Barber
          </button>
        </div>

        {isCreateBarberOpen ? (
          <div className=" bg-indigo-100 flex justify-center items-center my-5">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
              <form
                onSubmit={createBarberHandler}
                className="bg-white p-10 rounded-lg shadow-lg min-w-full"
              >
                <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
                  Create Barber
                </h1>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    FullName
                  </label>
                  <input
                    onChange={(e) => setFullName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="FullName"
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
                      setIsCreateBarberOpen(false);
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

        {isEditBarberOpen ? (
          <div className=" bg-indigo-100 flex justify-center items-center my-5">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
              <form
                onSubmit={editBarberHandler}
                className="bg-white p-10 rounded-lg shadow-lg min-w-full"
              >
                <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
                  Edit Barber
                </h1>
                <div>
                  <label className="text-gray-800 font-semibold block my-3 text-md">
                    FullName
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="fullname"
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
                      setIsEditBarberOpen(false);
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
                  Barber name
                </th>

                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {barbers.map((bar) => {
                return (
                  <tr
                    key={bar._id}
                    className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {bar.fullname}
                    </th>

                    <td className="py-4 px-6 flex">
                      <button
                        type="button"
                        onClick={() => {
                          setFullName(bar.fullname);
                          setBarberId(bar._id);
                          setIsEditBarberOpen(true);
                        }}
                        className="text-2xl hover:underline mx-2"
                      >
                        <FiEdit />
                      </button>

                      <button
                        type="button"
                        className="text-2xl hover:underline mx-2"
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteBarbers(bar._id)
                                .then((res) => {
                                  toast.success(`${res.data.message}`);
                                })
                                .catch((err) => {
                                  toast.error(`${err.response.data.message}`);
                                });
                            }
                          });
                        }}
                      >
                        <FiDelete />
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

export default Barber;
