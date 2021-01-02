export interface ISpaceship {
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
    hyperdriveRating?: number;
    mglt?: number;
    starshipClass?: string;
    pilots?: string[],
    films?: string[]
}