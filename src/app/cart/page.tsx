"use client";
import AsteroidCard from "@/components/asteroidCard/asteroidCard";
import { IPartAsteroid } from "@/types/asteroid";
import Loader from "@/components/loader/loader";
import useCart from "@/utils/hooks/useCart";
import styles from "./page.module.css";

export default function Cart(): JSX.Element {
    const { arrayCart: cart, isLoading, clearCart } = useCart();

    if (!isLoading) {
        clearCart();
    }

    return (
        <div className={styles["cart"]}>
            <div className={styles["cart__list"]}>
                {cart.length !== 0 ? (
                    <>
                        <div className={styles["cart__header"]}>
                            Заказ отправлен!
                        </div>
                        {cart.map((el: IPartAsteroid, index: number) => {
                            return (
                                <AsteroidCard
                                    key={+el.id + index}
                                    asteroid={el}
                                    measurement={"lunar"}
                                    cart={cart}
                                    isInCart={true}
                                />
                            );
                        })}
                    </>
                ) : (
                    <div className={styles["cart__header"]}>Корзина пуста!</div>
                )}
                {isLoading && (
                    <div className={styles["loader-container"]}>
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
}
