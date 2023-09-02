import styles from "./error.module.css";

interface IProp {
    message: string;
}

const Error = ({ message }: IProp): JSX.Element => (
    <div className={styles["error"]}>{message}</div>
);

export default Error;
