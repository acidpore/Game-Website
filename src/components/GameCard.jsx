// GameCard.jsx
import React from 'react';
import './GameCard.css';

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <div className="card-content">
        <div className="card-front">
          <img src={game.image} alt={game.title} />
          <h3>{game.title}</h3>
        </div>
        <div className="card-back">
          <div className="description-canvas">
            <p className="game-description">{game.description}</p>
            <div className="game-stats">
              <div className="stat-item">
                <span className="stat-label">Genre</span>
                <span className="stat-value">{game.genre}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Rating</span>
                <span className="stat-value">⭐{game.rating}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Playtime</span>
                <span className="stat-value">{game.playtime}</span>
              </div>
            </div>
          </div>
          <button className="cta-button">Mainkan Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
