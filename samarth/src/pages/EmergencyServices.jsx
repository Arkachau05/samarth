import emergencyBg from "../assets/emergencybg.jpg"; // Replace with your image path
import Emergency1 from "../components/Emergency/Emergency1";
import Emergency2 from "../components/Emergency/Emergency2";
import Emergency3 from "../components/Emergency/Emergency3";

const EmergencyServices = () => {
<<<<<<< HEAD
  return (
    <>
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage: `url(${emergencyBg})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative text-center p-6">
        <h1 className="text-5xl font-bold">
          Emergency Medical Services: Quick and Reliable Assistance 24/7
        </h1>
=======
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 p-8 flex flex-col items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Emergency Medical Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Immediate access to professional assistance in times of medical
            emergencies. Whether it's accidents, heart attacks, or any other
            critical situation, our emergency services ensure you get timely
            help.
          </p>
        </div>
  
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              24/7 Helpline
            </h3>
            <p className="text-gray-500">
              Our helpline is active round the clock, connecting you to medical
              professionals instantly.
            </p>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Real-Time Ambulance Tracking
            </h3>
            <p className="text-gray-500">
              Track ambulances in real-time and reduce response times for faster
              assistance.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Priority Hospital Admissions
            </h3>
            <p className="text-gray-500">
              Get priority admissions to the nearest hospitals to save crucial
              time in emergencies.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Expert Medical Advice
            </h3>
            <p className="text-gray-500">
              Direct consultation with medical experts for guidance during
              emergencies.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Multi-Lingual Support
            </h3>
            <p className="text-gray-500">
              Our services are available in multiple languages to cater to diverse
              communities.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Integrated AI Alerts
            </h3>
            <p className="text-gray-500">
              AI-powered alerts to predict and notify about potential emergencies
              nearby.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-green-700 text-white font-bold rounded-lg shadow hover:bg-green-800 transition">
            Contact Emergency Services
          </button>
        </div>
>>>>>>> c88ee16b0486d2333aae9dae5c6a58e07510844d
      </div>
    </div>
    <Emergency3/>
    <Emergency1/>
    <Emergency2/>
    </>
  );
};

export default EmergencyServices;
