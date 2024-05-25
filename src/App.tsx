import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';
import episodesData from './data/episodes.json';
import { Seasons } from './types';

const App: React.FC = () => {
  const data: Seasons = episodesData;
  const [episode, setEpisode] = useState({ season: 0, episode: 0 });

  const getRandomSeason = () => {
    const totalSeasons = Object.keys(data).length;
    const seasonNumber = Math.floor(Math.random() * totalSeasons) + 1;
    return seasonNumber;
  };

  const getRandomEpisode = (seasonIndex: number) => {
    const season = Math.floor(Math.random() * seasonIndex) + 1;
    const totalEpisodes = data[season].length;
    return Math.floor(Math.random() * totalEpisodes) + 1;
  }

  const handleRandomize = () => {
    const randomSeason = getRandomSeason();
    const randomEpisode = getRandomEpisode(randomSeason);

    setEpisode({ season: Number(randomSeason), episode: randomEpisode });
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
