import useAsteroids from "@/utils/hooks/useAsteroids";
import AsteroidCard from "../asteroidCard/asteroidCard";
import AsteroidListHeader from "../asteroidListHeader/asteroidListHeader";
import Loader from "../loader/loader";
import { IPartAsteroid } from "@/types/asteroid";
import styles from "./asteroidList.module.css";
import Error from "../error/error";

interface IProps {
    cart: { [id: number]: IPartAsteroid };
    addToCart: (asteroid: IPartAsteroid) => void;
    deleteFromCart: (id: number) => void;
}

const AsteroidList = ({
    cart,
    addToCart,
    deleteFromCart,
}: IProps): JSX.Element => {
    const {
        currentData,
        measurement,
        error,
        isLoading,
        handleScroll,
        toggleIsLunar,
    } = useAsteroids();

    return (
        <div onScroll={handleScroll} className={styles["asteroid-list"]}>
            <AsteroidListHeader
                toggleIsLunar={toggleIsLunar}
                measurement={measurement}
            />
            {currentData.data.length !== 0 ? (
                currentData.data.map((el: IPartAsteroid, index: number) => {
                    return (
                        <AsteroidCard
                            key={+el.id + index}
                            asteroid={el}
                            measurement={measurement}
                            cart={cart}
                            isInCart={false}
                            addToCart={addToCart}
                            deleteFromCart={deleteFromCart}
                        />
                    );
                })
            ) : (
                <Error message={error || ""} />
            )}
            {isLoading && (
                <div className={styles["loader-container"]}>
                    <Loader />
                </div>
            )}
        </div>
    );
};

export default AsteroidList;
