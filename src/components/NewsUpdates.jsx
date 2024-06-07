import React, { useState } from 'react';
import newsData from '../Data/newsData';

const NewsUpdates = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = newsData.filter((news) =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-4">Latest News</h2>

      <input
        type="text"
        placeholder="Search news"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-center">
              <img src={news.image} alt={news.title} className="mb-4 rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{news.title}</h3>
            <p className="text-gray-600">{new Date(news.date).toLocaleDateString()}</p>
            <p className="mt-2">{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsUpdates;
