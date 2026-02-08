import React from 'react';
import img2 from './2025-06_2025-06_Summer_Bebidas.png';

const Section = () => {
    return (
        <section className='w-full max-w-7xl mx-auto min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem] grid grid-cols-1 md:grid-cols-2 bg-gray-50'>
            <div 
                className='w-full flex flex-col justify-center p-8 md:p-12 order-2 md:order-1'
                style={{backgroundColor: 'var(--caja-color2, #f7f7f7)'}}
            >
                <div className='space-y-4'>
                    <h2 className='text-black font-bold text-xl md:text-2xl lg:text-3xl text-center'>
                        El Starbucks que amas
                    </h2>
                    <h2 className='text-black font-bold text-xl md:text-2xl lg:text-3xl text-center mb-4'>
                        está listo
                    </h2>
                </div>
                <p className='text-black text-base md:text-lg text-center leading-relaxed max-w-md mx-auto'>
                    Para preparar tu café favorito.
                    <br />
                    <span className='font-semibold'>¡Te esperamos!</span>
                </p>
            </div>
            <div className='w-full h-full overflow-hidden order-1 md:order-2'>
                <img 
                    src={img2} 
                    alt="Starbucks verano 2025 bebidas" 
                    className='w-full h-full object-cover'
                />
            </div>
        </section>
    );
};

export default Section;