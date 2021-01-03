export interface IVehicle {
    resourceKey?: string;
    name?: string;
    model?: string;
    manufacturer?: string;
    costInCredits?: number;
    length?: number;
    maxAtmospheringSpeed?: number;
    crew?: string;
    passengers?: number;
    cargoCapacity?: number;
    consumables?: string;
    vehicleClass?: string;
    pilots?: string[],
    films?: string[]
}