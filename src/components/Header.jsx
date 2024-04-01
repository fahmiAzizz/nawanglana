import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
// import Countdown from 'react-countdown-simple';
import gambar1 from "../assets/12.jpg"
import gambar2 from "../assets/13.jpg"
import gambar3 from "../assets/14.jpg"
import gambar4 from "../assets/15.jpg"
import Countdown from 'react-countdown-simple';

const Header = () => {
    return (
        <div className='relative h-screen mx-auto max-w-screen-mobile '>
            <div className=' absolute mx-auto text-center z-10 bg-black w-full h-full bg-opacity-50'>
                <div className='text-white pt-[50%]'>
                    <p className='text-2xl text-with-shadow'>We Are Getting Married</p>
                    <p className='text-5xl p-2 font-customFont text-with-shadow'>Riyan & Salsa</p>
                    <p className='text-xl text-with-shadow'>Minggu, 21 April 2024</p>
                </div>
                <div>
                    <Countdown
                        targetDate={new Date('2024-05-29T00:00:00')}
                        interval={1000}
                        renderer={({ days, hours, minutes, seconds, completed }) => {
                            if (completed) {
                                return null;
                            } else {
                                return (
                                    <div className='mx-auto grid grid-cols-4 z-50 my-4 opacity-75'>
                                        <div className='bg-white rounded-md border mx-1 px-2 py-1 flex flex-col'>
                                            <div>
                                                {days}
                                            </div>
                                            <div>
                                                hari
                                            </div>
                                        </div>
                                        <div className='bg-white rounded-md border mx-1 px-2 py-1 flex flex-col'>
                                            <div>
                                                {hours}
                                            </div>
                                            <div>
                                                jam
                                            </div>
                                        </div>
                                        <div className='bg-white rounded-md border mx-1 px-2 py-1 flex flex-col'>
                                            <div>
                                                {minutes}
                                            </div>
                                            <div>
                                                menit
                                            </div>
                                        </div>
                                        <div className='bg-white rounded-md border mx-1 px-2 py-1 flex flex-col'>
                                            <div>
                                                {seconds}
                                            </div>
                                            <div>
                                                detik
                                            </div>
                                        </div>

                                    </div>
                                );
                            }
                        }}
                    />
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
                    <img className='h-screen' src={gambar1} />
                </div>
                <div >
                    <img className='h-screen' src={gambar2} />
                </div>
                <div >
                    <img className='h-screen' src={gambar3} />
                </div>
                <div >
                    <img className='h-screen' src={gambar4} />
                </div>
            </Carousel>
        </div>
    )
}

export default Header