import React from 'react'
import gambar1 from "../assets/6.jpg"
import gambar2 from "../assets/7.jpg"
import gambar3 from "../assets/8.jpg"
import gambar4 from "../assets/9.jpg"

const Gallery = () => {
    return (
        <div className=' max-w-screen-mobile mx-auto px-2 py-2'>
            <div>
                <p className='text-center text-3xl font-semibold py-5'>Gallery</p>
                <div className=' grid-cols-2 grid gap-2'>
                    <div>
                        <img src={gambar1} alt="" />
                    </div>
                    <div>
                        <img src={gambar2} alt="" />
                    </div>
                    <div>
                        <img src={gambar3} alt="" />
                    </div>
                    <div>
                        <img src={gambar4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery