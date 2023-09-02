export interface IPartAsteroid {
    id: number;
    name: string;
    diameter: number;
    hazardous: boolean;
    missDistanceKilometers: number;
    missDistanceLunar: number;
    date: string;
}

export interface IApproach {
    date: string;
    relativeVelocity: number;
    missDistanceKilometers: number;
    missDistanceLunar: number;
    orbit: string;
}

export interface IFullAsteroid {
    id: number;
    name: string;
    diameter: number;
    hazardous: boolean;
    approach: IApproach[];
}

export type MeasurementType = "lunar" | "km";
