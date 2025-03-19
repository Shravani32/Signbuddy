import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-100 min-h-screen">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Welcome to SignBuddy</h2>
        <p className="text-lg text-gray-700 mb-6">
          Experience real-time sign language detection powered by AI. SignBuddy makes communication seamless for everyone.
        </p>
        
        {/* Navigate to Recording Page */}
        <button
          onClick={() => navigate("/recording")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
        <button
          onClick={() => navigate("/process")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;