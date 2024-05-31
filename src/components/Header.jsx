import React, { useRef, useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { motion, useInView, useAnimation } from 'framer-motion';
import gambar1 from "../assets/12.jpg";
import gambar2 from "../assets/13.jpg";
import gambar3 from "../assets/14.jpg";
import gambar4 from "../assets/15.jpg";
import Countdown from 'react-countdown-simple';

const Header = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const [countdownComplete, setCountdownComplete] = useState(false); // State untuk menentukan apakah hitungan mundur telah selesai

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className='relative h-screen mx-auto max-w-screen-mobile'>
            <div className='absolute mx-auto text-center z-10 bg-black w-full h-full bg-opacity-50'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -250 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 2, delay: 0.35 }}
                >
                    <div className='text-white pt-[70%]'>
                        <p className='text-2xl font-customFont text-with-shadow'>We Are Getting Married</p>
                        <p className='text-5xl p-2 font-customFont text-with-shadow'>Salsa & Rian</p>
                        <p className='text-xl font-customFont text-with-shadow'>Minggu, 21 April 2024</p>
                    </div>
                    <div>
                        <Countdown
                            targetDate={new Date('2024-04-21T00:00:00')}
                            interval={1000}
                            renderer={({ days, hours, minutes, seconds, completed }) => {
                                if (completed) {
                                    setCountdownComplete(true); // Set countdownComplete menjadi true saat hitungan mundur selesai
                                    return null;
                                } else {
                                    return (
                                        <div className='mx-auto grid grid-cols-4 z-50 my-4 opacity-75'>
                                            <div className='bg-white rounded-md border mx-1 px-2 py-1 flex flex-col'>
                                                <div>{days}</div>
                                                <div>hari</div>
                                            </div>
                                            <div className='bg-white rounded-md border mx-1 px-2 py-1 flex flex-col'>
                                                <div>{hours}</div>
                                                <div>jam</div>
                                            </div>
                                            <div className='bg-white rounded-md border mx-1 px-2 py-1 flex flex-col'>
                                                <div>{minutes}</div>
                                                <div>menit</div>
                                            </div>
                                            <div className='bg-white rounded-md border mx-1 px-2 py-1 flex flex-col'>
                                                <div>{seconds}</div>
                                                <div>detik</div>
                                            </div>
                                        </div>
                                    );
                                }
                            }}
                        />
                        {countdownComplete && <p className="text-xl font-customFont">Acara Sedang Berlangsung</p>} {/* Tampilkan teks saat countdown selesai */}
                    </div>
                </motion.div>
            </div>
            <Carousel
                showArrows={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                swipeable={true}
                showIndicators={false}
                stopOnHover={true}
                showStatus={false}
                labels={false}
                className=' object-cover object-center'
            >
                {[gambar1, gambar2, gambar3, gambar4].map((image, index) => (
                    <div>
                        <img className='h-screen  object-cover' src={image} alt="gambar" key={index} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Header;
