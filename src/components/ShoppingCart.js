import "../styles/ShoppingCart.css"
import { useContext, useEffect, useState } from "react"
import { FiShoppingCart } from "react-icons/fi";
import { ShopppingCartContext } from "../contexts/ShoppingCartContext";

export default function ShoppingCart() {

    const { counter } = useContext(ShopppingCartContext)

    const [style, setStyle] = useState('with-zero')

    useEffect(() => {
        if (counter !== 0) setStyle('non-zero')
    }, [counter, style])

    return (
        <div className={`${style}`}>
            <ul>
                <i style={{ padding: 2, fontSize: 24 }}><FiShoppingCart /></i>
                <i style={{ padding: 2, fontSize: 24 }}>{counter}</i>
            </ul>
        </div>
    )
}