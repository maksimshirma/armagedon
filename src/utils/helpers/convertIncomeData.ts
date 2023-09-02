import { IFullAsteroid, IPartAsteroid } from "@/types/asteroid";

export const convertIncomeDataPart = (asteroid: any): IPartAsteroid => {
    let name = asteroid.name.split(" ");
    name =
        name[name.length - 2].substring(1) +
        " " +
        name[name.length - 1].slice(0, -1);
    const data: IPartAsteroid = {
        id: parseInt(asteroid.id),
        name: name,
        diameter: Math.floor(
            asteroid.estimated_diameter.meters.estimated_diameter_max
        ),
        hazardous: asteroid.is_potentially_hazardous_asteroid,

        missDistanceKilometers: parseInt(
            asteroid.close_approach_data[0].miss_distance.kilometers
        ),
        missDistanceLunar: parseInt(
            asteroid.close_approach_data[0].miss_distance.lunar
        ),
        date: asteroid.close_approach_data[0].close_approach_date,
    };
    return data;
};

export const convertIncomeDataFull = (asteroid: any): IFullAsteroid => {
    let name = asteroid.name.split(" ");
    name =
        name[name.length - 2].substring(1) +
        " " +
        name[name.length - 1].slice(0, -1);
    const approach = asteroid.close_approach_data.map((data: any) => ({
        date: data.close_approach_date,
        relativeVelocity: parseInt(data.relative_velocity.kilometers_per_hour),
        missDistanceKilometers: parseInt(data.miss_distance.kilometers),
        missDistanceLunar: parseInt(data.miss_distance.lunar),
        orbit: data.orbiting_body,
    }));
    const data: IFullAsteroid = {
        id: parseInt(asteroid.id),
        name: name,
        diameter: Math.floor(
            asteroid.estimated_diameter.meters.estimated_diameter_max
        ),
        hazardous: asteroid.is_potentially_hazardous_asteroid,
        approach: approach,
    };
    return data;
};
