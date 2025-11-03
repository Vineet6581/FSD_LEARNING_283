    import React from 'react';
    import Book from '../components/Book';

    const motivation = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
                Motivational Books
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
            image="margin.png"
            title="No Margin for Error"
            publication="Roli Books"
            publicationDate="2010"
            reviews="350"
            price="280"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
        </div>
        </div>
    );
    };

    export default motivation;
