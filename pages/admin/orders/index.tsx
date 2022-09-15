import type { NextPage } from "next";
import Head from "next/head";
import {useRouter} from 'next/router'

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import Header from "components/Admin/Header/Header";
import { getOrders, deleteOrder } from "api";
import { FiDelete } from "react-icons/fi";
import { useAuth } from "../../../hooks/useAuth";

interface IOrders {
  _id: string;
  fullname: string;
  phoneNumber: string;
  barberId: string;
  barberName: string;
  datetime: string;
  address: string;
  packageIds: string[];
  packagesTitles: string[];
  __V: number;
}

const Order: NextPage = () => {
  const [orders, setOrders] = useState<IOrders[]>([]);
  const {isAuthenticated} = useAuth()
  const {push} = useRouter()

  useEffect(()=> {
    if(!isAuthenticated){
    push('/admin/login')
    }
  },[])

  useEffect(() => {
    getOrders()
      .then((res) => {
        console.log(res);
        setOrders(res.data.orders);
      })
      .catch((error) => toast.error(`${error.response.data.message}`));
  }, [orders]);

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
                  Customer
                </th>

                <th scope="col" className="py-3 px-6">
                  Barber
                </th>
                <th scope="col" className="py-3 px-6">
                  Date & Time
                </th>
                <th scope="col" className="py-3 px-6">
                  Address
                </th>
                <th scope="col" className="py-3 px-6">
                  Packages
                </th>

                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                return (
                  <tr
                    key={order._id}
                    className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {order.fullname}
                    </th>
                    <td className="py-4 px-6"> {order.barberName}</td>
                    <td className="py-4 px-6">
                      {order.datetime.split("T").join(" &  ")}
                    </td>
                    <td className="py-4 px-6"> {order.address}</td>
                    <td className="py-4 px-6">
                      {order.packagesTitles.join(" , ")}
                    </td>

                    <td className="py-4 px-6 flex">
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
                              deleteOrder(order._id)
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

export default Order;
