import React from 'react'
import Underline from '../assets/underline.png'
const Akad = () => {
    return (
        <div className='py-10 max-w-screen-mobile mx-auto text-center'>
            <div className='text-4xl font-customFont3 pt-24'>
                <p>SAVE THE DATE</p>
                <img className='w-1/2 mx-auto -mt-20' src={Underline} alt="" />
            </div>

            <div className='w-[90%] mx-auto border bg-slate-50 rounded-lg py-8'>
                <p className='text-3xl font-customFont3'>Resepsi Pernikahan</p>
                <p className='text-xl font-semibold'>April</p>
                <div className='pb-4 grid grid-cols-3 w-[85%] items-center mx-auto'>
                    <p className='text-3xl font-semibold text-right'>Minggu</p>
                    <p className='text-4xl font-bold'><span className='text-5xl font-extralight'>|</span>21<span className='text-5xl font-extralight'>|</span></p>
                    <p className='text-3xl font-semibold text-left'>2024</p>
                </div>
                <div className='font-semibold'>
                    <p>Pukul 08:00 WIB - 10:00 WIB</p>
                    <p>Gedung Blabla blablabla</p>
                    <p className='mt-4'><a className='bg-blue-400 rounded-xl p-2' href="">Cek Lokasi</a></p>
                </div>
            </div>
            <div className='w-[90%] mx-auto border bg-slate-50 rounded-lg py-8 mt-10'>
                <p className='text-3xl font-customFont3'>Resepsi Akad</p>
                <p className='text-xl font-semibold'>April</p>
                <div className='pb-4 grid grid-cols-3 w-[85%] items-center mx-auto'>
                    <p className='text-3xl font-semibold text-right'>Minggu</p>
                    <p className='text-4xl font-bold'><span className='text-5xl font-extralight'>|</span>21<span className='text-5xl font-extralight'>|</span></p>
                    <p className='text-3xl font-semibold text-left'>2024</p>
                </div>
                <div className='font-semibold'>
                    <p>Pukul 08:00 WIB - 10:00 WIB</p>
                    <p>Gedung Blabla blablabla</p>
                    <p className='mt-4'><a className='bg-blue-400 rounded-xl p-2' href="">Cek Lokasi</a></p>
                </div>
            </div>
        </div>
    )
}

export default Akad