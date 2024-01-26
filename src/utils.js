import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false;
  const response = redirect("/login?message=You must log in first.");

  if (!isLoggedIn) {
    return Object.defineProperty(response, "body", { value: true });
  }
}
