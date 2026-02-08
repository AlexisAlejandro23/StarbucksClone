import React, { useState } from 'react';
import arrow_down from './arrow_down.svg';

const About2 = () => {
    const [showSobreNosotros, setShowSobreNosotros] = useState(false);
    const [showAtencionCliente, setShowAtencionCliente] = useState(false);

    const toggleSobreNosotros = () => setShowSobreNosotros(!showSobreNosotros);
    const toggleAtencionCliente = () => setShowAtencionCliente(!showAtencionCliente);

    return (
        <section className='w-full min-h-[7rem] md:min-h-[12rem] lg:min-h-[12rem] bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-b border-gray-200 py-6'>
            <div className='w-full max-w-7xl mx-auto px-4 md:px-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='py-4'>
                        <div className='flex justify-between items-center cursor-pointer' onClick={toggleSobreNosotros}>
                            <p className='text-black font-medium'>Sobre Nosotros</p>
                            <img 
                                src={arrow_down} 
                                alt="arrow down" 
                                className={`w-6 h-6 md:hidden transition-transform duration-200 ${showSobreNosotros ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        <div className={`${showSobreNosotros ? 'block' : 'hidden'} md:block mt-4 space-y-4`}>
                            <p className='cursor-pointer text-gray-500 hover:text-black'>Trabaja con nosotros</p>
                            <p className='cursor-pointer text-gray-500 hover:text-black'>Historias Starbucks</p>
                        </div>
                    </div>
                    <div className='py-4'>
                        <div className='flex justify-between items-center cursor-pointer' onClick={toggleAtencionCliente}>
                            <p className='text-black font-medium'>Atención al cliente</p>
                            <img 
                                src={arrow_down} 
                                alt="arrow down" 
                                className={`w-6 h-6 md:hidden transition-transform duration-200 ${showAtencionCliente ? 'rotate-180' : ''}`} 
                            />
                        </div>
                        <div className={`${showAtencionCliente ? 'block' : 'hidden'} md:block mt-4 space-y-4`}>
                            <p className='cursor-pointer text-gray-500 hover:text-black'>Contáctanos</p>
                            <p className='cursor-pointer text-gray-500 hover:text-black'>Facturas Electrónicas</p>
                            <p className='cursor-pointer text-gray-500 hover:text-black'>Formas de comprar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About2;
