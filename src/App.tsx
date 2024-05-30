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

  const getEpisodeTitle = () => {
    if (!episode?.title) return null;
    return (<h3>{episode?.title}</h3>);
  }

  const getEpisodeDescription = () => {
    if (!episode?.description) return null;
    return (<p>{episode?.description}</p>);
  }

  const getEpisodeImage = () => {
    if (!episode?.image) return null;
    if (!episode?.url) {
      return (<img src={episode?.image} alt={episode?.title} />);
    }
    const link = `https://www.disneyplus.com${episode?.url}`;
    return (
      <a href={link}>
        <img src={episode?.image} alt={episode?.title} />
      </a>
    );
  }

  const getEpisodeWarning = () => {
    if (!episode?.warning) return null;
    return (<h3 id='warning'>WARNING: {episode?.warning}</h3>);
  }

  return (
    <div className='main-container'>
      <h1>Bluey Episode Randomizer</h1>
      <h2>Season {episode?.season || 0} Episode {episode?.episode || 0}</h2>
      {getEpisodeWarning()}
      {getEpisodeImage()}
      {getEpisodeTitle()}
      {getEpisodeDescription()}
      <Button onClick={handleRandomize} label="Randomize Episode" />
    </div>
  );
};

export default App;
