import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import axios from 'axios';
import DOMPurify from 'dompurify'; // Import DOMPurify

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
        // Mengambil data dari API saat komponen dimuat
        axios.get('https://backend-gamma-virid.vercel.app/api/v1/wish')
            .then(response => {
                // Mengatur data yang diterima ke dalam state
                setWishData(response.data.data);
            })
            .catch(error => {
                // Tangani error jika ada
                console.error('Error:', error);
            });
    }, []); // [] berfungsi agar useEffect hanya dijalankan sekali saat komponen dimuat

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const sanitizedMessage = DOMPurify.sanitize(message);
            // Mengirim data ke API
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
        <div className="h-auto max-w-screen-mobile mx-auto my-20 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,53.3C240,43,300,21,360,42.7C420,64,480,128,540,160C600,192,660,192,720,160C780,128,840,64,900,48C960,32,1020,64,1080,96C1140,128,1200,160,1260,170.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>

            <div >
                <div className='bg-[#0099ff]'>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial='hidden'
                        animate={mainControls}
                        transition={{ duration: 1, delay: 0.50 }}
                        className='text-3xl font-semibold text-center font-customFont'>
                        UCAPAN & DOA
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial='hidden'
                        animate={mainControls}
                        transition={{ duration: 1, delay: 0.50 }}
                        className='border rounded-md mx-8 mt-4'>
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
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={isLoading}>
                                {isLoading ? 'Loading...' : 'Kirim'}
                            </button>
                        </form>

                        {/* Menampilkan data dalam bentuk paragraf */}
                        {wishData ? (
                            <div className="my-8 h-64 overflow-y-auto  mx-4 border-2 rounded-md border-blue-400">
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
                        ) : (
                            <div className="mt-8 text-center">Loading...</div>
                        )}

                    </motion.div>
                </div>

                <svg className=' rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,53.3C240,43,300,21,360,42.7C420,64,480,128,540,160C600,192,660,192,720,160C780,128,840,64,900,48C960,32,1020,64,1080,96C1140,128,1200,160,1260,170.7C1320,181,1380,171,1410,165.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
            </div>


        </div>
    );
};

export default Wish;
