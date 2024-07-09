"use client";

import "@measured/puck/puck.css";
import { Puck } from "@measured/puck";
import PuckConfig from "../components/PuckConfig";
import { useState } from "react";

export const Editor = () => {
  const [initData, setInitData] = useState({});

  const save = (data: any) => {
    localStorage.setItem("initData", JSON.stringify(data));
  };

  const onChange = (data: any) => {
    localStorage.setItem("initData", JSON.stringify(data));
  };

  const handleClear = () => {
    localStorage.removeItem("initData");
    setInitData({});
    window.location.reload();
  };

  const handleViewPage = () => {
    window.open("/view", "_blank");
  };

  const overrides = {
    headerActions: ({ children }: any) => (
      <>
        {children}
        <button
          type="button"
          className="px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleViewPage}
        >
          View Page
        </button>
        <button
          type="button"
          className="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={handleClear}
        >
          Clear
        </button>
      </>
    ),
  };

  return (
    <>
      <Puck
        config={PuckConfig}
        data={initData}
        onPublish={save}
        overrides={overrides}
        onChange={(data: any) => {
          onChange(data);
        }}
      ></Puck>
    </>
  );
};
