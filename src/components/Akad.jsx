import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import Underline from '../assets/underline.png'
const Akad = () => {
    const akad = useRef(null);
    const isInView = useInView(akad, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible",)
        }
    }, [isInView])
    return (
        <div className='py-10 max-w-screen-mobile mx-auto text-center'>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 2, delay: 2 }}
                className='text-4xl font-customFont3 pt-24'>
                <p>SAVE THE DATE</p>
                <img className='w-1/2 mx-auto -mt-20' src={Underline} alt="" />
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -250 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 2, delay: 0.50 }}
                className='w-[90%] mx-auto border bg-slate-100 shadow-lg rounded-lg py-8'>
                <p className='text-3xl font-customFont3' ref={akad}>Akad</p>
                <p className='text-xl font-semibold'>April</p>
                <div className='pb-4 grid grid-cols-3 w-[85%] items-center mx-auto'>
                    <p className='text-3xl font-semibold text-right'>Minggu</p>
                    <p className='text-4xl font-bold'><span className='text-5xl font-extralight'>|</span>21<span className='text-5xl font-extralight'>|</span></p>
                    <p className='text-3xl font-semibold text-left'>2024</p>
                </div>
                <div className='font-semibold '>
                    <p>Pukul 07:00 WIB - 09:00 WIB</p>
                    <p>Gedung Surya Kencana</p>
                    <p className='mt-4 hover:scale-110 duration-100'><a className='bg-blue-400 rounded-xl p-2 ' href="https://www.google.com/maps/place/Gedung+Surya+Kencana/@-6.5818882,106.8146776,17z/data=!4m6!3m5!1s0x2e69c4f8e735f931:0x6387ec885c9364d3!8m2!3d-6.5817516!4d106.7678689!16s%2Fg%2F11dzvg567d?entry=ttu">Cek Lokasi</a></p>
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 250 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 2, delay: 0.50 }}
                className='w-[90%] mx-auto border bg-slate-100 shadow-lg rounded-lg py-8 mt-10'>
                <p className='text-3xl font-customFont3'>Resepsi Pernikahan</p>
                <p className='text-xl font-semibold'>April</p>
                <div className='pb-4 grid grid-cols-3 w-[85%] items-center mx-auto'>
                    <p className='text-3xl font-semibold text-right'>Minggu</p>
                    <p className='text-4xl font-bold'><span className='text-5xl font-extralight'>|</span>21<span className='text-5xl font-extralight'>|</span></p>
                    <p className='text-3xl font-semibold text-left'>2024</p>
                </div>
                <div className='font-semibold'>
                    <p>Pukul 11:00 WIB - 13:30 WIB</p>
                    <p>Gedung Surya Kencana</p>
                    <p className='mt-4 hover:scale-110 duration-100'><a className='bg-blue-400 rounded-xl p-2' href="https://www.google.com/maps/place/Gedung+Surya+Kencana/@-6.5818882,106.8146776,17z/data=!4m6!3m5!1s0x2e69c4f8e735f931:0x6387ec885c9364d3!8m2!3d-6.5817516!4d106.7678689!16s%2Fg%2F11dzvg567d?entry=ttu">Cek Lokasi</a></p>
                </div>
            </motion.div>
        </div>
    )
}

export default Akad