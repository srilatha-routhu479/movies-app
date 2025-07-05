import React, { createContext, useState, useEffect } from 'react';

export const WatchListContext = createContext();

const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('watchList');
    if (stored) setWatchList(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

  const addToWatchList = (movie) => {
    if (!watchList.find((m) => m.id === movie.id)) {
      setWatchList([...watchList, movie]);
    }
  };

  const removeFromWatchList = (movieId) => {
    setWatchList(watchList.filter((m) => m.id !== movieId));
  };

  return (
    <WatchListContext.Provider value={{ watchList, addToWatchList, removeFromWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListProvider; // ✅ FIXED

