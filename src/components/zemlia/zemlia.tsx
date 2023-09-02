import Image from "next/image";
import styles from "./zemlia.module.css";

const Zemlia = (): JSX.Element => {
    return (
        <Image
            className={styles["main-image"]}
            width={400}
            height={620}
            src={"/planeta_zemlia_kosmos_lg.png"}
            alt=""
        />
    );
};

export default Zemlia;
