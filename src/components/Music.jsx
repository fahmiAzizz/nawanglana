import React, { useRef, useState } from 'react'
import song from '../assets/song.mp3';
import { FaMusic } from 'react-icons/fa';

const Music = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className=' max-w-screen-mobile'> <div className='fixed bottom-10 right-10 z-50 bg-blue-700 text-white p-4 rounded-full' >
            <div>
                <audio className='hidden' ref={audioRef} autoPlay={true} loop={false} controls>
                    <source src={song} type="audio/mpeg" />
                    Browsermu tidak mendukung tag audio, upgrade donk!
                </audio>
            </div>
            <div onClick={toggleAudio}>
                <FaMusic style={{ fontSize: '35px', cursor: 'pointer' }} />
            </div>
        </div></div>
    )
}

export default Music