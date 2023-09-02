import styles from "./asteroidApproachDescription.module.css";

interface IProps {
    diameter: number;
    hazardous: boolean;
}

const AsteroidDescription = ({ diameter, hazardous }: IProps): JSX.Element => {
    return (
        <div className={styles["description"]}>
            <div>Диаметр: Ø {diameter} м</div>
            <div>
                {hazardous ? (
                    <>
                        <span>⚠</span> Опасен
                    </>
                ) : (
                    <>Не опасен</>
                )}
            </div>
        </div>
    );
};

export default AsteroidDescription;
