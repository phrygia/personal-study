import React from "react";
import Navigation from "../components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};

const notFound = () => {
  return (
    <div>
      <h1>not Found </h1>
    </div>
  );
};

export default notFound;
