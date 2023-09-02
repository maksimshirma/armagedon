import { useEffect, useState } from "react";
import { fetchAsteroids, fetchAsteroidsType } from "../helpers/fetchAsteroids";
import { pickAndFlatten } from "../helpers/pickAndFlatten";
import { debounce } from "../helpers/debounce";
import { MeasurementType } from "@/types/asteroid";

interface IData {
    next: string;
    data: any[];
}

const useAsteroids = (): {
    currentData: IData;
    measurement: MeasurementType;
    error: string | null;
    isLoading: boolean;
    handleScroll: (prop: React.UIEvent<HTMLElement>) => Promise<void>;
    toggleIsLunar: (prop: React.UIEvent<HTMLElement>) => void;
    fetchData: (prop: string) => Promise<void>;
} => {
    const [currentData, setCurrentData] = useState<IData>({
        next: "",
        data: [],
    });
    const [measurement, setMeasurement] = useState<MeasurementType>("lunar");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const debouncedFetchAsteroids = debounce<fetchAsteroidsType>(
        fetchAsteroids,
        10000
    );

    const fetchData = async (next: string): Promise<void> => {
        const response = await debouncedFetchAsteroids(next);
        if (response && typeof response !== "string") {
            let data = response.data;

            if (!Array.isArray(data)) {
                data = pickAndFlatten<typeof data, keyof typeof data>(
                    data,
                    Object.keys(data)
                );
            }

            setCurrentData((prevState) => ({
                next: response.next,
                data: [...prevState.data, ...data],
            }));
        } else if (typeof response === "string") {
            setError(response);
        }
    };

    const handleScroll = async (
        event: React.UIEvent<HTMLElement>
    ): Promise<void> => {
        event.preventDefault();
        const element = event.currentTarget;

        const height = element.scrollHeight;
        const screenHeight = element.clientHeight;

        const threshold = height - screenHeight / 4;

        const scrolled = element.scrollTop;

        const position = scrolled + screenHeight;

        if (position >= threshold) {
            await fetchData(currentData.next).catch(console.error);
        }
    };

    const toggleIsLunar = (event: React.UIEvent<HTMLElement>): void => {
        event.preventDefault();
        const element = event.currentTarget;
        setMeasurement(element.dataset.id === "lunar" ? "lunar" : "km");
    };

    useEffect(() => {
        (async () => {
            await fetchData(currentData.next).catch(console.error);
        })();
        setIsLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        currentData,
        measurement,
        error,
        isLoading,
        handleScroll,
        toggleIsLunar,
        fetchData,
    };
};

export default useAsteroids;
