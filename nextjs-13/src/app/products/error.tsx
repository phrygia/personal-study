"use client";

import React, { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const ProductsError = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default ProductsError;
