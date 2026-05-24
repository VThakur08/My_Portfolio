import { useState } from 'react';

import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
    <ul className="nav-ul">
        {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
                <a href={item.href} className="nav-li_a" onClick={onClick}>
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-4 mx-auto c-space">
                    <a href="/" className="text-white font-bold text-lg hover:text-white/80 transition-colors duration-300">
                        V.Thakur
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="text-white/60 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu">
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            {isOpen && (
                <div className="nav-sidebar block sm:hidden">
                    <nav className="p-5">
                        <NavItems onClick={closeMenu} />
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
