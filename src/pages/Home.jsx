
  import React, { useState, useEffect } from 'react';
import Moviecard from '../components/Moviecard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY = '61b5c85f3aa75e4c3bf4733199f29b9a';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const endpoint = searchQuery
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

        const res = await fetch(endpoint);
        const data = await res.json();
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [page, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1); // Reset to page 1 on new search
  };

  return (
    <div className="p-6 pt-24 bg-white min-h-screen">
      {/* Search Box */}
      <div className="sticky top-[48px] z-40 bg-white py-1 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search movies like 'Mersal'..."
          className="px-3 py-1 w-full max-w-5xl border rounded-lg border-gray-400 bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Movie Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 place-items-center">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Moviecard key={index} movie={movie} isLiked={true} />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full mt-10">No movies found.</p>
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination-container flex justify-between items-center mt-8">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded ${
            page === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-800 text-white'
          }`}
        >
          Prev
        </button>
        <span className="text-gray-700 font-semibold">Page {page}</span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded ${
            page === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-800 text-white'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;






