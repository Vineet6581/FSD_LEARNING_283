    import React from 'react';
    import Book from '../components/Book';

    const War = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            WAR STORIES : Live a life less ordinary
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Book
            image="kargil.png"
            title="The Kargil Story"
            publication="HarperCollins"
            publicationDate="2003"
            reviews="480"
            price="299"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <Book
            image="tornedo.png"
            title="Black Tornado: The Three Sieges of Mumbai 26/11"
            publication="HarperCollins"
            publicationDate="2014"
            reviews="688"
            price="259"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <Book
            image="war.png"
            title="The Future of War: A History"
            publication="PublicAffairs"
            publicationDate="2017"
            reviews="348"
            price="499"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
        </div>
        </div>
    );
    };

    export default War;
