import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Recording from "./components/Recording";
<<<<<<< HEAD:frontend2/src/App.jsx
import EmailForm from "./components/EmailForm";
=======
import ChatComponent from "./components/ChatComponent";
>>>>>>> 23a8d0027cc4314eb89c22d1eadfd508ff8cbb35:frontend/src/App.jsx

//service id:service_xzgs5vk
//template_id:template_5ob59ol
//public key=CQIzSTEgIMg6OUOki
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/recording' element={<Recording/>} />

        <Route path="/chat" element={<ChatComponent />} />

      </Routes>

      {/* <EmailForm/> */}
    </>
  );
};

export default App;