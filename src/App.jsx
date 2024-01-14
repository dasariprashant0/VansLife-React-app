import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About, Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className='site-logo' to={"/"}>#VANLIFE</Link>
        <nav>
            <Link to={"/about"}>About </Link>
            <Link to={"/vans"}>VANS</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
