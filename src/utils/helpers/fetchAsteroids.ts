import { convertDateToString } from "./convertDateToString";
import { convertIncomeDataPart } from "./convertIncomeData";
import { IPartAsteroid } from "@/types/asteroid";
import { pickAndFlatten } from "./pickAndFlatten";

export type fetchAsteroidsType = (next: string) => Promise<
    | {
          data: any;
          next: string;
      }
    | string
>;

enum ERROR_CODES {
    "OVER_RATE_LIMIT" = "Простите, количество обращений ограничено. Попробуйте позже.",
}

export const fetchAsteroids: fetchAsteroidsType = async (next) => {
    try {
        let response = null;
        let data = null;
        let date = null;
        let nextDate = null;
        let url = next;

        if (next === "") {
            date = new Date();
            nextDate = new Date(date.getTime() + 86400000);

            date = convertDateToString(date);
            nextDate = convertDateToString(nextDate);

            url = `http://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${nextDate}&detailed=false&api_key=DEMO_KEY`;
        }

        data = window.sessionStorage.getItem(url);
        if (data) {
            return JSON.parse(data);
        }

        response = await fetch(url, { cache: "no-store" }).then((res) =>
            res.json()
        );
        if (response.hasOwnProperty("error")) {
            return ERROR_CODES[response.error.code as keyof typeof ERROR_CODES];
        }

        data = response.near_earth_objects;

        data = pickAndFlatten<typeof data, keyof typeof data>(
            data,
            Object.keys(data)
        ).map((asteroid: any) => convertIncomeDataPart(asteroid));

        const newData: {
            data: IPartAsteroid[];
            next: string;
        } = {
            data: data,
            next: response.links.next,
        };

        window.sessionStorage.setItem(url, JSON.stringify(newData));

        return newData;
    } catch (error) {
        console.log((error as Error).message);
    }
};
