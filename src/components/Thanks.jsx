import React from 'react'
import two from '../assets/two.png'

const Thanks = () => {
    return (
        <div className=' max-w-screen-mobile mx-auto'>
            <p className='text-4xl text-center font-customFont font-semibold'>SALSA & RIAN</p>
            <div>
                <div className=' text-center'>
                    <img className='h-64 w-64 rounded-full mx-auto border-blue-400 border-4 my-10' src={two} alt="" />
                </div>
                <div className='text-center'>
                    <p className='px-12'>Kami merasa sangat bahagia dan terhormat atas kehadiran Anda, yang akan menambah kesan istimewa pada acara kami.</p>
                    <p className='px-12'>-Terima Kasih-</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,53.3C240,43,300,21,360,42.7C420,64,480,128,540,160C600,192,660,192,720,160C780,128,840,64,900,48C960,32,1020,64,1080,96C1140,128,1200,160,1260,170.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default Thanks