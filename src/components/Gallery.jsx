import React from 'react'

const Gallery = () => {
    return (
        <div className=' max-w-screen-mobile mx-auto px-2 py-2'>
            <div>
                <p className='text-center text-3xl font-semibold py-5'>Gallery</p>
                <div className=' grid-cols-2 grid gap-2'>
                    <div>
                        <img src="./src/assets/6.jpg" alt="" />
                    </div>
                    <div>
                        <img src="./src/assets/7.jpg" alt="" />
                    </div>
                    <div>
                        <img src="./src/assets/8.jpg" alt="" />
                    </div>
                    <div>
                        <img src="./src/assets/9.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery