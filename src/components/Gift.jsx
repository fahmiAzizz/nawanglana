import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import chip from '../assets/chip.png'
import spay from '../assets/spay.png'
import bri from '../assets/bri.png'

const Gift = () => {

    const gift = useRef(null);
    const isInView = useInView(gift, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible",)
        }
    }, [isInView])

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Nomor telah disalin!");
            })
            .catch((error) => {
                console.error("Gagal menyalin nomor:", error);
            });
    };

    return (
        <div className=' h-auto max-w-screen-mobile py-5 mx-auto text-white '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,53.3C240,43,300,21,360,42.7C420,64,480,128,540,160C600,192,660,192,720,160C780,128,840,64,900,48C960,32,1020,64,1080,96C1140,128,1200,160,1260,170.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
            <div className='pb-20 bg-[#0099ff]'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 0.50 }}
                >
                    <p className='text-center text-4xl font-semibold font-customFont3'>Titip Hadiah</p>
                    <p className='text-center my-2 px-10'>Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti bagi kami. Dan jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu dapat memberi kado secara cashless. Terima kasih</p>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 250 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 0.50 }}
                    className='mt-10 border rounded-md w-[75%] mx-auto h-48 bg-slate-400 shadow-2xl grid grid-cols-2'>
                    <div className=' w-full' ref={gift}>
                        <img className='w-28' src={chip} alt="" />
                        <div className='ml-4'>
                            <p className=''>Salsabila Dwiputri</p>
                            <p className='font-semibold'>0954350785</p>
                        </div>
                    </div>
                    <div className='w-full pl-10 '>
                        <img className='w-28 items-end' src={bri} alt="" />
                        <button className='w-20 py-1 px-1 rounded-full ml-3 text-center mt-10 bg-blue-500 hover:scale-110 hover:to-blue-600 duration-100 ' onClick={() => copyToClipboard('0954350785')}>Copy</button>
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
                    className='mt-10 border rounded-md w-[75%] mx-auto h-48 bg-slate-400 shadow-2xl grid grid-cols-2'>
                    <div className=' w-full'>
                        <img className='w-28' src={chip} alt="" />
                        <div className='ml-4'>
                            <p className=''>Mochammad Hesrian Zulyana</p>
                            <p className='font-semibold'>1740868442</p>
                        </div>
                    </div>
                    <div className='w-full pl-10 '>
                        <img className='w-28 items-end' src={bri} alt="" />
                        <button className='w-20 py-1 px-1 rounded-full ml-3 text-center mt-10 bg-blue-500 hover:scale-110 hover:to-blue-600 duration-100 ' onClick={() => copyToClipboard('1740868442')}>Copy</button>
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
                    className='mt-10 border rounded-md w-[75%] mx-auto h-48 bg-slate-400 shadow-2xl grid grid-cols-2'>
                    <div className=' w-full'>
                        <img className='w-28' src={chip} alt="" />
                        <div className='ml-4'>
                            <p className=''>Salsabila Dwiputri</p>
                            <p className='font-semibold'>12208568712520</p>
                        </div>
                    </div>
                    <div className='w-full pl-10 pt-4'>
                        <img className='w-28 items-end' src={spay} alt="" />
                        <button className='w-20 py-1 px-1 rounded-full ml-3 text-center mt-10 bg-blue-500 hover:scale-110 hover:to-blue-600 duration-100 ' onClick={() => copyToClipboard('12208568712520')}>Copy</button>
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
                    className='mt-10 border rounded-md w-[75%] mx-auto h-48 bg-slate-400 shadow-2xl grid grid-cols-2'>
                    <div className=' w-full'>
                        <img className='w-28' src={chip} alt="" />
                        <div className='ml-4'>
                            <p className=''>Mochamad Hesrian Zulyana</p>
                            <p className='font-semibold'>122083819818382</p>
                        </div>
                    </div>
                    <div className='w-full pl-10 pt-4'>
                        <img className='w-28 items-end' src={spay} alt="" />
                        <button className='w-20 py-1 px-1 rounded-full ml-3 text-center mt-10 bg-blue-500 hover:scale-110 hover:to-blue-600 duration-100 ' onClick={() => copyToClipboard('122083819818382')}>Copy</button>
                    </div>
                </motion.div>
            </div>
            <svg className=' rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,53.3C240,43,300,21,360,42.7C420,64,480,128,540,160C600,192,660,192,720,160C780,128,840,64,900,48C960,32,1020,64,1080,96C1140,128,1200,160,1260,170.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default Gift