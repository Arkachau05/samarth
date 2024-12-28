const Home = () => {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-900 via-teal-700 to-blue-500 relative">
        {/* Welcome Section */}
        <div id="home" className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-12 lg:px-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Welcome to <span className="text-yellow-400">MedEase</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            Revolutionizing healthcare with emergency services, real-time consultations, AI-powered chatbot, and machine learning-based disease predictions.
          </p>
          <button className="px-6 py-3 bg-yellow-400 text-gray-800 rounded-lg font-semibold hover:bg-yellow-500 transition">
            Learn More
          </button>
        </div>
  
        {/* Emergency Medical Services */}
        <section id="emergency" className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-4">Emergency Medical Services</h2>
          <p className="text-lg text-gray-600 text-center">
            Access emergency medical assistance 24/7 at the click of a button.
          </p>
        </section>
  
        {/* Real-Time Consultation */}
        <section id="consultation" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-4">Real-Time Consultation Queue</h2>
          <p className="text-lg text-gray-600 text-center">
            Schedule and manage your consultations in real-time with ease.
          </p>
        </section>
  
        {/* AI Chatbot */}
        <section id="chatbot" className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Chatbot</h2>
          <p className="text-lg text-gray-600 text-center">
            Get instant answers and guidance through our intelligent chatbot.
          </p>
        </section>
  
        {/* Disease Prediction */}
        <section id="disease" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-4">Disease Prediction</h2>
          <p className="text-lg text-gray-600 text-center">
            Upload images for ML-based disease diagnosis and predictions.
          </p>
        </section>
      </div>
    );
  };
  
  export default Home;
  