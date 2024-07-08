"use client";

import "@measured/puck/puck.css";
import { Puck } from "@measured/puck";
import { PuckConfig } from "../components/PuckConfig";

export const Editor = () => {
  const initialData = {};

  const save = (data: any) => {};

  const onChange = (data: any) => {};

  const handleViewPage = () => {};

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
      </>
    ),
  };

  return (
    <>
      <Puck
        config={PuckConfig}
        data={initialData}
        onPublish={save}
        overrides={overrides}
        onChange={(data: any) => {
          onChange(data);
        }}
      ></Puck>
    </>
  );
};
