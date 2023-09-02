import type { Metadata } from "next";
import styles from "./layout.module.css";

export const metadata: Metadata = {
    title: "Ваш заказ",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles["layout"]}>
            <div className={styles["layout__content"]}>{children}</div>
            <footer className={styles["layout__footer"]}>
                © Все права и планета защищены
            </footer>
        </div>
    );
}
