import React from 'react';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

const menMatches = [
  { id: 1, date: '2024-06-10', opponent: 'CSK', venue: 'M. Chinnaswamy Stadium, Bengaluru' },
  { id: 2, date: '2024-06-15', opponent: 'MI', venue: 'Wankhede Stadium, Mumbai' },
  { id: 3, date: '2024-06-20', opponent: 'KKR', venue: 'Eden Gardens, Kolkata' },
  { id: 4, date: '2024-06-25', opponent: 'DC', venue: 'Feroz Shah Kotla Ground, Delhi' },
  { id: 5, date: '2024-06-30', opponent: 'SRH', venue: 'Rajiv Gandhi International Stadium, Hyderabad' },
];

const womenMatches = [
  { id: 1, date: '2024-06-12', opponent: 'DC', venue: 'Feroz Shah Kotla Ground, Delhi' },
  { id: 2, date: '2024-06-17', opponent: 'SRH', venue: 'Rajiv Gandhi International Stadium, Hyderabad' },
  { id: 3, date: '2024-06-22', opponent: 'RR', venue: 'Sawai Mansingh Stadium, Jaipur' },
  { id: 4, date: '2024-06-27', opponent: 'MI', venue: 'Wankhede Stadium, Mumbai' },
  { id: 5, date: '2024-07-02', opponent: 'KKR', venue: 'Eden Gardens, Kolkata' },
];

const MatchSchedules = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-red-800 mb-8">Upcoming Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Men's Team</h3>
            <div className="grid gap-4">
              {menMatches.map(match => (
                <motion.div
                  key={match.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
                >
                  <div className="p-4">
                    <p className="text-lg font-semibold text-gray-800 mb-2">{match.date}</p>
                    <p className="text-gray-600 mb-2">{match.opponent}</p>
                    <p className="text-gray-600">{match.venue}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Women's Team</h3>
            <div className="grid gap-4">
              {womenMatches.map(match => (
                <motion.div
                  key={match.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
                >
                  <div className="p-4">
                    <p className="text-lg font-semibold text-gray-800 mb-2">{match.date}</p>
                    <p className="text-gray-600 mb-2">{match.opponent}</p>
                    <p className="text-gray-600">{match.venue}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchSchedules;
