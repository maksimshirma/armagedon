import AsteroidApproachCard from "../asteroidApproachCard/asteroidApproachCard";
import { IApproach } from "@/types/asteroid";
import styles from "./asteroidApproachList.module.css";

interface IProps {
    approach: IApproach[];
}

const AsteroidApproachList = ({ approach }: IProps): JSX.Element => {
    return (
        <div className={styles["approaches"]}>
            <div className={styles["approaches__header"]}>
                Список всех приближений:
            </div>
            <div className={styles["approaches__list"]}>
                {approach &&
                    approach.map((element, index) => (
                        <AsteroidApproachCard
                            key={element.date + index}
                            props={element}
                        />
                    ))}
            </div>
        </div>
    );
};

export default AsteroidApproachList;
