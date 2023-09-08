import { convertDateToString } from "@/utils/helpers/convertDateToString";
import { debounce } from "@/utils/helpers/debounce";
import { getEnding } from "@/utils/helpers/getEnding";
import { pickAndFlatten } from "@/utils/helpers/pickAndFlatten";

describe("helpers", () => {
    test("convertDateToString should return the correct date", () => {
        const date = new Date(1694189257638);
        const convertedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        expect(convertDateToString(date)).toBe(convertedDate);
    });

    test("debounce should block calls if timer is not over", async () => {
        let fn = jest.fn();
        const debouncedFn = debounce(fn, 1000);
        debouncedFn();
        await new Promise((res) => {
            setTimeout(() => {
                res(debouncedFn());
            }, 500);
        });
        expect(fn.mock.calls).toHaveLength(1);
    });

    test("debounce should call if timer is over", async () => {
        let fn = jest.fn();
        const debouncedFn = debounce(fn, 1000);
        debouncedFn();
        await new Promise((res) => {
            setTimeout(() => {
                res(debouncedFn());
            }, 1500);
        });
        expect(fn.mock.calls).toHaveLength(2);
    });

    test("getEnding should return right ending", () => {
        const endings = ["километр", "километра", "километров"];
        expect(getEnding(1, endings)).toBe("километр");
        expect(getEnding(2, endings)).toBe("километра");
        expect(getEnding(5, endings)).toBe("километров");
    });

    test("pickAndFlatten should return valid array", () => {
        const obj: any = {
            a: [1, 2, 3, 4],
            b: 5,
            c: [6, 7],
        };
        expect(
            pickAndFlatten<typeof obj, keyof typeof obj>(obj, Object.keys(obj))
        ).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});
