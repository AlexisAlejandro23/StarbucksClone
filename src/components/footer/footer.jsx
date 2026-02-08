import React from 'react';
import logoFacebook from './redes_sociales/facebook.png';
import logoInstagram from './redes_sociales/instagram.png';
import logoTwitter from './redes_sociales/twitter.png';
import logoYoutube from './redes_sociales/youtube.png';

const Footer = () => {
    return (
        <footer className='w-full bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-b border-gray-200 py-6'>
            <div className='w-full max-w-7xl mx-auto px-4 md:px-6'>
                <div className='flex flex-col items-center space-y-6'>
                    <div className='flex gap-4'>
                        <img src={logoFacebook} alt="Facebook" className='w-6 h-6 cursor-pointer' onClick={() => window.open("https://www.facebook.com/Starbucks", "_blank")} />
                        <img src={logoInstagram} alt="Instagram" className='w-6 h-6 cursor-pointer' onClick={() => window.open("https://www.instagram.com/starbucks/", "_blank")} />
                        <img src={logoTwitter} alt="Twitter" className='w-6 h-6 cursor-pointer' onClick={() => window.open("https://twitter.com/Starbucks", "_blank")} />
                        <img src={logoYoutube} alt="Youtube" className='w-6 h-6 cursor-pointer' onClick={() => window.open("https://www.youtube.com/user/Starbucks", "_blank")} />
                    </div>

                    <div className='flex flex-wrap justify-center gap-x-4 gap-y-2'>
                        <a href='#accesibilidad' className='text-gray-600 hover:text-black text-sm'>Accesibilidad Web</a>
                        <span className='text-gray-300'>|</span>
                        <a href='#privacidad' className='text-gray-600 hover:text-black text-sm'>Aviso de Privacidad</a>
                        <span className='text-gray-300'>|</span>
                        <a href='#boletines' className='text-gray-600 hover:text-black text-sm'>Boletines</a>
                        <span className='text-gray-300'>|</span>
                        <a href='#condiciones' className='text-gray-600 hover:text-black text-sm'>Condiciones de uso</a>
                        <span className='text-gray-300'>|</span>
                        <a href='#mapa' className='text-gray-600 hover:text-black text-sm'>Mapa del sitio</a>
                    </div>

                    <div className='text-center'>
                        <a href="#Cookies" className='text-gray-600 hover:text-black text-sm'>Preferencias sobre cookies</a>
                    </div>

                    <div className='text-center text-gray-600 text-sm space-y-1'>
                        <p>Ⓒ 2025. Starbucks Cofee Company. Reservados todos los derechos</p>
                        <p className='text-[10px]'>mx | prod | b3d3e13c63662e161abbb818fa8f4625e24d7ba1 | 14/08/2025-06:08:38:579</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;