import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-900 to-green-600 shadow-lg rounded-full px-9 py-4 z-50">
      <div className="flex justify-between items-center space-x-6">
        <Link
          to="/"
          className="text-white text-lg font-bold hover:underline transition"
        >
          सmarth
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/emergency-services"
            className="text-white hover:underline transition"
          >
            Emergency
          </Link>
          <Link
            to="/real-time-queue"
            className="text-white hover:underline transition"
          >
            Queue
          </Link>
          <Link
            to="/chatbot"
            className="text-white hover:underline transition"
          >
            Chatbot
          </Link>
          <Link
            to="/disease-prediction"
            className="text-white hover:underline transition"
          >
            Disease Prediction
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
