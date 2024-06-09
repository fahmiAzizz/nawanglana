import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import bridge1 from "../assets/male.png"
import bridge2 from "../assets/female.png"


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
        <div className=' text-slate-800 max-w-screen-mobile mx-auto  z-20'>
            <div className='text-center bg-[#8FBC8F] py-20 px-5'>
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
                    <p> Dengan memohon Rahmat dan Ridho Allah SWT yang telah menciptakan makhluknya berpasang-pasangan, Ya Allah Perkenankanlah Kami:</p>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 1 }}
                    className="">
                    <p className=' mt-10 font-customFont font-bold text-3xl' ref={bridge}>Alya</p>
                    <p className=' font-customFont text-2xl'>Alya Rahmalia</p>
                    <p className=' font-semibold'>Putri Bapak Mulyana Rahmat & Ibu Sopiah</p>
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
                    <p className=' mt-4 font-customFont font-bold text-3xl'>Dodi</p>
                    <p className=' font-customFont text-2xl'>Dodi Setiadi</p>
                    <p className=' font-semibold'>Putra Bapak Inan alm & Ibu Indun</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Bridge