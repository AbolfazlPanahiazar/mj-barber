import type { NextPage } from "next";
import Head from "next/head";

import PageContainer from "components/PageContainer";

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin Page | MJ Barber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-screen h-screen   flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
      >
        <form
          className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5"
          action=""
        >
          <h1 className="text-center text-3xl">MJ Admin Login</h1>
          <div className="flex flex-col ml-2 space-y-2">
            <label className="text-sm font-light">Email</label>
            <input
              className="sm:w-96 w-72 px-3 py-2 rounded-md border border-slate-400"
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col ml-2 space-y-2">
            <label className="text-sm font-light">Password</label>
            <input
              className="sm:w-96 w-72 px-3 py-2 rounded-md border border-slate-400"
              type="password"
              placeholder="Your Password"
              name="password"
              id="password"
            />
          </div>

          <button
            className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
