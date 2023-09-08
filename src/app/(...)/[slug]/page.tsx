import AsteroidApproachDescription from "@/components/asteroidApproachDescription/asteroidApproachDescription";
import AsteroidApproachList from "@/components/asteroidApproachList/asteroidApproachList";
import { convertIncomeDataFull } from "@/utils/helpers/convertIncomeData";
import { IFullAsteroid } from "@/types/asteroid";
import styles from "./page.module.css";
import ErrorComponent from "@/components/error/error";
import { Metadata } from "next";

async function fetchAsteroid(id: string): Promise<Object | Error> {
    const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=DEMO_KEY`,
        {
            next: {
                revalidate: 0,
            },
        }
    );

    const asteroid = await response.json();

    if (asteroid.hasOwnProperty("error") || asteroid.code >= 400) {
        return new Error("error");
    }

    return asteroid;
}

export async function generateMetadata({
    params: { slug },
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const asteroid = await fetchAsteroid(slug);

    if (asteroid instanceof Error) {
        return {
            title: "error",
        };
    }

    const convertedAsteroid: IFullAsteroid = convertIncomeDataFull(asteroid);

    return {
        title: convertedAsteroid.name,
    };
}

export default async function Asteroid({
    params: { slug },
}: {
    params: { slug: string };
}): Promise<JSX.Element> {
    const asteroid = await fetchAsteroid(slug);

    if (asteroid instanceof Error) {
        return (
            <div className={styles["asteroid-page"]}>
                <div className={styles["asteroid-page__error"]}>
                    <ErrorComponent message="Что-то пошло не так. Попробуйте перезагрузить страницу." />
                </div>
            </div>
        );
    }

    const convertedAsteroid: IFullAsteroid = convertIncomeDataFull(asteroid);
    const { name, diameter, hazardous, approach } = convertedAsteroid;

    return (
        <div className={styles["asteroid-page"]}>
            <div className={styles["asteroid-page__container"]}>
                <div className={styles["asteroid-page__header"]}>{name}</div>
                <AsteroidApproachDescription
                    diameter={diameter || 0}
                    hazardous={hazardous || false}
                />
                <AsteroidApproachList approach={approach || []} />
            </div>
        </div>
    );
}
