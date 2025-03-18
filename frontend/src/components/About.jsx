import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="p-10 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900 relative overflow-hidden mt-16 p-12">
      <div className="absolute inset-0 bg-fixed bg-[url('/background.jpg')] opacity-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto text-center bg-white bg-opacity-80 backdrop-blur-lg p-14 rounded-3xl shadow-2xl border border-gray-300 relative z-10"
      >
        
        <div className="flex flex-col gap-8">
          {[
            { title: "Our Mission", color: "text-yellow-500", description: "SignBuddy is committed to making communication more inclusive by providing real-time sign language detection using cutting-edge AI technology." },
            { title: "Our Vision", color: "text-blue-500", description: "Our vision is to create a world where communication barriers no longer exist. We aim to integrate AI-driven sign language recognition into everyday life." },
            { title: "How It Works", color: "text-green-500", description: "Our AI-powered system captures and processes sign language gestures in real-time, translating them into text or speech for seamless interaction." }
          ].map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="p-6 bg-white rounded-xl shadow-lg backdrop-blur-lg border border-gray-300"
            >
              <h2 className={`text-4xl font-extrabold ${section.color} mb-4`}>{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.description}</p>
            </motion.div>
          ))}
        </div>
        
        <h3 className="text-3xl font-semibold text-gray-900 mt-14 mb-8">Why Choose SignBuddy?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          {["AI-driven accuracy for precise translations.", "Real-time processing with minimal latency.", "User-friendly interface for all age groups.", "Empowering inclusivity through technology.", "Supports multiple sign languages for better accessibility.", "Seamless integration with smart devices and applications."].map((point, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg backdrop-blur-lg border border-gray-300"
            >
              <p className="text-gray-700">{point}</p>
            </motion.div>
          ))}
        </div>
        
        <h3 className="text-3xl font-semibold text-gray-900 mt-14 mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[{name: "Alice", role: "AI Researcher"}, {name: "Bob", role: "Software Engineer"}, {name: "Charlie", role: "UI/UX Designer"}, {name: "David", role: "Project Manager"}].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 backdrop-blur-lg border border-gray-300"
            >
              <img src="https://via.placeholder.com/100" alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-yellow-500" />
              <h4 className="text-xl font-semibold text-yellow-500">{member.name}</h4>
              <p className="text-gray-700">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
