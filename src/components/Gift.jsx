import React from 'react'
import chip from '../assets/chip.png'
import spay from '../assets/spay.png'
import bri from '../assets/bri.png'

const Gift = () => {
    return (
        <div className=' h-auto max-w-screen-mobile py-5 mx-auto'>
            <div className='text-center my-10'>
                <p className='text-3xl font-semibold'>Titip Hadiah</p>
                <p className='my-2 px-20'>Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti bagi kami. Dan jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu dapat memberi kado secara cashless. Terima kasih</p>
            </div>
            <div className='border rounded-md w-[75%] mx-auto h-48 bg-gray-400 grid grid-cols-2'>
                <div className=' w-28'>
                    <img src={chip} alt="" />
                    <div className='ml-4'>
                        <p className=''>Rian Baskara</p>
                        <p className='font-semibold'>0899776152480</p>
                    </div>
                </div>
                <div className='w-full pl-10 pt-4'>
                    <img className='w-28 items-end' src={spay} alt="" />
                </div>
            </div>
            <div className='mt-10 border rounded-md w-[75%] mx-auto h-48 bg-gray-400 grid grid-cols-2'>
                <div className=' w-28'>
                    <img src={chip} alt="" />
                    <div className='ml-4'>
                        <p className=''>Rian Baskara</p>
                        <p className='font-semibold'>0899776152480</p>
                    </div>
                </div>
                <div className='w-full pl-10 pt-4'>
                    <img className='w-28 items-end' src={bri} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gift