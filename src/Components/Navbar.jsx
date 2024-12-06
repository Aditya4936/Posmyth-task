import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home" },
    { name: "About" },
    { name: "Products" },
    { name: "Services" },
    { name: "Contact" },
  ];

  return (
    <nav className=" bg-white fixed w-full shadow-lg z-50 top-0 ">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold sm:text-2xl md:text-4xl font-sans bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          <h1>ADITYA PATEL</h1>
        </div>

        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <div className="hover:text-primary transition duration-300 cursor-pointer">
                {link.name}
              </div>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={handleToggle}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.5 }}
          className="absolute top-0 right-0 w-3/4 bg-secondary text-white font-semibold h-screen shadow-lg"
        >
          <div className="flex justify-end items-center px-6 py-4">
            <div className="text-2xl cursor-pointer" onClick={handleToggle}>
              <FaTimes />
            </div>
          </div>
          <ul className="space-y-5 mt-8 px-6 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <div
                  className="block hover:text-primary cursor-pointer"
                  onClick={handleToggle}
                >
                  {link.name}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
