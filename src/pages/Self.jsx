    import React from 'react';
    import Book from '../components/Book';

    const self = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            SELF-HELP BOOKS : "what you sow is what you reap"
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Book
            image="atomic.png"
            title="Atomic Habits"
            publication="Penguin"
            publicationDate="2018"
            reviews="1100"
            price="505"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <Book
            image="DES.png"
            title="Do Epic Shit"
            publication="Penguin"
            publicationDate="2021"
            reviews="901"
            price="192"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <Book
            image="monk.png"
            title="The Monk Who Sold His Ferrari"
            publication="HarperCollins"
            publicationDate="1997"
            reviews="2000"
            price="499"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <Book
            image="RDPD.png"
            title="Rich Dad Poor Dad"
            publication="Plata Publishing"
            publicationDate="1997"
            reviews="2500"
            price="450"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <Book
            image="subtle.png"
            title="The Subtle Art of Not Giving a F*ck"
            publication="HarperOne"
            publicationDate="2016"
            reviews="3000"
            price="550"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
        </div>
        </div>
    );
    };

    export default self;
