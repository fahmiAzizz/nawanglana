import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';


const Bridge = () => {
    const bridge = useRef(null);
    const isInView = useInView(bridge, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible",)
        }
    }, [isInView])
    return (
        <div className=' text-slate-50 max-w-screen-mobile mx-auto  z-20'>
            <div className='text-center bg-[#8FBC8F] pt-20  pb-36  px-5'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.25 }}>
                    <p className='text-3xl font-customFont py-5'>OUR WEDDING</p>
                    <p className='font-bold'>Bissmillaahirrahmanirrahim</p>
                    {/* <p>Assalamu'alaikum Warrahmatullahi Wabarakatuh</p> */}
                    <p> Dengan memohon Rahmat dan Ridho Allah SWT yang telah menciptakan makhluknya berpasang-pasangan, Perkenankanlah Kami:</p>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="">
                    <p className=' mt-10 font-customFont font-bold text-3xl' ref={bridge}>Nawang</p>
                    <p className=' font-customFont text-2xl'>Nawang Hapsari</p>
                    <p className=' font-semibold'>Putri Bapak Sukarno & Ibu Sutini</p>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 0 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.5 }}
                    className='my-10'>
                    <p className='font-customFont text-2xl font-bold'>Dengan</p>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.5 }}>
                    <p className=' mt-4 font-customFont font-bold text-3xl'>Lana</p>
                    <p className=' font-customFont text-2xl'>Maulana Pratama</p>
                    <p className=' font-semibold'>Putra Bapak Makmur & Ibu Manti</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Bridge