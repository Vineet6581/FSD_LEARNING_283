    import React from 'react';
    import { Link } from 'react-router-dom';

    const Navbar = ({IsLoggedIn}) => {
    return (
        <nav className="bg-blue-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold tracking-wide">
            <Link to="/">The Reading Minds</Link>
            </div>

            <div className="flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
            <Link to="/Books" className="hover:text-blue-200 transition">All Books</Link>
            <Link to="/MyBooks" className="hover:text-blue-200 transition">MyBooks</Link>
            <Link to="/AddItems" className="hover:text-blue-200 transition">Add Items</Link>

            </div>

            <div className="flex gap-4 text-sm font-medium">
            {!IsLoggedIn ?
            <>
            <Link to="/Signup" className="hover:text-blue-200 transition">Signup</Link>
            <Link to="/Login" className="hover:text-blue-200 transition">Login</Link>
            </> : <button className="hover:text-blue-200 transition">Logout</button>
            }
            </div>
        </div>
        </nav>
    );
    };

    export default Navbar;
