import AsteroidApproachDescription from "@/components/asteroidApproachDescription/asteroidApproachDescription";
import AsteroidApproachList from "@/components/asteroidApproachList/asteroidApproachList";
import { convertIncomeDataFull } from "@/utils/helpers/convertIncomeData";
import { IFullAsteroid } from "@/types/asteroid";
import styles from "./page.module.css";
import Error from "@/components/error/error";

export default async function Asteroid(props: {
    params: { slug: string };
}): Promise<JSX.Element> {
    const { slug } = props.params;

    const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${slug}?api_key=DEMO_KEY`,
        { cache: "no-cache" }
    );
    const asteroid = await response.json();

    const isError: boolean = asteroid.hasOwnProperty("error");

    let name, diameter, hazardous, approach;

    if (!isError) {
        const convertedAsteroid: IFullAsteroid =
            convertIncomeDataFull(asteroid);
        name = convertedAsteroid.name;
        diameter = convertedAsteroid.diameter;
        hazardous = convertedAsteroid.hazardous;
        approach = convertedAsteroid.approach;
    }

    return (
        <div className={styles["asteroid-page"]}>
            {isError ? (
                <div className={styles["asteroid-page__error"]}>
                    <Error message="Что-то пошло не так. Попробуйте перезагрузить страницу." />
                </div>
            ) : (
                <div className={styles["asteroid-page__container"]}>
                    <div className={styles["asteroid-page__header"]}>
                        {name}
                    </div>
                    <AsteroidApproachDescription
                        diameter={diameter || 0}
                        hazardous={hazardous || false}
                    />
                    <AsteroidApproachList approach={approach || []} />
                </div>
            )}
        </div>
    );
}
