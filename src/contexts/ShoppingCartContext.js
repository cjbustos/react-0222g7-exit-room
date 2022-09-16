import { createContext, useState } from "react";

export const ShopppingCartContext = createContext();

const ShoppingCartContextProvider = (props) => {

    //const [counter, setCounter] = useState(0);
    //const updateCounter = () => setCounter((prevState) => prevState + 1);

    const [showOrders, setShowOrders] = useState(false);
    const display = () => setShowOrders(!showOrders)

    return (
        <ShopppingCartContext.Provider value={{ showOrders, display }}>
            {props.children}
        </ShopppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider
