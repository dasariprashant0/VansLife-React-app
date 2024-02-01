import { Navigate, useRouteError } from "react-router-dom";

export default function RedirectError() {
  const error = useRouteError();

  return error.status == 302 ? (
    <Navigate replace to={error.headers.map.location} />
  ) : (
    <div className="data-loader">
      <h3>Error: {error.message}</h3>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
}
