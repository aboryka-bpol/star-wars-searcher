import { IPerson } from "../interfaces/people.interface";

interface IRenderedPersonData {
    renderedFilms: JSX.Element[] | undefined,
    renderedVehicles: JSX.Element[] | undefined,
    renderedStarships: JSX.Element[] | undefined,
    renderedSpecies: JSX.Element[] | undefined
}

export const mappedPeople = ({
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender,
    homeworld,
    renderedFilms,
    renderedVehicles,
    renderedStarships,
    renderedSpecies
}: Partial<IPerson> & IRenderedPersonData) => ([
    {
      description: "Name:",
      value: name
    },
    {
      description: "Height:",
      value: height,
    },
    {
      description: "Mass:",
      value: mass
    },
    {
      description: "Hair Color:",
      value: hairColor
    },
    {
      description: "Skin Color:",
      value: skinColor
    },
    {
      description: "Eye Color:",
      value: eyeColor
    },
    {
      description: "Birth Year:",
      value: birthYear
    },
    {
      description: "Gender:",
      value: gender
    },
    {
        description: "Film Resources:",
        value: renderedFilms
      },
      {
        description: "Homeworld resource:",
        value: homeworld
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