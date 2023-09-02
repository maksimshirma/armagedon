export const debounce = <T extends Function>(callback: T, ms: number): T => {
    let isCooldown = false;

    return <any>function (this: any, ...args: any[]) {
        if (isCooldown) return null;

        const response = callback.apply(this, args);

        isCooldown = true;

        setTimeout(() => (isCooldown = false), ms);

        return response;
    };
};
