import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";
import { FiEdit, FiDelete } from "react-icons/fi";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import Header from "components/Admin/Header/Header";
import FileDropZone from "components/Admin/FileDropZone/FileDropZone";
import { getPackages, postPackage, deletePackage, editPackage } from "api";
import { useAuth } from "../../../hooks/useAuth";

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
  const [editId, setEditId] = useState<string>("");
  const { isAuthenticated } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
     
      push("/admin/login");
    }
  }, []);

  useEffect(() => {
    getPackages()
      .then((res) => {
        setPackages(res.data.packages);
      })
      .catch((err) => toast.error(`${err.response.data.message}`));
  }, [packages]);

  const createPackageHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postPackage({
      title: title,
      priceTRY: priceTRY,
      priceUSD: priceUSD,
      priceEUR: priceEUR,
      description: description,
      image: imageUrl,
    })
      .then((res) => {
        toast.success(`${res.data.message}`);
        setIsCreatePackageOpen(false);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
      });
  };

  const deletePackageHandler = (id: string) => {
    deletePackage(id)
      .then((res) => {
        toast.success(`${res.data.message}`);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
      });
  };

  const editSetValues = (p: IPackages) => {
    setTitle(p.title);
    setDescription(p.description);
    setPriceEUR(p.priceEUR);
    setPriceTRY(p.priceTRY);
    setPriceUSD(p.priceUSD);
    setImageUrl(p.image);
    setEditId(p._id);
  };

  const editPackageHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editPackage(
      {
        title: title,
        priceTRY: priceTRY,
        priceUSD: priceUSD,
        priceEUR: priceEUR,
        description: description,
        image: imageUrl,
      },
      editId
    )
      .then((res) => {
        toast.success(`${res.data.message}`);
        setIsEditPackageOpen(false);
      })
      .catch((err) => toast.error(`${err.response.data.message}`));
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
              setTitle("");
              setDescription("");
              setPriceEUR(0);
              setPriceTRY(0);
              setPriceUSD(0);
              setImageUrl("");
              setIsCreatePackageOpen(true);
              window.scrollTo(0, 0)
            }}
            className="inline-block px-6 py-2.5 bg-E7EAEE text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-F2F5F7 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Create Package
          </button>
        </div>

        {isCreatePackageOpen ? (
          <div className="h-screen bg-indigo-100 flex justify-center items-center mt-5">
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
                  <FileDropZone setFileUrl={setImageUrl} file={imageUrl} />
                </div>
                <div className="flex items-center justify-around">
                  <button
                    type="submit"
                    className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                  >
                    Create
                  </button>
                  <button
                    onClick={() => {
                      setIsCreatePackageOpen(false);
                    }}
                    className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        {isEditPackageOpen ? (
          <div className="h-screen bg-indigo-100 flex justify-center items-center mt-5">
            <div className="lg:w-2/5 md:w-1/2 w-2/3">
              <form
                onSubmit={editPackageHandler}
                className="bg-white p-10 rounded-lg shadow-lg min-w-full"
              >
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
                  <FileDropZone setFileUrl={setImageUrl} file={imageUrl} />
                </div>
                <div className="flex items-center justify-around">
                  <button
                    type="submit"
                    className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      setIsEditPackageOpen(false);
                    }}
                    className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-10 mt-10">
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
                  <tr
                    key={pack._id}
                    className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {pack.title}
                    </th>
                    <td className="py-4 px-6">
                      <img className="w-10" src={pack.image} />
                    </td>
                    <td className="py-4 px-6"> {pack.priceEUR}</td>
                    <td className="py-4 px-6"> {pack.priceTRY}</td>
                    <td className="py-4 px-6"> {pack.priceUSD}</td>
                    <td className="py-4 px-6"> {pack.description}</td>
                    <td className="py-4 px-6 flex">
                      <button
                        type="button"
                        onClick={() => {
                          editSetValues(pack);
                          setIsEditPackageOpen(true);
                          window.scrollTo(0, 0)
                        }}
                        className="text-2xl hover:underline mx-2"
                      >
                        <FiEdit />
                      </button>

                      <button
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
                              deletePackageHandler(pack._id);
                            }
                          });
                        }}
                        type="button"
                        className="text-2xl hover:underline mx-2"
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

export default Package;
