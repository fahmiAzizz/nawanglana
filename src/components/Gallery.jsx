import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import gambar1 from "../assets/6.jpg";
import gambar2 from "../assets/7.jpg";
import gambar3 from "../assets/8.jpg";
import gambar4 from "../assets/9.jpg";

const images = [gambar1, gambar2, gambar3, gambar4];

const Gallery = () => {
    const [data, setData] = useState({ img: '', i: 0 });

    const viewImage = (img, i) => {
        setData({ img: img, i: i });
    }

    const imgAction = (action) => {
        let i = data.i;
        if (action === 'next-img') {
            setData({ img: images[i + 1], i: i + 1 })
        }
        if (action === 'prev-img') {
            setData({ img: images[i - 1], i: i - 1 })
        }
        if (!action) {
            setData({ img: '', i: 0 })
        }
    }

    return (
        <div className='max-w-screen-mobile mx-auto px-2 py-2'>
            {data.img && (
                <div className='w-full h-screen bg-black fixed top-0 left-0 flex justify-center items-center overflow-hidden z-50 text-white'>
                    <button onClick={() => imgAction()} className='text-white text-3xl absolute top-3 right-3'>X</button>
                    <button onClick={() => imgAction('previous-img')}>Prev</button>
                    <img
                        src={data.img}
                        className='max-w-[80%] max-h-[80%]'
                        alt=''
                        onClick={() => setData({ img: '', i: 0 })}
                    />
                    <button onClick={() => imgAction('next-img')}>Next</button>
                </div>
            )}
            <ResponsiveMasonry columnsCountBreakPoints={{ 750: 2 }}>
                <Masonry>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: '100%', display: 'block' }}
                            alt=''
                            onClick={() => viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default Gallery;
