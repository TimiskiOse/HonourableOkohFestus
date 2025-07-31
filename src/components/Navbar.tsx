import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "IMPACT", path: "/impact" },
    { name: "MEDIA", path: "/media" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="bg-[#56534E] text-white font-playfair z-50 relative">
      <div className="flex justify-between items-center px-6 md:px-20 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl md:text-4xl">OFC</h1>
          <div className="text-xs leading-tight">
            <p>OKOH FESTUS</p>
            <p>CHUKWUYEM</p>
          </div>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-bold">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover:border-b-2 border-b-[#1AA4DF] ${
                    isActive ? "border-b-2" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#56534E] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <button onClick={toggleMenu} className="text-right text-2xl">
            ✕
          </button>
          <ul className="flex flex-col space-y-4 text-lg font-bold">
            {navLinks.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block w-fit hover:border-b-2 border-b-[#1AA4DF] ${
                      isActive ? "border-b-2" : ""
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
