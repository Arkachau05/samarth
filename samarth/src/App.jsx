import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmergencyServices from "./pages/EmergencyServices";
import RealTimeQueue from "./pages/RealTimeQueue";
import Chatbot from "./pages/Chatbot";
import DiseasePrediction from "./pages/DiseasePrediction";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emergency-services" element={<EmergencyServices />} />
            <Route path="/real-time-queue" element={<RealTimeQueue />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/disease-prediction" element={<DiseasePrediction />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
