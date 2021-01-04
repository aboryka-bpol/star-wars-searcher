import { ISpecies } from '../interfaces/species.interface';

interface IRenderedSpeciesData {
  renderedFilms: JSX.Element[] | undefined;
  renderedPeople: JSX.Element[] | undefined;
}

export const mappedSpecies = ({
  name,
  classification,
  designation,
  averageHeight,
  hairColors,
  skinColors,
  eyeColors,
  averageLifespan,
  homeworld,
  language,
  renderedFilms,
  renderedPeople,
}: Partial<ISpecies> & IRenderedSpeciesData) => [
    {
      description: 'Name:',
      value: name,
    },
    {
      description: 'Average Height:',
      value: averageHeight,
    },
    {
      description: 'Classification:',
      value: classification,
    },
    {
      description: 'Hair Colors:',
      value: hairColors,
    },
    {
      description: 'Skin Colors:',
      value: skinColors,
    },
    {
      description: 'Eye Colors:',
      value: eyeColors,
    },
    {
      description: 'Designation:',
      value: designation,
    },
    {
      description: 'Average Lifespan:',
      value: averageLifespan,
    },
    {
      description: 'Homeworld resource:',
      value: homeworld,
    },
    {
      description: 'Language:',
      value: language,
    },
    {
      description: 'Film Resources:',
      value: renderedFilms,
    },
    {
      description: 'People resources:',
      value: renderedPeople,
    },
  ];
