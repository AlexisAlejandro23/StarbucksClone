import React from 'react';
import img5 from './Summer_Noticias_0.png';
import img6 from './Summer_TC.png';

const About1 = () => {
    return (
        <section className='w-full max-w-7xl mx-auto min-h-[85rem] md:min-h-[45rem] lg:min-h-[45rem] grid grid-cols-1 md:grid-cols-2 md:gap-10 bg-gray-50'>
            <div className='flex flex-col items-center'>
                <img src={img5} alt="Starbucks about" className='w-full h-[32rem] md:h-[22rem]  mb-10' />
                <div className='space-y- mb-4'>
                    <h2 className='color-black font-medium text-xl md:text-lg lg:text-xl text-center'>Consulta los eventos más.</h2>
                    <h2 className='color-black font-medium text-xl md:text-lg lg:text-xl text-center'>recientes.</h2>
                </div>
                <button className='text-black font-bold hover:text-gray-800 border rounded-full px-4 py-1 bg-white mt-4'>Ver más</button>
            </div>
            <div className='flex flex-col items-center mt-16 md:mt-0'>
                <img src={img6} alt="Starbucks about" className='w-full h-[32rem] md:h-[22rem] mb-10' />
                <div className='space-y-2 mb-4'>
                    <h2 className='color-black font-medium text-xl md:text-lg lg:text-xl text-center'>Términos y </h2>
                    <h2 className='color-black font-medium text-xl md:text-lg lg:text-xl text-center'>condiciones.</h2>
                </div>
                <button className='text-black font-bold hover:text-gray-800 border rounded-full px-4 py-1 bg-white mt-'>Ver más</button>
            </div>
        </section>
    );
}

export default About1;
