import { useState } from "react";

const DiseasePrediction = () => {
  const [metrics] = useState([
    { disease: "Diabetes", count: 120 },
    { disease: "Heart Disease", count: 85 },
    { disease: "Skin Cancer", count: 45 },
    { disease: "Pneumonia", count: 70 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Disease Prediction by Picture</h2>
        <p className="text-gray-400">
          Leveraging machine learning for accurate disease diagnosis and
          predictions from uploaded images.
        </p>
      </div>

      {/* Metrics Section */}
      <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition"
          >
            <h3 className="text-2xl font-semibold">{metric.disease}</h3>
            <p className="text-gray-300 text-lg mt-2">
              {metric.count} Cases Predicted
            </p>
          </div>
        ))}
      </div>

      {/* Graph Section */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold mb-6">Prediction Accuracy Graph</h3>
        <div className="bg-gray-700 rounded-lg shadow-lg p-6 max-w-4xl w-full">
          <div className="h-64 bg-gray-500 rounded-lg flex items-center justify-center">
            <p className="text-gray-300 italic">Graph placeholder (e.g., Bar/Line chart)</p>
          </div>
        </div>
      </div>

      {/* Upload Metrics */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold mb-6">Disease Detection Trends</h3>
        <p className="text-gray-400 mb-8">
          Track the most common diseases detected over the past month.
        </p>
        <div className="flex flex-col items-center">
          <div className="bg-gray-700 rounded-lg shadow-lg p-6 max-w-4xl w-full">
            <div className="h-64 bg-gray-500 rounded-lg flex items-center justify-center">
              <p className="text-gray-300 italic">Graph placeholder (e.g., Pie chart)</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <button className="px-8 py-3 bg-green-600 text-gray-900 font-bold rounded-lg shadow hover:bg-green-700 transition">
          Upload Image for Prediction
        </button>
      </div>
    </div>
  );
};

export default DiseasePrediction;
