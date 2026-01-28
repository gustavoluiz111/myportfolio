import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const menuItems = ['About', 'Services', 'Projects', 'Tools', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'services', 'projects', 'tools', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(item.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold tracking-tighter cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span className="text-white">LG</span>
                    <span className="text-brand-neon">.STUDIO</span>
                </motion.div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    {menuItems.map((item) => (
                        <motion.li
                            key={item}
                            whileHover={{ scale: 1.1 }}
                            className="cursor-pointer transition-colors relative"
                            onClick={() => handleNavClick(item)}
                        >
                            <span className={activeSection === item.toLowerCase() ? 'text-brand-neon' : ''}>
                                {item}
                            </span>
                            {activeSection === item.toLowerCase() && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-neon"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </motion.li>
                    ))}
                </ul>

                {/* Desktop Social Icons */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:flex space-x-4"
                >
                    <a href="https://github.com/gustavoluiz111" target="_blank" rel="noopener noreferrer" className="hover:text-brand-neon transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="#" className="hover:text-brand-purple transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="#" className="hover:text-brand-neon transition-colors">
                        <FaInstagram size={20} />
                    </a>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
                    >
                        <ul className="px-6 py-4 space-y-4">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`text-lg cursor-pointer ${activeSection === item.toLowerCase() ? 'text-brand-neon' : 'text-gray-300'
                                        }`}
                                    onClick={() => handleNavClick(item)}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                        <div className="flex justify-center space-x-6 px-6 pb-6">
                            <a href="https://github.com/gustavoluiz111" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-neon transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-brand-neon transition-colors">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
