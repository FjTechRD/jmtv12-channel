import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import WelcomePage from "./components/WelcomePage";
import AboutUs from "./pages/aboutUs";
import Comunicadores from "./pages/Comunicadores";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Programs from "./pages/programs";
import Services from "./pages/Services";
import Staff from "./pages/Staff";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/comunicators" element={<Comunicadores />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
