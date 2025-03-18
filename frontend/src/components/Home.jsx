import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef,useState } from "react";
import { useInView } from "framer-motion";
import FAQSection from "./FAQSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewSlideshow from "./ReviewSlideShow";

const FadeInSection = ({ children }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-white p-12 mt-11">
      {/* Glassmorphism Card */}

      <div className="flex gap-7 justify-center items-center">
        <div>
          <img src="https://i.pinimg.com/originals/6a/dc/6a/6adc6a4018d5e1b69e7553ee704adb41.gif" className="h-[400px] w-[400px] rounded-xl" alt="" />
          
        </div>
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="bg-[#143D60] bg-opacity-3 backdrop-blur-lg shadow-2xl rounded-3xl p-12 max-w-3xl border border-white border-opacity-20 mt-12 mb-8" 
      >
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          Welcome to <span className="text-yellow-300">SignBuddy</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8 leading-relaxed">
          Experience real-time AI-powered <span className="font-semibold text-white">sign language detection</span>. <br />
          Bridging the communication gap for a more inclusive world.
        </p>

        {/* Call to Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/recording")}
          className="bg-yellow-400 text-gray-900 font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition duration-300 hover:bg-yellow-500"
        >
          Get Started
        </motion.button>
      </motion.div>
      </div>
      

      {/* Features Section */}
      <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold  mt-10 text-yellow-600">Our Features</h2>

      <section className="bg-[url('https://media.istockphoto.com/id/1180549312/photo/smiling-mixed-ethnicity-couple-talking-with-sign-finger-hand-language.jpg?s=612x612&w=0&k=20&c=wkb5Y7qpvgnCX7m4w27dNSb46d3rwMBLXLOI4MbBJdc=')] bg-cover bg-center p-11 overflow-hidden h-full">

      <div className="mt-12 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 p-12 ">
        {["Real-Time Detection", "AI-Powered Accuracy", "User-Friendly Interface"].map((feature, index) => (
          <FadeInSection key={index}>
            <div className=" bg-opacity-10 p-6 rounded-xl shadow-lg backdrop-blur-lg border border-gray-100 border-opacity-20 gap-2 h-[200px] w-[250px] hover:scale-[1.1]">
              
              <h3 className="text-xl font-bold text-yellow-300">{feature}</h3>
              <p className="text-gray-200 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              
            </div>
          </FadeInSection>
        ))}
      </div>
        
      </section>

      </div>


      {/* Who Can Benefit Section */}
      <div className="mt-16 w-full text-center bg-[#4F959D] backdrop-blur-lg rounded-lg text-white p-12 ">
        <h2 className="text-3xl font-bold mb-8">Who Can Benefit from SignBuddy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Hearing Impaired Individuals", "Sign Language Learners", "Educators & Interpreters", "Medical & Emergency Services"].map((benefit, index) => (
            <FadeInSection key={index}>
              <div className="bg-opacity-30 bg-black p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-yellow-300">{benefit}</h3>
                <p className="text-gray-200 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <ReviewSlideshow/>

      {/* FAQs Section */}
       <FAQSection/>

      {/* Footer Section */}
      <footer className="mt-16 bg-gray-700 text-gray-300 text-sm text-center border-t border-gray-700 w-full py-10 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
    
    {/* About Section */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">About SignBuddy</h3>
      <p className="text-gray-400">
        SignBuddy is an AI-powered platform that helps bridge the communication gap through real-time sign language detection.
      </p>
    </div>

    {/* Quick Links Section */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
      <ul className="space-y-2">
        <li><div className="hover:text-yellow-400 transition">Features</div></li>
        <li><div className="hover:text-yellow-400 transition">FAQs</div></li>
        <li><div className="hover:text-yellow-400 transition">Contact Us</div></li>
      </ul>
    </div>

    {/* Contact Section */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
      <p className="text-gray-400">📧 support@signbuddy.com</p>
      <p className="text-gray-400">📍 123 AI Street, Tech City</p>

      {/* Social Media Links */}
      <div className="mt-4 flex space-x-4 justify-start">
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><i className="fab fa-facebook text-xl"></i></a>
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><i className="fab fa-twitter text-xl"></i></a>
        <a href="#" className="text-gray-400 hover:text-yellow-400 transition"><i className="fab fa-instagram text-xl"></i></a>
      </div>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="mt-8 border-t border-gray-700 pt-4">
    <p>&copy; {new Date().getFullYear()} SignBuddy. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Home;
