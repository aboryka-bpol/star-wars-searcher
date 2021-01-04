import { IPlanet } from '../interfaces/planet.interface';

export const mappedPlanets = ({
  name,
  rotationPeriod,
  orbitalPeriod,
  diameter,
  climate,
  gravity,
  terrain,
  surfaceWater,
  population,
  renderedResidents,
  renderedFilms,
}: Partial<IPlanet> & { renderedResidents: JSX.Element[] | undefined } & {
  renderedFilms: JSX.Element[] | undefined;
}) => [
    {
      description: 'Name:',
      value: name,
    },
    {
      description: 'Rotation Period:',
      value: rotationPeriod,
    },
    {
      description: 'Orbital Period:',
      value: orbitalPeriod,
    },
    {
      description: 'Diameter:',
      value: diameter,
    },
    {
      description: 'Climate:',
      value: climate,
    },
    {
      description: 'Gravity',
      value: gravity,
    },
    {
      description: 'Terrain:',
      value: terrain,
    },
    {
      description: 'Surface Water:',
      value: surfaceWater,
    },
    {
      description: 'Resident Resources:',
      value: renderedResidents,
    },
    {
      description: 'Film Resources:',
      value: renderedFilms,
    },
    {
      description: 'Population:',
      value: population,
    },
  ];
