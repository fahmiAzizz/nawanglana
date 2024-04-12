import React, { useRef, useState, useEffect } from 'react';
import song from '../assets/song.mp3';
import { TbMusic, TbMusicOff } from "react-icons/tb";

const Music = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Mulai pemutaran musik saat komponen dimuat
        audioRef.current.play();
        setIsPlaying(true);
    }, []);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className=' max-w-screen-mobile'>
            <div className='fixed bottom-10 right-10 z-50 hover:bg-blue-500 hover:scale-110 duration-100 bg-blue-500 text-white p-4 rounded-full'>
                <div>
                    <audio className='hidden' ref={audioRef} autoPlay={false} loop={false} controls>
                        <source src={song} type="audio/mpeg" />
                        Browsermu tidak mendukung tag audio, upgrade donk!
                    </audio>
                </div>
                <div onClick={toggleAudio}>
                    <TbMusic style={{ fontSize: '35px', cursor: 'pointer' }} />
                </div>
            </div>
        </div>
    );
}

export default Music;
