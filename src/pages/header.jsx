import React, { useState, useEffect } from 'react';
import logo from './starbucks-logo.png';
import menuIcon from './menu.svg';
import locationIcon from './location.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Cerrar el menú cuando la pantalla sea más grande que md (768px)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className='w-full bg-white shadow-2xl relative z-30'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16 md:h-20'>
                    {/* Left side - Logo and Main Navigation */}
                    <div className='flex items-center space-x-8'>
                        {/* Logo */}
                        <div className='flex-shrink-0'>
                            <img src={logo} alt="starbucks-logo" className="h-12 cursor-pointer"
                            onClick={() => window.location.href = '#/home'}/>
                        </div>

                        {/* Desktop Navigation - Left */}
                        <nav className='hidden md:flex items-center space-x-8'>
                            <a href='#/menu' className='text-black font-bold text-lg hover:text-green-800'>Menu</a>
                            <a href='#/rewards' className='text-black font-bold text-lg hover:text-green-800'>Rewards</a>
                        </nav>
                    </div>

                    {/* Right side - Additional Navigation */}
                    <nav className='hidden md:flex items-center space-x-8'>
                        <div className='flex items-center cursor-pointer hover:text-gray-800'>
                            <span className='font-bold flex items-center gap-2'><img src={locationIcon} alt="location-icon" className="h-6 w-6" /> Localizar Tienda</span>
                        </div>
                        <a href='#login' className='bg-white text-gray-800 font-bold hover:text-gray-600 border-2 border-black rounded-full px-4 py-1'>Ingresar</a>
                        <a href='#join' className='bg-black text-white font-bold hover:bg-gray-800 border rounded-full px-4 py-1'>Únete</a>
                    </nav>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-gray-700 hover:text-gray-900 focus:outline-none'
                            aria-expanded='false'
                        >
                            <img 
                                src={menuIcon} 
                                alt={isMenuOpen ? 'Cerrar menú' : 'Menú'} 
                                className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} 
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className='fixed inset-0 z-40'>
                    {/* Menu panel */}
                    <div className='fixed top-0 right-0 w-4/5 sm:w-3/4 md:w-2/3 h-full bg-white shadow-lg z-50 overflow-y-auto'>
                        <div className='p-6 space-y-6'>
                            <div className='flex justify-end mb-8'>
                                <button onClick={toggleMenu} className='text-gray-500 hover:text-gray-700'>
                                    <img src={menuIcon} alt="Cerrar menú" className="h-6 w-6" />
                                </button>
                            </div>
                            
                            <nav className='space-y-4'>
                                <a href='#menu' className='block text-xl font-bold text-gray-800 py-3 hover:text-green-800'>Menu</a>
                                <a href='#rewards' className='block text-xl font-bold text-gray-800 py-3 hover:text-green-800'>Rewards</a>
                                <div className='flex items-center py-3 border-b border-gray-100'>
                                    <span className='text-xl font-bold text-gray-800 flex items-center gap-2'><img src={locationIcon} alt="location-icon" className="h-6 w-6" /> Localizar Tienda</span>
                                </div>
                                <div className='pt-4 flex flex-wrap gap-4'>
                                    <a href='#login' className='flex-1 min-w-[120px] text-center bg-white text-gray-800 font-bold hover:bg-gray-100 border-2 border-gray-800 rounded-full px-4 py-2 text-lg whitespace-nowrap'>Ingresar</a>
                                    <a href='#join' className='flex-1 min-w-[120px] text-center bg-black text-white font-bold hover:bg-gray-800 rounded-full px-4 py-2 text-lg whitespace-nowrap'>Únete</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;