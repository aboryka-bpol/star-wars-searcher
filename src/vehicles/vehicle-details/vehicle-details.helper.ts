import { IVehicle } from "../interfaces/vehicle.interface";

export const mappedVehicles = ({
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
    vehicleClass,
    renderedPilots,
    renderedFilms
}: Partial<IVehicle> & {renderedPilots: JSX.Element[] | undefined} & {renderedFilms: JSX.Element[] | undefined}) => ([
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
      description: "Vehicle Class:",
      value: vehicleClass
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