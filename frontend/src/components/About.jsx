const About = () => {
    return (
      <div className="p-10 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            SignBuddy aims to bridge the communication gap by providing real-time sign language detection using cutting-edge AI technology.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h3>
          <p className="text-gray-600 mb-8">
            Our system captures and processes sign language gestures in real-time, translating them into text or speech for seamless interaction.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Alice", "Bob", "Charlie"].map((name, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
                <img src="" alt={name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                <p className="text-gray-600">AI Developer</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default About;