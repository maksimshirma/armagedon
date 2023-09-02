import { useCallback, useState, useEffect } from "react";
import { IPartAsteroid } from "@/types/asteroid";
import { pickAndFlatten } from "../helpers/pickAndFlatten";

const useCart = (): {
    addToCart: (prop: IPartAsteroid) => void;
    deleteFromCart: (prop: number) => void;
    clearCart: () => void;
    cart: {
        [id: number]: IPartAsteroid;
    };
    arrayCart: IPartAsteroid[];
    isLoading: boolean;
} => {
    const [cart, setCart] = useState<{
        [id: number]: IPartAsteroid;
    }>({});
    const [arrayCart, setArrayCart] = useState<IPartAsteroid[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const addToCart = useCallback((asteroid: IPartAsteroid) => {
        const cart = JSON.parse(sessionStorage.getItem("cart") as any);
        const newCart = { ...cart, [asteroid.id]: asteroid };
        setCart(newCart);
        sessionStorage.setItem("cart", JSON.stringify(newCart));
    }, []);

    const deleteFromCart = useCallback((id: number) => {
        const { [id]: _, ...newCart } = JSON.parse(
            sessionStorage.getItem("cart") as any
        );
        setCart(newCart);
        sessionStorage.setItem("cart", JSON.stringify(newCart));
    }, []);

    const clearCart = useCallback(() => {
        sessionStorage.removeItem("cart");
    }, []);

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("cart") as any);
        if (data) {
            setArrayCart(
                pickAndFlatten<typeof data, keyof typeof data>(
                    data,
                    Object.keys(data)
                )
            );
            setCart(data);
        }
        setIsLoading(false);
    }, []);

    return {
        addToCart,
        deleteFromCart,
        clearCart,
        cart,
        arrayCart,
        isLoading,
    };
};

export default useCart;
