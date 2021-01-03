import { IFilm } from "../interfaces/film.interface";

interface IRenderedFilmData {
    renderedCharacters: JSX.Element[] | undefined,
    renderedPlanets: JSX.Element[] | undefined,
    renderedVehicles: JSX.Element[] | undefined,
    renderedStarships: JSX.Element[] | undefined,
    renderedSpecies: JSX.Element[] | undefined
}

export const mappedFilms = ({
    title,
    episodeId,
    openingCrawl,
    director,
    producer,
    releaseDate,
    renderedCharacters,
    renderedPlanets,
    renderedVehicles,
    renderedStarships,
    renderedSpecies
}: Partial<IFilm> & IRenderedFilmData) => ([
    {
      description: "Title:",
      value: title
    },
    {
      description: "Episode Id:",
      value: episodeId,
    },
    {
      description: "Orbital Crawl:",
      value: openingCrawl
    },
    {
      description: "Director:",
      value: director
    },
    {
      description: "Producer:",
      value: producer
    },
    {
      description: "Release Date:",
      value: releaseDate
    },
    {
      description: "Character Resources:",
      value: renderedCharacters
    },
    {
      description: "Planet Resources:",
      value: renderedPlanets
    },
    {
      description: "Vehicle Resources:",
      value: renderedVehicles
    },
    {
      description: "Starship resources:",
      value: renderedStarships
    },
    {
        description: "Species resources:",
        value: renderedSpecies

    },
])