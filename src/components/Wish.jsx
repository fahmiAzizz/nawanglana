import React, { useState } from 'react';

const Wish = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lakukan sesuatu dengan nama dan pesan yang diinputkan, misalnya kirim ke server atau tampilkan di layar
        console.log(`Nama: ${name}, Pesan: ${message}`);
        // Setelah submit, kosongkan field nama dan pesan
        setName('');
        setMessage('');
    };

    return (
        <div className="h-screen max-w-screen-mobile mx-auto my-20">
            <div className='text-3xl font-customFont3 font-semibold text-center'>
                PESAN
            </div>
            <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nama:</label>
                    <input
                        type="text"
                        id="name"
                        className="border rounded-lg px-4 py-2 w-full"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Ucapan:</label>
                    <textarea
                        id="message"
                        className="border rounded-lg px-4 py-2 w-full"
                        rows="4"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Kirim</button>
            </form>
        </div>
    );
};

export default Wish;
