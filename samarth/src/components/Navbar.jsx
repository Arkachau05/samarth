import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">MedEase</Link>
        <div className="space-x-4">
          <Link to="/emergency-services" className="text-white hover:underline">Emergency</Link>
          <Link to="/real-time-queue" className="text-white hover:underline">Queue</Link>
          <Link to="/chatbot" className="text-white hover:underline">Chatbot</Link>
          <Link to="/disease-prediction" className="text-white hover:underline">Disease Prediction</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
