const Contact = () => {
    return (
      <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h2>
        <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded mb-4" required />
          <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded mb-4" required />
          <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded mb-4" required></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>
        <div className="mt-6">
          <iframe
            className="w-full max-w-md h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093666!2d144.95373531531593!3d-37.81627974202106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df6d0a3bf%3A0xf4c3d3a6c674b6f0!2sMelbourne!5e0!3m2!1sen!2sau!4v1618251923229!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Contact;