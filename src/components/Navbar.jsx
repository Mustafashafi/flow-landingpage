import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Features', 'Pricing', 'Dashboard', 'Blog'];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/70 backdrop-blur-lg shadow-sm py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="text-white font-bold text-lg">F</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-textDark">
                            FlowPilot <span className="text-primary">AI</span>
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-textLight hover:text-textDark font-medium transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-5 py-2.5 rounded-2xl font-medium text-textDark border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
                            Login
                        </button>
                        <button className="px-5 py-2.5 rounded-2xl font-medium text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-textDark hover:text-primary transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-4 shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-textLight hover:text-primary font-medium block transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                    <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                        <button className="w-full px-5 py-2.5 rounded-2xl font-medium text-textDark border border-gray-200 hover:bg-gray-50 transition-all">
                            Login
                        </button>
                        <button className="w-full px-5 py-2.5 rounded-2xl font-medium text-white bg-gradient-to-r from-primary to-secondary shadow-md">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
