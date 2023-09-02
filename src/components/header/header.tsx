import styles from "./header.module.css";

const Header = (): JSX.Element => {
    return (
        <div className={styles["header"]}>
            <div className={styles["header__title"]}>ARMAGEDDON 2023</div>
            <div className={styles["header__subtitle"]}>
                ООО “Команда им. Б. Уиллиса”.
                <br />
                Взрываем астероиды с 1998 года.
            </div>
        </div>
    );
};

export default Header;
