import React from 'react';

const Principal = ({
image,
titleLine1,
titleLine2,
description,
backgroundColor = '#1e3932',
textColor = 'text-white',
reverse = false
}) => {
  return (
    <main className={`w-full max-w-7xl mx-auto min-h-[24rem] md:min-h-[28rem] lg:min-h-[40rem] grid grid-cols-1 md:grid-cols-2`}>
    <div className={`w-full h-full overflow-hidden ${reverse ? 'order-2' : 'order-1'}`}>
        <img 
        src={image} 
        alt={`${titleLine1} ${titleLine2}`} 
        className='w-full h-full object-cover'
        />
      </div>
      <div 
        className={`w-full flex flex-col justify-center p-8 md:p-12 order-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}
        style={{ backgroundColor }}
      >
        <div className='space-y-2 mb-4'>
          <h2 className={`${textColor} font-bold text-xl md:text-2xl lg:text-3xl text-center`}>
            {titleLine1}
          </h2>
          <h2 className={`${textColor} font-bold text-xl md:text-2xl lg:text-3xl text-center`}>
            {titleLine2}
          </h2>
        </div>
        <p className={`${textColor} text-base md:text-lg text-center leading-relaxed max-w-md mx-auto`}>
          {description}
        </p>
      </div>
    </main>
  );
};

export default Principal;
