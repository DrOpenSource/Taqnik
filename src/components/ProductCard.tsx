import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export default function ProductCard({ title, description, price, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">{price}</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}