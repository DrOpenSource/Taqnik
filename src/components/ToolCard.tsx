import React from 'react';

interface ToolCardProps {
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

export default function ToolCard({ name, description, category, imageUrl }: ToolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={imageUrl} alt={name} className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full mb-3">
        {category}
      </span>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}