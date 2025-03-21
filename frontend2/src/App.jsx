import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Recording from "./components/Recording";
import EmailForm from "./components/EmailForm";

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

      </Routes>

      {/* <EmailForm/> */}
    </>
  );
};

export default App;