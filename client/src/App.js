import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-neutral-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ToastContainer />
    </Router>
  );
}

export default App;
