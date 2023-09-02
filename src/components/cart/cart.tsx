import { useRouter } from "next/navigation";
import { getEnding } from "@/utils/helpers/getEnding";
import styles from "./cart.module.css";

interface IProps {
    cart: any;
}

const Cart = ({ cart }: IProps): JSX.Element => {
    const count = cart ? Object.keys(cart).length : 0;
    const router = useRouter();
    const handleClick = (event: React.UIEvent<HTMLElement>) => {
        event.preventDefault();
        router.push(`/cart`);
    };

    return (
        <div className={styles["cart"]}>
            <div className={styles["cart__info"]}>
                <span className={styles["cart__info__title"]}>Корзина</span>
                <br />
                <span className={styles["cart__info__count"]}>
                    {`${count} ${getEnding(count, [
                        "астероид",
                        "астероида",
                        "астероидов",
                    ])}`}
                </span>
            </div>
            <button onClick={handleClick} className={styles["cart__button"]}>
                Отправить
            </button>
        </div>
    );
};

export default Cart;
