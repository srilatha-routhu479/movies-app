
import React, { useContext, useState } from 'react';
import { WatchListContext } from '../context/WatchListContext';
import Moviecard from '../components/Moviecard';


const GENRES = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 10749, name: 'Romance' },
  { id: 27, name: 'Horror' },
  { id: 53, name: 'Thriller' },
];

const WatchList = () => {
  const { watchList } = useContext(WatchListContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  
  const filteredMovies = watchList.filter((movie) => {
    const matchesSearch = movie.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesGenre =
      selectedGenre === '' ||
      (movie.genre_ids && movie.genre_ids.includes(Number(selectedGenre)));

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="pt-24 p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">My Watchlist</h1>

      
      <div className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-4">
      
        <input
          type="text"
          placeholder="Search in watchlist..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full sm:max-w-md border rounded-lg border-gray-400 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

       
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="px-4 py-2 border rounded-lg border-gray-400 bg-gray-100 text-black focus:outline-none"
        >
          <option value="">All Genres</option>
          {GENRES.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      {/* Movie Cards */}
      {filteredMovies.length === 0 ? (
        <p className="text-gray-500 text-center">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} isLiked={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;



