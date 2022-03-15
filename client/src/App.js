import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <main className="min-h-screen bg-neutral-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
