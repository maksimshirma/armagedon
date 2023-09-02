import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description:
        "онлайн-сервис по мониторингу и уничтожению опасных астероидов",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
