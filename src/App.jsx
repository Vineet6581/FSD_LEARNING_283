import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import MyBooks from './pages/MyBooks';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import War from './pages/war';
import Biography from './pages/Biography';
import Self from './pages/Self';
import About from './pages/About';
import Contact from './pages/Contact';
import AddItems from './pages/AddItems';
import Motivation from './pages/motivation';
import { useState } from 'react';

const App = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar IsLoggedIn={IsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/MyBooks" element={<MyBooks />} />
        <Route path="/War-stories-Books" element={<War />} />
        <Route path="/Biographies-Books" element={<Biography />} />
        <Route path="/Self-Help-Books" element={<Self />} />
        <Route path="/Motivational-Books" element={<Motivation />} />
        <Route path="/AboutUS" element={<About />} />
        <Route path="/ContactUS" element={<Contact />} />
        <Route path="/AddItems" element={<AddItems />} />
        <Route path="/Login" element={<Login IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
};

export default App;
