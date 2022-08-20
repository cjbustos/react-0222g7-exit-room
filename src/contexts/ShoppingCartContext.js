import { createContext, useState } from "react";

export const ShopppingCartContext = createContext();

const ShoppingCartContextProvider = (props) => {

    const [counter, setCounter] = useState(0);
    const updateCounter = () => setCounter((prevState) => prevState + 1);

    return (
        <ShopppingCartContext.Provider value={{ counter, updateCounter }}>
            {props.children}
        </ShopppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider
