import React from 'react';
import './App.css';
import GameCard from './components/GameCard';

const games = [
  {
    id: 1,
    title: 'Heroes of Might and Magic Complete III',
    image: '/images/homm3.jpg',
    description: 'Masuki dunia futuristik penuh petualangan epik...',
    genre: 'RPG',
    rating: 4.8,
    playtime: '40+ Jam'
  },
  {
    id: 2,
    title: 'Plant vs Zombies',
    image: '/images/pvz1.jpeg',
    description: 'Perang antar galaksi yang menegangkan...',
    genre: 'Action',
    rating: 4.5,
    playtime: '50+ Jam'
  },
  // Tambahkan game lain
];

function App() {
  return (
    <div className="App">
      <h1 className="header">Game Terbaru</h1>
      <div className="games-container">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default App;