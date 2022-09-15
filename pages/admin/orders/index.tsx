import type { NextPage } from "next";
import Head from "next/head";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Header from "components/Admin/Header/Header";
import { getOrders, deleteOrder } from "api";
import { FiDelete } from "react-icons/fi";

interface IOrders {
  _id: string;
  fullname: string;
  phoneNumber: string;
  barberId: string;
  datetime: string;
  address: string;
  packageIds: string[];
  __V: number;
}

const Order: NextPage = () => {
  const [Orders, setOrders] = useState<IOrders[]>([]);

  useEffect(() => {
    getOrders()
      .then((res) => {
        console.log(res);
        setOrders(res.data.Orders);
      })
      .catch((error) => toast.error(`${error.response.data.message}`));
  }, [Orders]);

  return (
    <>
      <Head>
        <title>Admin Page | MJ Order</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex flex-col">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Order name
                </th>

                <th scope="col" className="py-3 px-6">
                  Image
                </th>
                <th scope="col" className="py-3 px-6">
                  price EUR
                </th>

                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {Orders.map((bar) => {
                return (
                  <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {bar.fullname}
                    </th>

                    <td className="py-4 px-6 flex">
                      <button
                        type="button"
                        className="text-2xl hover:underline mx-2"
                        onClick={() => {
                          deleteOrder(bar._id)
                            .then((res) => {
                              toast.success(`${res.data.message}`);
                            })
                            .catch((err) => {
                              toast.error(`${err.response.data.message}`);
                            });
                        }}
                      >
                        <FiDelete />
                      </button>
                    </td>
                  </tr>
                );
              })} */}

              <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  test
                </th>

                <td className="py-4 px-6">
                  <img className="w-10" src={""} />
                </td>
                <td className="py-4 px-6"> test</td>

                <td className="py-4 px-6 flex">
                  <button
                    type="button"
                    className="text-2xl hover:underline mx-2"
                    // onClick={() => {
                    //   deleteOrder('')
                    //     .then((res) => {
                    //       toast.success(`${res.data.message}`);
                    //     })
                    //     .catch((err) => {
                    //       toast.error(`${err.response.data.message}`);
                    //     });
                    // }}
                  >
                    <FiDelete />
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

export default Order;
