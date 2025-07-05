import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WatchListContext } from '../context/WatchListContext'; 

const Navbar = () => {
  const { watchList } = useContext(WatchListContext); 

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">

      <Link to="/" className="text-xl font-bold text-white">
        Movie App
      </Link>

      
      <Link to="/watchlist" className="text-white font-medium">
        Watchlist {watchList.length > 0 && `(${watchList.length})`}
      </Link>
    </nav>
  );
};

export default Navbar;

