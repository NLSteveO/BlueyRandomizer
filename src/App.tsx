import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';
import episodesData from './data/episodes.json';
import { Episode, Seasons } from './types';

const App: React.FC = () => {
  const data: Seasons = episodesData;
  const [episode, setEpisode] = useState<Episode & { season: number } | null>(null);

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
    const episode = data[randomSeason][randomEpisode - 1];

    setEpisode({ season: Number(randomSeason), ...episode });
  };

  return (
    <div className='main-container'>
      <h1>Bluey Episode Randomizer</h1>
      <h2>Season {episode?.season || 0} Episode {episode?.episode || 0}</h2>
      {(episode && <h2>{episode?.title}</h2>)}
      <Button onClick={handleRandomize} label="Randomize Episode" />
    </div>
  );
};

export default App;
