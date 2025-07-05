import React, { useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { WatchListContext } from '../context/WatchListContext';

const Moviecard = ({ movie }) => {
  const { watchList, addToWatchList, removeFromWatchList } = useContext(WatchListContext);

  const isLiked = watchList.some((m) => m.id === movie.id);

  const toggleWatchList = () => {
    isLiked ? removeFromWatchList(movie.id) : addToWatchList(movie);
  };

  return (
    <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-full max-w-xs">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <button
        onClick={toggleWatchList}
        className="absolute top-2 right-2 text-red-500 text-xl"
      >
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </button>
      <div className="p-4">
        <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
        <p className="text-sm text-gray-400">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default Moviecard;


 