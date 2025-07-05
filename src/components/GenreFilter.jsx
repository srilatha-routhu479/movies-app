import React from 'react'

const GenreFilter = () => {
  return (
    <div>   <select className=" p-2 bg-opacity-60 text-white border-rounded  bg-gray-900 backdrop:blur-md">
      <option value="">All Genres</option>
      <option value="Action">Action</option>
      <option value="Comedy">Comedy</option>
      <option value="Drama">Drama</option>
      <option value="Sci-Fi">Sci-Fi</option>
    </select></div>
  )
}

export default GenreFilter;