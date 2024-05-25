export interface Episode {
  episode: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface Seasons {
  [season: string]: Episode[];
}