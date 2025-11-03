    import React from 'react';
    import MBook from '../components/MBook';
    const MyBooks = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            My Books
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <MBook
            image="boots.png"
            title="Boots Belts Berets"
            publication="India Ink"
            publicationDate="2006"
            reviews="255"
            price="277"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <MBook
            image="ignited.png"
            title="Ignited Minds"
            publication="Penguin"
            publicationDate="2002"
            reviews="1052"
            price="170"
            className="shadow-lg rounded-lg p-4 bg-white hover:shadow-2xl transition-shadow"
            />
            <MBook
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

    export default MyBooks;
