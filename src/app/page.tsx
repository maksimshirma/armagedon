"use client";
import AsteroidList from "@/components/asteroidList/asteroidList";
import Cart from "@/components/cart/cart";
import useCart from "@/utils/hooks/useCart";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
    const { cart, addToCart, deleteFromCart } = useCart();

    return (
        <div className={styles["container"]}>
            <div className={styles["list"]}>
                <AsteroidList
                    cart={cart}
                    addToCart={addToCart}
                    deleteFromCart={deleteFromCart}
                />
            </div>
            <div className={styles["cart"]}>
                <Cart cart={cart} />
            </div>
        </div>
    );
}
