type PickAndFlattenType = any[];

export function pickAndFlatten<T extends Object, K extends keyof T>(
    obj: T,
    keys: K[]
): PickAndFlattenType {
    const array: any[] = [];

    Object.entries(obj)
        .filter(([k, _]) => keys.includes(k as K))
        .forEach(([_, v]) => {
            if (Array.isArray(v)) {
                array.push(...v);
            } else {
                array.push(v);
            }
        });

    return array as any[];
}
