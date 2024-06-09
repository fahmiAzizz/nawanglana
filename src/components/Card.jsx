import React, { useRef, useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Countdown from 'react-countdown-simple';
import { motion } from 'framer-motion';
import { MdOutlineEmail } from "react-icons/md";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import song from '../assets/song2.mp3';


const Card = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [countdownComplete, setCountdownComplete] = useState(false); // State untuk menentukan apakah hitungan mundur telah selesai
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
            <div className={`bg-[#8FBC8F] mx-auto justify-items-center max-w-screen-mobile text-center z-50 fixed top-0 left-0 right-0 bottom-0 h-screen ${isVisible ? '' : 'hidden'}`}>
                <div className=" absolute w-full h-full flex justify-center items-center z-50">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" bg-[#fff] bg-opacity-50 text-slate-800 p-6 rounded-lg"
                        onClick={handleCardClick}
                    >
                        <p className="text-2xl font-customFont">We Are Getting Married</p>
                        <p className="text-5xl font-bold font-customFont p-2">Alya & Dodi</p>
                        <p className="text-xl font-customFont">Minggu, 30 Juni 2024</p>
                        <Countdown
                            targetDate={new Date('2024-06-30T00:00:00')}
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
                            onComplete={() => setCountdownComplete(true)} // Set countdownComplete menjadi true saat hitungan mundur selesai
                        />
                        {countdownComplete && <p className="text-2xl p-2 text-center font-customFont">Acara Sedang Berlangsung</p>} {/* Tampilkan teks saat countdown selesai */}
                        <p className='font-semibold flex justify-center items-center text-center p-2 bg-white bg-opacity-70 my-2 rounded-xl cursor-pointer' onClick={handleCardClick}><MdOutlineEmail size={30} /> Buka Undangan</p>
                    </motion.div>
                </div>
            </div>
            <div className={`fixed bottom-6 right-6 z-50 hover:bg-emerald-600 hover:scale-110 duration-100 bg-emerald-500 text-white p-4 rounded-full ${isVisible ? 'hidden' : ''} `}>
                <div onClick={toggleAudio}>
                    {isPlaying ? (
                        <TbMusic size={28} style={{ cursor: 'pointer' }} />
                    ) : (
                        <TbMusicOff size={28} style={{ cursor: 'pointer' }} />
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
