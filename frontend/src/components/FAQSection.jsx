import { useState } from "react";
import { motion } from "framer-motion";

const FAQs = [
  { question: "How does SignBuddy detect sign language?", answer: "SignBuddy uses AI-powered image recognition to detect hand signs and gestures in real time." },
  { question: "Is SignBuddy free to use?", answer: "Yes, SignBuddy is completely free for basic usage. We also offer premium features for advanced users." },
  { question: "Can I use SignBuddy on mobile devices?", answer: "Absolutely! SignBuddy is fully responsive and works seamlessly on all devices, including mobile phones and tablets." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [modalData, setModalData] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openModal = (faq) => {
    setModalData(faq);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="mt-16 w-full text-center bg-[#205781] text-white p-12 rounded-md">
      <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>

      <div className="mt-6 space-y-4">
        {FAQs.map((faq, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md backdrop-blur-lg border border-gray-100 border-opacity-20 cursor-pointer hover:bg-opacity-20"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-yellow-300">{faq.question}</h3>
              <motion.span 
                animate={{ rotate: openIndex === index ? 180 : 0 }} 
                transition={{ duration: 0.3 }}
                className="text-gray-300 text-xl"
              >
                ▼
              </motion.span>
            </div>

            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="text-gray-200 mt-2"
              >
                {faq.answer} <span className="text-blue-400 underline cursor-pointer" onClick={() => openModal(faq)}>Read more...</span>
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      {modalData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.7, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.3 }}
            className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg max-w-md "
          >
            <h3 className="text-xl font-bold text-indigo-700">{modalData.question}</h3>
            <p className="text-gray-700 mt-3">{modalData.answer}</p>
            <button onClick={closeModal} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FAQSection;
