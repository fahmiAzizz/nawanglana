import React, { useRef, useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Countdown from 'react-countdown-simple';
import { motion } from 'framer-motion';
import { MdOutlineEmail } from "react-icons/md";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import song from '../assets/song.mp3';
import gambar2 from "../assets/13.jpg";
import gambar3 from "../assets/14.jpg";
import gambar4 from "../assets/15.jpg";

const Card = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Membersihkan event listener saat komponen dilepas
        return () => {
            window.removeEventListener('load', playMusicOnLoad);
        };
    }, []);

    const playMusicOnLoad = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleCardClick = () => {
        setIsVisible(false);
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div>
            <div className={`mx-auto justify-items-center max-w-screen-mobile text-center z-50 fixed top-0 left-0 right-0 bottom-0 h-screen ${isVisible ? '' : 'hidden'}`}>
                <div className="absolute w-full h-full flex justify-center items-center z-50">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white bg-opacity-50 text-slate-800 p-6 rounded-lg"
                        onClick={handleCardClick}
                    >
                        <p className="text-2xl font-customFont">We Are Getting Married</p>
                        <p className="text-5xl font-bold font-customFont"> Salsa & Rian</p>
                        <p className="text-xl font-customFont">Minggu, 21 April 2024</p>
                        <Countdown
                            targetDate={new Date('2024-04-21T00:00:00')}
                            interval={1000}
                            renderer={({ days, hours, minutes, seconds, completed }) => (
                                <div className="grid grid-cols-4 gap-4 mt-4">
                                    <div className="bg-white text-slate-800 rounded-lg p-2 text-center">
                                        <div>{days}</div>
                                        <div>hari</div>
                                    </div>
                                    <div className="bg-white text-slate-800 rounded-lg p-2 text-center">
                                        <div>{hours}</div>
                                        <div>jam</div>
                                    </div>
                                    <div className="bg-white text-slate-800 rounded-lg p-2 text-center">
                                        <div>{minutes}</div>
                                        <div>menit</div>
                                    </div>
                                    <div className="bg-white text-slate-800 rounded-lg p-2 text-center">
                                        <div>{seconds}</div>
                                        <div>detik</div>
                                    </div>
                                </div>
                            )}
                        />
                        <p className='font-semibold flex justify-center items-center text-center p-2 bg-white bg-opacity-70 my-2 rounded-xl cursor-pointer' onClick={handleCardClick}><MdOutlineEmail size={30} /> Buka Undangan</p>
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
                >
                    <div>
                        <img className='h-screen' src={gambar2} alt="gambar2" />
                    </div>
                    <div>
                        <img className='h-screen' src={gambar3} alt="gambar3" />
                    </div>
                    <div>
                        <img className='h-screen' src={gambar4} alt="gambar4" />
                    </div>
                </Carousel>
            </div>
            <div className={`fixed bottom-10 right-10 z-50 hover:bg-blue-500 hover:scale-110 duration-100 bg-blue-500 text-white p-4 rounded-full ${isVisible ? 'hidden' : ''} `}>
                <div onClick={toggleAudio}>
                    {isPlaying ? (
                        <TbMusic style={{ fontSize: '35px', cursor: 'pointer' }} />
                    ) : (
                        <TbMusicOff style={{ fontSize: '35px', cursor: 'pointer' }} />
                    )}
                </div>
                <audio className='hidden' ref={audioRef} autoPlay={false} loop={false}>
                    <source src={song} type="audio/mpeg" />
                    Browsermu tidak mendukung tag audio, upgrade donk!
                </audio>
            </div>
        </div>
    );
};

export default Card;
