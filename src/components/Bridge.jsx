import React from 'react'
import bridge1 from "../assets/17.jpg"
import bridge2 from "../assets/18.jpg"

const Bridge = () => {
    return (
        <div className='text-white max-w-screen-mobile mx-auto -mt-32 relative z-20'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,53.3C240,43,300,21,360,42.7C420,64,480,128,540,160C600,192,660,192,720,160C780,128,840,64,900,48C960,32,1020,64,1080,96C1140,128,1200,160,1260,170.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
            <div className='text-center bg-[#0099ff]'>
                <p className='text-3xl pt-20'>OUR WEDDING</p>
                <p className=' px-10 py-2'>Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di acara Kami. Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu pada</p>
                <div>
                    <img className='mt-24 border-4 border-purple-400  h-64 rounded-full w-64 mx-auto' src={bridge2} alt="" />
                    <p className=' mt-4 font-customFont font-bold text-3xl'>Salsa</p>
                    <p className=' font-customFont text-2xl'>Salsabila Dwiputri, S.kom</p>
                    <p className=' font-semibold'>Putri Kedua Dari</p>
                    <p className='font-semibold'>Bpk. Mulyana Rahmat dan ibu Tien Purnamasari</p>
                </div>
                <div className='my-10'>
                    <p className='font-customFont text-6xl font-bold'>&</p>
                </div>
                <div>
                    <img className='h-64 border-4 border-purple-400  rounded-full w-64 mx-auto' src={bridge1} alt="" />
                    <p className=' mt-4 font-customFont font-bold text-3xl'>Rian</p>
                    <p className=' font-customFont text-2xl'>Mochamad Hesrian Zulyana, S.Psi</p>
                    <p className=' font-semibold'>Putra Kedua Dari</p>
                    <p className='font-semibold'>Bpk. Herman Suryadi dan ibu Erna Rohani</p>
                </div>
            </div>
            <svg className=' rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,53.3C240,43,300,21,360,42.7C420,64,480,128,540,160C600,192,660,192,720,160C780,128,840,64,900,48C960,32,1020,64,1080,96C1140,128,1200,160,1260,170.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default Bridge