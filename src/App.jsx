import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  About,
  Dashboard,
  Home,
  Income,
  Reviews,
  VanDetail,
  Vans,
} from "./pages";
import "./server";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
