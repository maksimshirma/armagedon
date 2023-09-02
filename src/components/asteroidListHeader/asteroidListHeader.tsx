import { MeasurementType } from "@/types/asteroid";
import styles from "./asteroidListHeader.module.css";

interface IProps {
    toggleIsLunar: (event: React.UIEvent<HTMLElement>) => void;
    measurement: MeasurementType;
}

const AsteroidListHeader = ({
    toggleIsLunar,
    measurement,
}: IProps): JSX.Element => {
    return (
        <div className={styles["asteroid-list-header"]}>
            <div className={styles["asteroid-list-header__title"]}>
                Ближайшие подлёты астероидов
            </div>
            <div className={styles["asteroid-list-header__subtitle"]}>
                <span
                    data-id="km"
                    onClick={toggleIsLunar}
                    className={measurement === "km" ? styles["active"] : ""}
                >
                    в километрах
                </span>
                <span>|</span>
                <span
                    data-id="lunar"
                    onClick={toggleIsLunar}
                    className={measurement === "lunar" ? styles["active"] : ""}
                >
                    в лунных арбитах
                </span>
            </div>
        </div>
    );
};

export default AsteroidListHeader;
