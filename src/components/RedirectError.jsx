import { Navigate, useRouteError } from "react-router-dom";

export default function RedirectError() {
  const error = useRouteError();

  return error.status == 302 ? (
    <Navigate replace to={error.headers.map.location} />
  ) : (
    <>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
}
