import { useState } from "react";
import { Search, PhoneCall, ArrowUpRight } from 'lucide-react';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);


    return (
        <div className="bg-blue-100">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-2 py-6">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold flex items-center">
                    <img src={logo} className="w-30" alt="main-logo" />
                </a>

                {/* Mobile Toggle Button */}
                <button
                    className="lg:hidden text-xl z-20"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖️" : "☰"}
                </button>
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-10"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}

                {/* Navigation Links */}
                <div className={`lg:flex md:space-x-6  text-lg ${isOpen ? "block" : "hidden"} absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto space-y-3 lg:space-y-0     shadow-md md:shadow-none  bg-white lg:bg-transparent z-20 items-center p-3 lg:p-0`}>
                    <a href="/" className="text-blue-600 font-medium block lg:inline">Home</a>

                    {/* Mega Menu for Pages */}
                    <div
                        className="relative z-20 transition-all duration-300 ease-in-out"
                        onMouseEnter={() => setIsPagesOpen(true)}
                        onMouseLeave={() => setIsPagesOpen(false)}
                    >
                        <a href="#" className="text-black    py-0 lg:py-10 hover:text-blue-600 font-medium block md:inline">
                            Pages
                        </a>
                        {isPagesOpen && (
                            <div className="absolute   left-0 bg-white shadow-lg w-80 p-4 mt-6 rounded-lg border border-gray-200">
                                <a href="/about" className="block text-gray-800 hover:text-blue-600 text-base font-semibold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                                    <span role="img" aria-label="About Us" className="mr-2">ℹ️</span> About Us
                                </a>
                                {/* <a href="#" className="block text-gray-800 hover:text-blue-600 text-base font-semibold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                                    <span role="img" aria-label="Team" className="mr-2">👥</span> Team
                                </a>
                                <a href="#" className="block text-gray-800 hover:text-blue-600 text-base font-semibold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                                    <span role="img" aria-label="Testimonials" className="mr-2">🗣️</span> Testimonials
                                </a>
                                <a href="#" className="block text-gray-800 hover:text-blue-600 text-base font-semibold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                                    <span role="img" aria-label="Careers" className="mr-2">💼</span> Careers
                                </a> */}
                            </div>


                        )}
                    </div>

                    {/* Mega Menu for Services */}
                    <div
                        className="relative   transition-all duration-300 ease-in-out"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <a href="#" className="text-black    py-0 lg:py-10 hover:text-blue-600 font-medium block md:inline">
                            Services
                        </a>
                        {isServicesOpen && (
                            <div className="absolute left-0 bg-white shadow-lg w-80 p-4 mt-6 rounded-lg border border-gray-200">
                                <a href="/web" className="block text-gray-800 hover:text-blue-600 text-base font-semibold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                                    <span role="img" aria-label="Web Design" className="mr-2">🌐</span> Web Development
                                </a>
                                <a href="/seo" className="block text-gray-800 hover:text-blue-600 text-base font-semibold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                                    <span role="img" aria-label="SEO" className="mr-2">🔍</span> SEO
                                </a>
                                <a href="/graphic" className="block text-gray-800 hover:text-blue-600 text-base font-semibold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                                    <span role="img" aria-label="Marketing" className="mr-2">🎨</span>Graphic Design
                                </a>
                                <a href="social" className="block text-gray-800 hover:text-blue-600 text-base font-semibold py-1 px-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                                    <span role="img" aria-label="App Development" className="mr-2">📱</span>Social Media
                                </a>
                            </div>

                        )}
                    </div>

                    <a href="#" className="text-black hover:text-blue-600 font-medium block md:inline">Portfolio</a>
                    <a href="/blog" className="text-black hover:text-blue-600 font-medium block md:inline">Blog</a>
                    <a href="/contact" className="text-black hover:text-blue-600 font-medium block md:inline">Contact Us</a>
                </div>

                {/* Icons and Contact */}
                <div className="hidden lg:flex items-center space-x-4">
                    <button onClick={() => setSearch(true)} className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-200 text-blue-600 hover:bg-blue-500 hover:text-white transition duration-150">
                        <Search size={16} />
                    </button>
                    <a href="/contact" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-blue-200 text-blue-600 hover:bg-blue-500 hover:text-white transition duration-150">
                        <PhoneCall size={16} />
                    </a>
                    <span className="hidden md:block text-lg font-medium">+1-123-456-7890</span>
                    <a href="/contact" className="pe-2 ps-4 py-1 cursor-pointer bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-blue-500 rounded-full font-medium flex items-center space-x-2">
                        <span>Get Started</span>
                        <span className="rounded-full px-2 py-2 bg-blue-500 text-white">
                            <ArrowUpRight size={20} />
                        </span>
                    </a>
                </div>

                {/* Search Box */}
                {search && (
                    <div className="absolute inset-x-0 mx-auto mt-24 max-w-lg bg-white shadow-lg rounded-lg overflow-hidden z-50 transition-transform transform scale-95 animate-fade-in">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                            onBlur={() => setSearch(false)} // Hides when input loses focus
                        />
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
