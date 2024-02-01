import React from "react";
import {
  useLoaderData,
  Form,
  Navigate,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);

    return <Navigate to={pathname} />;
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const status = useNavigation();
  const error = useActionData();
  const message = useLoaderData();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error}</h3>}

      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={status.state === "submitting"}>
          {status.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
      <p className="help">* Valid credentials: test@test.com & p1234</p>
    </div>
  );
}
