import Image from "next/image";
import { getEnding } from "@/utils/helpers/getEnding";
import styles from "./asteroidApproachCard.module.css";

const months = [
    "янв",
    "февр",
    "март",
    "апр",
    "май",
    "июнь",
    "июль",
    "авг",
    "сент",
    "окт",
    "нояб",
    "дек",
];

interface IProps {
    date: string;
    relativeVelocity: number;
    missDistanceKilometers: number;
    missDistanceLunar: number;
    orbit: string;
}

const AsteroidApproachCard = ({ props }: { props: IProps }): JSX.Element => {
    const {
        date,
        relativeVelocity,
        missDistanceKilometers,
        missDistanceLunar,
        orbit,
    } = props;

    const [year, month, day] = date.split("-");
    return (
        <div className={styles["asteroid-approach"]}>
            <div className={styles["asteroid-approach__header"]}>{`${day} ${
                months[parseInt(month)]
            } ${year}`}</div>
            <div className={styles["asteroid-approach__description"]}>
                <p>Скорость: {relativeVelocity} км/ч</p>
                <p>Центр орбиты: {orbit}</p>
            </div>
            <div className={styles["asteroid-approach__distance"]}>
                <Image width={50} height={50} src={"/zemlia.png"} alt="" />
                <div className={styles["asteroid-approach__distance__values"]}>
                    <p>
                        {`${missDistanceLunar.toLocaleString()} ${getEnding(
                            missDistanceLunar,
                            ["лунная орбита", "лунные орбиты", "лунных орбит"]
                        )}`}
                    </p>
                    <div />
                    <p>
                        {`${missDistanceKilometers.toLocaleString()} ${getEnding(
                            missDistanceKilometers,
                            ["километр", "километра", "километров"]
                        )}`}
                    </p>
                </div>
                <Image width={50} height={50} src={"/asteroid.png"} alt="" />
            </div>
        </div>
    );
};

export default AsteroidApproachCard;
