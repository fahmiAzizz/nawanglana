import React, { useRef, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion, useInView, useAnimation } from 'framer-motion';
import flower from '../assets/flower.png'


const Header = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className='relative h-screen mx-auto max-w-screen-mobile flex justify-center justify-items-center items-center'>
            <img src={flower} alt="" className='absolute z-20 h-screen bg-cover' />
            <div className=' mx-auto items-center text-center z-30 w-full'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -250 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 0.35 }}
                >
                    <div className='text-slate-800'>
                        <p className='text-2xl font-customFont text-with-shadow'>We Are Getting Married</p>
                        <p className='text-5xl p-2 font-customFont text-with-shadow'>Alya & Dodi</p>
                        <p className='text-xl font-customFont text-with-shadow z-30 '>Minggu, 30 Juni 2024</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Header;
