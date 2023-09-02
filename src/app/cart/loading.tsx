import Loader from "@/components/loader/loader";
import styles from "./loader.module.css";

export default function Loading(): JSX.Element {
    return (
        <div className={styles["container"]}>
            <Loader />
        </div>
    );
}
