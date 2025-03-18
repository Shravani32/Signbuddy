const About = () => {
  return (
    <div className="p-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center bg-white bg-opacity-10 backdrop-blur-lg p-14 rounded-3xl shadow-2xl border border-white border-opacity-25">
        <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 drop-shadow-lg">Our Mission</h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          SignBuddy is committed to making communication more inclusive by providing real-time sign language detection using cutting-edge AI technology.
        </p>
        
        <h3 className="text-3xl font-semibold text-white mb-6">How It Works</h3>
        <p className="text-gray-300 mb-10 text-lg">
          Our AI-powered system captures and processes sign language gestures in real-time, translating them into text or speech for seamless interaction, breaking barriers for the hearing-impaired community.
        </p>
        
        <h3 className="text-3xl font-semibold text-white mb-8">Why Choose SignBuddy?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          {["AI-driven accuracy for precise translations.", "Real-time processing with minimal latency.", "User-friendly interface for all age groups.", "Empowering inclusivity through technology.", "Supports multiple sign languages for better accessibility.", "Seamless integration with smart devices and applications."].map((point, index) => (
            <div key={index} className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg backdrop-blur-lg border border-gray-200 border-opacity-30 hover:scale-105 transition duration-300">
              <p className="text-gray-200">{point}</p>
            </div>
          ))}
        </div>
        
        <h3 className="text-3xl font-semibold text-white mt-14 mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[{name: "Alice", role: "AI Researcher"}, {name: "Bob", role: "Software Engineer"}, {name: "Charlie", role: "UI/UX Designer"}, {name: "David", role: "Project Manager"}].map((member, index) => (
            <div key={index} className="p-6 bg-white bg-opacity-20 shadow-lg rounded-lg transform hover:scale-105 transition duration-300 backdrop-blur-lg border border-gray-200 border-opacity-30">
              <img src="https://via.placeholder.com/100" alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-yellow-400" />
              <h4 className="text-xl font-semibold text-yellow-400">{member.name}</h4>
              <p className="text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
