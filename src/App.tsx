import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

const totalSeasons = 3;
const episodesPerSeason = [52, 51, 50]

const App: React.FC = () => {
  const [episode, setEpisode] = useState({ season: 0, episode: 0 });

  const handleRandomize = () => {
    const randomSeason = Math.floor(Math.random() * totalSeasons) + 1;
    const randomEpisode = Math.floor(Math.random() * episodesPerSeason[randomSeason - 1]) + 1;

    setEpisode({ season: randomSeason, episode: randomEpisode });
  };

  return (
    <div className='main-container'>
      <h1>Bluey Episode Randomizer</h1>
      <h2>Season {episode.season} Episode {episode.episode}</h2>
      <Button onClick={handleRandomize} label="Randomize Episode" />
    </div>
  );
};

export default App;
