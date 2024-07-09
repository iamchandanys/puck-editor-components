"use client";

import React, { useEffect, useState } from "react";
import { Render } from "@measured/puck";
import PuckConfig from "../components/PuckConfig";

const View: React.FC = () => {
  const [initData, setInitData] = useState({});

  useEffect(() => {
    setInitData(JSON.parse(localStorage.getItem("initData") || ""));
  }, []);

  return (
    <>
      <Render config={PuckConfig} data={initData} />
    </>
  );
};

export default View;
