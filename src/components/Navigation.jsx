import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Projects', id: 'portfolio' },
        { name: 'Timeline', id: 'timeline' },
        { name: 'Resume & Certifications', id: 'certificates' },
        { name: 'Contact', id: 'contact' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // Close mobile menu after clicking
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-stone-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 pr-24">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <img
                            src="./assets/logo.png"
                            alt="logo"
                            className="w-10 h-10 rounded-full border-2 border-stone-900 dark:border-white cursor-pointer"
                            onClick={() => handleScrollToSection('intro')}
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleScrollToSection(item.id)}
                                    className="text-stone-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-stone-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-stone-900">
                        {menuItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleScrollToSection(item.id)}
                                className="text-stone-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navigation;