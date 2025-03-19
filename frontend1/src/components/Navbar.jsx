import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">SignBuddy</h1>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white hover:text-gray-300 transition duration-300 ${
                    isActive ? "border-b-2 border-white" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-white hover:text-gray-300 transition duration-300 ${
                    isActive ? "border-b-2 border-white" : ""
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-white hover:text-gray-300 transition duration-300 ${
                    isActive ? "border-b-2 border-white" : ""
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;