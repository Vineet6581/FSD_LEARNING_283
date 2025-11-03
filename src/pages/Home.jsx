import React from 'react';
import Book from '../components/Book';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 via-white to-indigo-50 text-gray-900 font-sans min-h-screen bg-[url('/back.png')] bg-fixed ">
        <header className="text-white text-center py-20">
            <div>
            <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-xl">
                Welcome to Book Haven 📚
            </h1>
            <p className="mt-4 text-xl font-medium opacity-90">
                Discover your next favorite book!
            </p>
            </div>
        </header>

        <section className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Explore Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {[
                { path: '/Biographies-Books', label: 'Biographies' },
                { path: '/Self-Help-Books', label: 'Self-Help' },
                { path: '/War-stories-Books', label: 'War Stories' },
                { path: '/Motivational-Books', label: 'Motivation' }
            ].map((cat, idx) => (
                <Link
                key={idx}
                to={cat.path}
                className="block bg-white shadow-lg rounded-2xl p-6 text-center text-lg font-semibold text-indigo-700
                hover:bg-indigo-100 hover:shadow-xl transition duration-300 ease-in-out border border-indigo-100"
                >
                {cat.label}
                </Link>
            ))}
            </div>
        </section>

        <section className="bg-[url('/books.png')] bg-cover bg-center bg-no-repeat py-20 px-6 max-w-7xl mx-auto rounded-xl shadow-xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow">
            New Arrival Books
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
            <Book image="boots.png" title="Boots Belts Berets" publication="India Ink" publicationDate="2006" reviews="255" price="277" className="shadow-xl rounded-2xl p-5 bg-white hover:shadow-2xl transition" />
            <Book image="atomic.png" title="Atomic Habits" publication="Penguin" publicationDate="2018" reviews="1100" price="505" className="shadow-xl rounded-2xl p-5 bg-white hover:shadow-2xl transition" />
            <Book image="DES.png" title="Do Epic Shit" publication="Penguin" publicationDate="2021" reviews="901" price="192" className="shadow-xl rounded-2xl p-5 bg-white hover:shadow-2xl transition" />
            </div>
            <div className="text-center mt-10">
            <Link
                to="/Books"
                className="inline-block bg-indigo-600 text-white px-10 py-3 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
            >
                Explore more books...
            </Link>
            </div>
        </section>

        <section className="bg-[url('/cover.png')] bg-cover bg-center  py-20 px-6 max-w-7xl mx-auto rounded-xl shadow-md mt-20 ">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Our Best Sellers of the Year
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
            <Book image="ghazi.png" title="Kitne Ghazi Aaye Kitne Ghazi Gaye" publication="Jaico Publishing" publicationDate="2016" reviews="400" price="230" className="shadow-lg rounded-2xl p-5 bg-white hover:shadow-2xl transition" />
            <Book image="RDPD.png" title="Rich Dad Poor Dad" publication="Plata Publishing" publicationDate="1997" reviews="2500" price="450" className="shadow-lg rounded-2xl p-5 bg-white hover:shadow-2xl transition" />
            </div>
        </section>

        <section className="bg-[url('/new.png')] bg-cover bg-center bg-no-repeat py-20 px-6 max-w-7xl mx-auto mt-20 rounded-xl shadow-inner">
            <h2 className="text-4xl font-bold text-center text-white drop-shadow">
            What Readers Say
            </h2>
            <div className="flex flex-wrap justify-center gap-10 mt-12">
            {[
                { text: "Great collection and fast delivery! I found rare titles I couldn’t find elsewhere.", name: "Suniti, Panipat" },
                { text: "User-friendly website and excellent customer support. Loved the military books!", name: "Shivam, Fatehpur" },
                { text: "The 'India’s Most Fearless' series blew my mind! Thanks for recommending it.", name: "Vishnu, Ghaziabad" },
                { text: "Super fast delivery and well-packed books. Love the motivational section.", name: "Zohadur, Prayagraj" }
            ].map((review, idx) => (
                <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center transform hover:scale-105 transition-transform duration-300"
                >
                <p className="text-gray-700 text-sm italic leading-relaxed">"{review.text}"</p>
                <p className="mt-5 font-semibold text-indigo-700">- {review.name}</p>
                </div>
            ))}
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-10 mt-20 max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-700">
                📬 Subscribe to our Newsletter
            </h3>
            <div className="flex justify-center">
                <input
                type="email"
                placeholder="Enter your email"
                className="border border-indigo-300 p-3 rounded-l-lg w-72 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button className="bg-indigo-600 text-white px-7 py-3 rounded-r-lg hover:bg-indigo-700 transition duration-300">
                Subscribe
                </button>
            </div>
            </div>
        </section>

        <footer className="bg-gray-900 text-white text-center py-6 mt-20">
            <p className="text-sm">
            &copy; 2025 Book_Haven Inc. | <Link to="/ContactUS" className="underline hover:text-indigo-400">Contact</Link> | <Link to="/AboutUS" className="underline hover:text-indigo-400">About</Link>
            </p>
        </footer>
        </div>
    );
    };

export default Home;

