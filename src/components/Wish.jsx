import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import axios from 'axios';
import DOMPurify from 'dompurify';

const Wish = () => {


    const wish = useRef(null);
    const isInView = useInView(wish, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    const [wishData, setWishData] = useState(null);
    const [name, setName] = useState('');
    const [presence, setPresence] = useState(1); // Defaultnya adalah Hadir
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios.get('https://backend-gamma-virid.vercel.app/api/v1/wish')
            .then(response => {
                setWishData(response.data.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const sanitizedMessage = DOMPurify.sanitize(message);

            await axios.post('https://backend-gamma-virid.vercel.app/api/v1/wish', {
                name,
                presence,
                message: sanitizedMessage, // Gunakan pesan yang sudah dibersihkan
                created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
            });

            // Mengambil ulang data setelah pengiriman berhasil
            const response = await axios.get('https://backend-gamma-virid.vercel.app/api/v1/wish');
            setWishData(response.data.data);
            setName('');
            setPresence(1); // Setel kembali ke default Hadir
            setMessage('');
        } catch (error) {
            console.error('Error:', error);
        }

        setIsLoading(false);
    };

    return (
        <div className="h-auto max-w-screen-mobile mx-auto  text-slate-50">

            <div >
                <div className='bg-white'>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial='hidden'
                        animate={mainControls}
                        transition={{ duration: 1, delay: 0.50 }}
                        className='text-3xl text-center font-customFont py-10 '>
                        <p className='text-slate-800'>UCAPAN & DOA</p>
                        <hr className='w-1/2 mx-auto h-1  text-[#8FBC8F] bg-[#8FBC8F]' />
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial='hidden'
                        animate={mainControls}
                        transition={{ duration: 1, delay: 0.50 }}
                        className='border rounded-md mx-8 mt-4 bg-[#8FBC8F]'>
                        {/* Form untuk membuat posting baru */}
                        <form ref={wish} onSubmit={handleSubmit} className="mt-4 mx-4">
                            <div className="mb-4">
                                <label htmlFor="name" className="block  font-bold mb-2">Nama:</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border rounded-lg px-4 py-2 w-full text-slate-800"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="presence" className="block  font-bold mb-2">Kehadiran:</label>
                                <select
                                    id="presence"
                                    className="border rounded-lg px-4 py-2 w-full text-slate-800"
                                    value={presence}
                                    onChange={(event) => setPresence(parseInt(event.target.value))}
                                    required
                                >
                                    <option value={1}>Hadir</option>
                                    <option value={0}>Tidak Hadir</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block  font-bold mb-2">Pesan:</label>
                                <textarea
                                    id="message"
                                    className="border rounded-lg px-4 py-2 w-full text-slate-800"
                                    rows="4"
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-slate-50 font-bold py-2 px-4 rounded" disabled={isLoading}>
                                {isLoading ? 'Loading...' : 'Kirim'}
                            </button>
                        </form>

                        {/* Menampilkan data dalam bentuk paragraf */}
                        {wishData ? (
                            <div className='my-8 mx-4 border-2 rounded-md border-white '>
                                <p className='text-2xl text-center p-2 font-customFont3'>Ucapan & doa</p>
                                <div className="overflow-y-auto h-64">
                                    {wishData.map((wish, index) => (
                                        <div key={index} className="py-2 px-2">
                                            <h3 className="text-xl font-semibold">{wish.name}</h3>
                                            <p className='text-sm '>{wish.presence === 1 ? 'Hadir' : 'Tidak Hadir'}</p>
                                            <p>{wish.message}</p>
                                            <p className='text-sm text-right'>{new Date(wish.created_at).toLocaleTimeString('en-US', { hour12: false })} {new Date(wish.created_at).toLocaleDateString('en-US')} </p>
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="mt-8 text-center">Loading...</div>
                        )}

                    </motion.div>
                </div>
            </div>


        </div>
    );
};

export default Wish;
