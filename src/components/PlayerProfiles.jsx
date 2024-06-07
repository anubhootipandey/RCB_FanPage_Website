import React, { useState } from 'react';
import playersData from '../Data/playersData';

const PlayerProfiles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('men'); 

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterPlayers = (playerList) => {
    return playerList.filter(player =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const renderPlayerCard = (player) => (
    <div
      key={player.id}
      className="bg-white shadow-xl rounded-lg overflow-hidden w-64 m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      }}
    >
      <img
        src={player.image}
        alt={player.name}
        className=""
        style={{
          transition: 'transform 0.3s ease-in-out',
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-center">{player.name}</h3>
      </div>
      <div className="mb-2">
        <h3 className="text-md text-red-600 font-bold text-center">{player.role}</h3>
      </div>
    </div>
  );

  const renderCategory = (title, playerList) => {
    const filteredPlayers = filterPlayers(playerList);
    if (filteredPlayers.length === 0) return null;

    return (
      <div className="mb-8">
        <h3 className="text-4xl text-red-700 text-center px-4 pt-2 font-bold mb-4">{title}</h3>
        <div className="flex flex-wrap justify-center">
          {filteredPlayers.map(renderPlayerCard)}
        </div>
      </div>
    );
  };

  const currentPlayers = playersData[selectedTeam];

  return (
    <div className="container mx-auto p-4">

      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search players..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded-lg w-1/2"
        />
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => setSelectedTeam('men')}
          className={`p-2 mx-2 border rounded-lg ${selectedTeam === 'men' ? 'bg-red-800 text-white' : 'bg-gray-200'}`}
        >
          Men
        </button>
        <button
          onClick={() => setSelectedTeam('women')}
          className={`p-2 mx-2 border rounded-lg ${selectedTeam === 'women' ? 'bg-red-800 text-white' : 'bg-gray-200'}`}
        >
          Women
        </button>
      </div>

      {searchQuery === '' ? (
        <>
          {renderCategory('Batters', currentPlayers.batters)}
          {renderCategory('Bowlers', currentPlayers.bowlers)}
          {renderCategory('All-rounders', currentPlayers.allrounders)}
        </>
      ) : (
        <>
          {renderCategory('Batters', currentPlayers.batters)}
          {renderCategory('Bowlers', currentPlayers.bowlers)}
          {renderCategory('All-rounders', currentPlayers.allrounders)}
        </>
      )}
    </div>
  );
};

export default PlayerProfiles;
