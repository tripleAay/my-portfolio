import React, { useState } from "react";

const Portfolio = () => {
  const initialTiles = [
    { id: 1, image: "https://via.placeholder.com/300x300", alt: "Image 1" },
    { id: 2, image: "https://via.placeholder.com/300x300", alt: "Image 2" },
    { id: 3, image: "https://via.placeholder.com/300x300", alt: "Image 3" },
    { id: 4, image: "https://via.placeholder.com/300x300", alt: "Image 4" },
    { id: 5, image: "https://via.placeholder.com/300x300", alt: "Image 5" },
    { id: 6, image: "https://via.placeholder.com/300x300", alt: "Image 6" },
  ];

  const moreTiles = [
    { id: 7, image: "https://via.placeholder.com/300x300", alt: "Image 7" },
    { id: 8, image: "https://via.placeholder.com/300x300", alt: "Image 8" },
  ];

  const [tiles, setTiles] = useState(initialTiles);
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    if (!showMore) {
      setTiles([...tiles, ...moreTiles]);
      setShowMore(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="text-white w-full max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white mb-6 text-center hover:underline hover:text-yellow-500 transition duration-300 mt-6 mb-4 cursor-pointer">
          Portfolio
        </h2>

        {/* Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg group transform transition duration-300 hover:scale-105"
            >
              <img
                src={tile.image}
                alt={tile.alt}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 bg-gray-800 text-center group-hover:bg-yellow-400 transition duration-300">
                <p className="font-semibold group-hover:text-gray-900">
                  Project {tile.id}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showMore && (
          <div className="flex justify-center">
            <button
              onClick={handleViewMore}
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
