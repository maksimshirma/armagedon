import { useRouter } from "next/navigation";
import Image from "next/image";
import { getEnding } from "@/utils/helpers/getEnding";
import { IPartAsteroid, MeasurementType } from "@/types/asteroid";
import styles from "./asteroidCard.module.css";

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
    asteroid: IPartAsteroid;
    measurement: MeasurementType;
    cart: { [id: number]: IPartAsteroid };
    isInCart: boolean;
    addToCart?: (asteroid: IPartAsteroid) => void;
    deleteFromCart?: (id: number) => void;
}

const AsteroidCard = ({
    asteroid,
    measurement,
    cart,
    isInCart,
    addToCart,
    deleteFromCart,
}: IProps): JSX.Element => {
    const {
        id,
        name,
        missDistanceLunar,
        missDistanceKilometers,
        diameter,
        hazardous,
        date,
    } = asteroid;

    const [year, month, day] = date.split("-");

    const router = useRouter();

    const handleClick = (event: React.UIEvent<HTMLElement>) => {
        event.preventDefault();
        router.push(`/${id}`);
    };

    return (
        <div className={styles["asteroid"]}>
            <div className={styles["asteroid__header"]}>{`${day} ${
                months[parseInt(month)]
            } ${year}`}</div>
            <div className={styles["asteroid__info"]}>
                <div className={styles["asteroid__miss__distance"]}>
                    {measurement === "lunar"
                        ? `${missDistanceLunar.toLocaleString()} ${getEnding(
                              missDistanceLunar,
                              ["лунная орбита", "лунные орбиты", "лунных орбит"]
                          )}`
                        : `${missDistanceKilometers.toLocaleString()} ${getEnding(
                              missDistanceKilometers,
                              ["километр", "километра", "километров"]
                          )}`}
                    <div></div>
                </div>
                <div className={styles["asteroid__image"]}>
                    <Image
                        width={diameter > 200 ? 50 : 35}
                        height={diameter > 200 ? 50 : 35}
                        src={"/asteroid.png"}
                        alt=""
                    />
                </div>
                <div className={styles["asteroid__description"]}>
                    <div
                        onClick={handleClick}
                        className={styles["asteroid__description__name"]}
                    >
                        {name}
                    </div>
                    <div className={styles["asteroid__description__diameter"]}>
                        Ø {diameter} м
                    </div>
                </div>
            </div>
            <div className={styles["asteroid__action"]}>
                {!isInCart && (
                    <button
                        onClick={() => {
                            if (deleteFromCart && addToCart) {
                                if (cart?.hasOwnProperty(asteroid.id)) {
                                    deleteFromCart(asteroid.id);
                                } else {
                                    addToCart(asteroid);
                                }
                            }
                        }}
                        className={styles["asteroid__button"]}
                    >
                        {cart?.hasOwnProperty(asteroid.id)
                            ? "В корзине"
                            : "Заказать"}
                    </button>
                )}

                {hazardous ? (
                    <div className={styles["asteroid__hazardous"]}>
                        <span>⚠</span> Опасен
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default AsteroidCard;
