import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { login } from "../../../api/login";
import { useAuth } from "../../../hooks/useAuth";

export interface IInputs {
  emailUsername: string;
  password: string;
}

const Admin: NextPage = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { push } = useRouter();
  const { saveAuthenticatedUser } = useAuth();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(userName, password)
      .then((res) => {
        console.log("res", res);
        saveAuthenticatedUser({ token: res.data.token });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  // console.log('userName' ,userName);
  // console.log('password' ,password);

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
          onSubmit={submitHandler}
        >
          <h1 className="text-center text-3xl">MJ Admin Login</h1>
          <div className="flex flex-col ml-2 space-y-2">
            <label className="text-sm font-light">Email</label>
            <input
              className="sm:w-96 w-72 px-3 py-2 rounded-md border border-slate-400"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col ml-2 space-y-2">
            <label className="text-sm font-light">Password</label>
            <input
              className="sm:w-96 w-72 px-3 py-2 rounded-md border border-slate-400"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            value="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Admin;
