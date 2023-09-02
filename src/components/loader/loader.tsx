import styles from "./loader.module.css";

const Loader = (): JSX.Element => {
    return (
        <div className={styles["lds-roller"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
