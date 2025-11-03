    import React from 'react';
    import Book from '../components/Book';

    const Books = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Book Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Book

            image="boots.png"
            title="Boots Belts Berets"
            publication="India Ink"
            publicationDate="2006"
            reviews="255"
            price="277"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            
            />
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
            image="double.png"
            title="On the Double"
            publication="Tanushree Podder"
            publicationDate="2019"
            reviews="320"
            price="350"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <Book
            image="fearless1.png"
            title="India's Most Fearless 1"
            publication="Penguin"
            publicationDate="2017"
            reviews="1281"
            price="309"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <Book
            image="fearless2.png"
            title="India's Most Fearless 2"
            publication="Penguin"
            publicationDate="2018"
            reviews="900"
            price="315"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <Book
            image="ghazi.png"
            title="Kitne Ghazi Aaye Kitne Ghazi Gaye"
            publication="Jaico Publishing"
            publicationDate="2016"
            reviews="400"
            price="230"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <Book
            image="ignited.png"
            title="Ignited Minds"
            publication="Penguin"
            publicationDate="2002"
            reviews="1052"
            price="170"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
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
            image="margin.png"
            title="No Margin for Error"
            publication="Roli Books"
            publicationDate="2010"
            reviews="350"
            price="280"
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
            <Book
            image="wings.png"
            title="Wings of Fire"
            publication="Universities Press"
            publicationDate="1999"
            reviews="950"
            price="350"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
        </div>
        </div>
    );
    };

    export default Books;
