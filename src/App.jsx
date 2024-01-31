import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Dashboard,
  Home,
  HostVanDetails,
  HostVanInfo,
  HostVanPhotos,
  HostVanPricing,
  HostVans,
  Income,
  Login,
  NotFound,
  Reviews,
  VanDetail,
  Vans,
  hostVanDetailLoader,
  hostVanLoader,
  loginAction,
  loginLoader,
  vanDetailLoader,
  vansLoader,
} from "./pages";
import "./server";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Error from "./components/Error";
import { requireAuth } from "./utils";
import RedirectError from "./components/RedirectError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
          errorElement={<RedirectError />}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
          errorElement={<RedirectError />}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
          errorElement={<RedirectError />}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVanLoader}
          errorElement={<RedirectError />}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostVanDetailLoader}
          errorElement={<RedirectError />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
            errorElement={<RedirectError />}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
            errorElement={<RedirectError />}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
            errorElement={<RedirectError />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
