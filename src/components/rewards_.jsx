import React from 'react';
import img4 from './rewards.png';

const Rewards = () => {
    return (
        <section className='w-full max-w-7xl mx-auto min-h-[4rem] md:min-h-[4rem] lg:min-h-[1rem] grid grid-cols-1 md:grid-cols-2 bg-gray-50 my-8 md:my-12'>
            <img src={img4} alt="Starbucks rewards" className='w-full h-full object-cover order-1 md:order-2' />
            <div className='order-2 md:order-1'>
                <div className='w-full flex flex-col justify-center p-8 md:p-12'>
                    <h2 className='text-green-950 font-bold text-xl md:text-2xl lg:text-3xl text-center'>Recompensas en tu</h2>
                    <h2 className='text-green-950 font-bold text-xl md:text-2xl lg:text-3xl text-center'>bebida favorita</h2>
                </div> 
                <p className='text-green-950 text-base md:text-lg text-center leading-relaxed max-w-md mx-auto'>Sé parte de Starbucks Rewards y obtén más café gratis, promociones exclusivas, accesos a productos antes que nadie y más.</p>
            </div>
        </section>
    );
}

export default Rewards;