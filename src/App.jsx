import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About, Dashboard, Home, Income, Reviews, VanDetail, Vans } from "./pages";
import "./server";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Dashboard />}/>
          <Route path="/host/income" element={<Income />}/>
          <Route path="host/reviews" element={<Reviews />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
