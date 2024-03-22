import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
// import Countdown from 'react-countdown-simple';

const Header = () => {
    return (
        <div className='relative h-auto mx-auto max-w-screen-mobile '>
            <div className=' absolute mx-auto text-center z-10 bg-black w-full h-full bg-opacity-50'>
                <div className='text-white pt-[60%]'>
                    <p className='text-2xl text-with-shadow'>We Are Getting Married</p>
                    <p className='text-5xl p-2 font-customFont text-with-shadow'>Riyan & Salsa</p>
                    <p className='text-xl text-with-shadow'>Minggu, 15 Juni 2024</p>
                </div>
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
                <div >
                    <img className='h-[500px]' src="./src/assets/4.jpg" />
                </div>
                <div >
                    <img className='h-[500px]' src="./src/assets/5.jpg" />
                </div>
                <div >
                    <img className='h-[500px]' src="./src/assets/6.jpg" />
                </div>
            </Carousel>
        </div>
    )
}

export default Header