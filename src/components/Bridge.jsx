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
        <div className='text-white max-w-screen-mobile mx-auto -mt-32 relative z-20'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,53.3C240,43,300,21,360,42.7C420,64,480,128,540,160C600,192,660,192,720,160C780,128,840,64,900,48C960,32,1020,64,1080,96C1140,128,1200,160,1260,170.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
            <div className='text-center bg-[#0099ff] pb-32'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 0.25 }}>
                    <p className='text-3xl font-customFont pt-20'>OUR WEDDING</p>
                    <p className=' px-10 py-2 text-sm'>Dengan rahmat dari Tuhan Yang Maha Esa, kami mengundang Anda untuk bergabung dalam acara kami. Kehadiran serta doa restu dari Bapak/Ibu/Saudara/i akan sangat kami hargai, dan menjadi berkat bagi keluarga kami.</p>
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
                    <img className='mt-24 h-64 rounded-full w-64 mx-auto' src={bridge2} alt="" />
                    <p className=' mt-4 font-customFont font-bold text-3xl' ref={bridge}>Salsa</p>
                    <p className=' font-customFont text-2xl'>Salsabila Dwiputri, Si.kom</p>
                    <p className=' font-semibold'>Putri Kedua Dari</p>
                    <p className='font-semibold'>Bpk. Mulyana Rahmat</p>
                    <p className='font-semibold'>dan</p>
                    <p className='font-semibold'>ibu Tien Purnamasari</p>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 0 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 1 }}
                    className='my-10'>
                    <p className='font-customFont text-6xl font-bold'>&</p>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 1 }}>
                    <img className='h-64 rounded-full w-64 mx-auto' src={bridge1} alt="" />
                    <p className=' mt-4 font-customFont font-bold text-3xl'>Rian</p>
                    <p className=' font-customFont text-2xl'>Mochamad Hesrian Zulyana, S.Psi</p>
                    <p className=' font-semibold'>Putra Kedua Dari</p>
                    <p className='font-semibold'>Bpk. Herman Suryadi</p>
                    <p className='font-semibold'>dan</p>
                    <p className='font-semibold'>ibu Erna Rohani</p>
                </motion.div>
            </div>
            <svg className=' rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,53.3C240,43,300,21,360,42.7C420,64,480,128,540,160C600,192,660,192,720,160C780,128,840,64,900,48C960,32,1020,64,1080,96C1140,128,1200,160,1260,170.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default Bridge