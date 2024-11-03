import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import Countdown from 'react-countdown-simple';
const Akad = () => {
    const akad = useRef(null);
    const isInView = useInView(akad, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible",)
        }
    }, [isInView])

    const hrStyle = {
        height: '2px',
        borderWidth: '0',
        color: '#8FBC8F', // Ubah warna sesuai kebutuhan
        backgroundColor: '#8FBC8F', // Jika ingin mengubah warna latar belakang garis
    };
    return (
        <div className='py-10 max-w-screen-mobile mx-auto text-center'>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 1, delay: 0.5 }}
                className='text-3xl font-customFont pt-24 pb-10'>
                <p>SAVE THE DATE</p>
                {/* <img className='w-1/2 mx-auto -mt-20' src={Underline} alt="" /> */}
                <hr className=' m-1 w-1/2 mx-auto text-[#8FBC8F]' style={hrStyle} />
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, y: -250 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 1, delay: 0.50 }}
                className='w-[90%] mx-auto border bg-slate-100 shadow-lg rounded-lg py-8'>
                <p className='text-3xl font-customFont3' ref={akad}>Akad</p>
                <p className='text-2xl font-semibold'>Mei</p>
                <div className='pb-4 grid grid-cols-3 w-[85%] items-center mx-auto'>
                    <p className='text-3xl font-semibold text-right'>Rabu</p>
                    <p className='text-4xl font-bold'><span className='text-5xl font-extralight'>|</span>08<span className='text-5xl font-extralight'>|</span></p>
                    <p className='text-3xl font-semibold text-left'>2024</p>
                </div>
                <div className='font-semibold '>
                    {/* <p>Pukul 09:00 WIB - 11:00 WIB</p> */}
                    <p className='px-10 pt-2'>Kediaman Perempuan</p>
                    {/* <p className='mt-4 hover:scale-110 duration-100'><a className='bg-[#8FBC8F] text-slate-50 rounded-xl p-2 ' href="https://maps.app.goo.gl/21uVyBVEgXVDiaZJ9">Cek Lokasi</a></p> */}
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 250 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 1, delay: 0.50 }}
                className='w-[90%] mx-auto border bg-slate-100 shadow-lg rounded-lg py-8 mt-10'>
                <p className='text-3xl font-customFont3'>Resepsi Pernikahan</p>
                <p className='text-2xl font-semibold'>November</p>
                <div className='pb-4 grid grid-cols-3 w-[85%] items-center mx-auto'>
                    <p className='text-3xl font-semibold text-right'>Minggu</p>
                    <p className='text-4xl font-bold'><span className='text-5xl font-extralight'>|</span>10<span className='text-5xl font-extralight'>|</span></p>
                    <p className='text-3xl font-semibold text-left'>2024</p>
                </div>
                <div className='font-semibold'>
                    {/* <p>Pukul 11:00 WIB - 15:30 WIB</p> */}
                    <p className='px-10 pt-2'>Kp. Cikiray RT.02 RW.07 Ds. Bojong Jengkol Kec.Ciampea - Bogor</p>
                    <p className='mt-4 hover:scale-110 duration-100'><a className='bg-[#8FBC8F] text-slate-50 rounded-xl p-2' href="https://maps.app.goo.gl/P5tVWB8PdrFTRa5w9">Cek Lokasi</a></p>
                </div>
            </motion.div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 250 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 1, delay: 0.50 }}
                className=' mx-auto p-5'
            >
                <iframe
                    width="300"
                    height="300"
                    loading="lazy"
                    allowFullScreen
                    title="Lokasi Kami"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5266780537722!2d106.71194097366777!3d-6.581254793412292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69db2fba8f175b%3A0xe719a8b180bf6db8!2sJl.%20Cikiray%2C%20Bojong%20Jengkol%2C%20Kec.%20Ciampea%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016620!5e0!3m2!1sid!2sid!4v1730659610897!5m2!1sid!2sid"
                    className='mx-auto pt-5'
                ></iframe>
                <Countdown
                    targetDate={new Date('2024-11-10T00:00:00')}
                    interval={1000}
                    renderer={({ days, hours, minutes, seconds, completed }) => (
                        <div className="bg-[#8FBC8F] p-5 rounded-lg grid grid-cols-4 gap-4 my-8 shadow-xl">
                            <div className=" text-slate-50 text-semibold rounded-lg p-2 text-center">
                                <div className='text-3xl font-bold'>{days}</div>
                                <div className='text-xl'>hari</div>
                            </div>
                            <div className=" text-slate-50 text-semibold rounded-lg p-2 text-center">
                                <div className='text-3xl font-bold'>{hours}</div>
                                <div className='text-xl'>jam</div>
                            </div>
                            <div className=" text-slate-50 text-semibold rounded-lg p-2 text-center">
                                <div className='text-3xl font-bold'>{minutes}</div>
                                <div className='text-xl'>menit</div>
                            </div>
                            <div className=" text-slate-50 text-semibold rounded-lg p-2 text-center">
                                <div className='text-3xl font-bold'>{seconds}</div>
                                <div className='text-xl'>detik</div>
                            </div>
                        </div>
                    )}
                />
            </motion.div>
        </div>
    )
}

export default Akad