import React, { useState } from "react";
import { FiExternalLink, FiSearch } from "react-icons/fi";

const PortfolioI = () => {
  const initialTiles = [
    { id: 1, image: "https://via.placeholder.com/300x300", alt: "Image 1", link: "#" },
    { id: 2, image: "https://via.placeholder.com/300x300", alt: "Image 2", link: "#" },
    { id: 3, image: "https://via.placeholder.com/300x300", alt: "Image 3", link: "#" },
    { id: 4, image: "https://via.placeholder.com/300x300", alt: "Image 4", link: "#" },
    { id: 5, image: "https://via.placeholder.com/300x300", alt: "Image 5", link: "#" },
    { id: 6, image: "https://via.placeholder.com/300x300", alt: "Image 6", link: "#" },
  ];

  const moreTiles = [
    { id: 7, image: "https://via.placeholder.com/300x300", alt: "Image 7", link: "#" },
    { id: 8, image: "https://via.placeholder.com/300x300", alt: "Image 8", link: "#" },
  ];

  const [tiles, setTiles] = useState(initialTiles);
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleViewMore = () => {
    if (!showMore) {
      setTiles([...tiles, ...moreTiles]);
      setShowMore(true);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="" >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg group transform transition duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={tile.image}
              alt={tile.alt}
              className="w-full h-60 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <button
                onClick={() => handleImageClick(tile.image)}
                className="p-3 bg-white text-gray-800 rounded-full shadow-md hover:bg-yellow-400 hover:text-gray-900 transition duration-300 mx-2"
                title="View Full Image"
              >
                <FiSearch size={20} />
              </button>
              <a
                href={tile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-gray-800 rounded-full shadow-md hover:bg-yellow-400 hover:text-gray-900 transition duration-300 mx-2"
                title="View Project"
              >
                <FiExternalLink size={20} />
              </a>
            </div>

            {/* Tile Info */}
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
            className="mb-6 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full transition duration-300 shadow-md hover:shadow-lg"
          >
            View More
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Full View" className="max-w-full max-h-full rounded-lg" />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioI;
