import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <h3>Error: {error.message}</h3>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
};

export default Error;
