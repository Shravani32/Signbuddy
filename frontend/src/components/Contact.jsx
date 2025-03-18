const Contact = () => {
  return (
    <div className=" mt-16 p-10  min-h-screen flex flex-col items-center">
      <h2 className="text-5xl font-extrabold text-blue-700 mb-6 drop-shadow-lg">Get in Touch</h2>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
      </p>

       <div className="flex gap-12 mb-12">

       <div className="w-full">
        <img src="https://img.freepik.com/free-vector/flat-design-business-communication_52683-76460.jpg?t=st=1742315128~exp=1742318728~hmac=da8563e972ee9b994c890b08aaf9a76bf0f9d7c5d8d4ebf34d5b38fa9afb0a71&w=996" className="w-[400px] h-[400px]" />
      </div>

      <form className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg transform hover:scale-105 transition duration-300">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
          required 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
          required 
        />
        <textarea 
          placeholder="Your Message" 
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
          required 
        ></textarea>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-300 shadow-lg">
          Send Message
        </button>
      </form>

       </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Find Us Here</h3>
        <iframe
          className="w-[500px] h-[500px] rounded-xl shadow-2xl border-2 border-blue-400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.639293007243!2d74.57859791524158!3d16.852400688398142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc15555fdd60cdd%3A0x9e2c3dd10973c7f5!2sSangli%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1618251923229!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;