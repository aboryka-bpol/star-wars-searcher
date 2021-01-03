import { ISpaceship } from "../interfaces/spaceship.interface";

export const mappedSpaceships = ({
    name,
    model,
    manufacturer,
    costInCredits,
    length,
    maxAtmospheringSpeed,
    crew,
    passengers,
    cargoCapacity,
    consumables,
    hyperdriveRating,
    mglt,
    starshipClass,
    renderedPilots,
    renderedFilms
}: Partial<ISpaceship> & {renderedPilots: JSX.Element[] | undefined} & {renderedFilms: JSX.Element[] | undefined}) => ([
    {
      description: "Name:",
      value: name
    },
    {
      description: "Model:",
      value: model,
    },
    {
      description: "Manufacturer:",
      value: manufacturer
    },
    {
      description: "Cost In Credits:",
      value: costInCredits
    },
    {
      description: "Length:",
      value: length
    },
    {
      description: "Max Atmosphering Speed:",
      value: maxAtmospheringSpeed
    },
    {
      description: "Crew:",
      value: crew
    },
    {
      description: "Passenders:",
      value: passengers
    },
    {
      description: "Cargo Capacity:",
      value: cargoCapacity
    },
    {
      description: "Consumables:",
      value: consumables
    },
    {
      description: "Hyperdrive Rating:",
      value: hyperdriveRating
    },
    {
      description: "MGLT:",
      value: mglt
    },
    {
      description: "Spaceship Class:",
      value: starshipClass
    },
    {
      description: "Pilot Resources:",
      value: renderedPilots
    },
    {
      description: "Film Resources:",
      value: renderedFilms
    }
])