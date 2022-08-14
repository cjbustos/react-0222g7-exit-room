import "../styles/ShoppingCart.css"
import { useContext, useEffect, useState } from "react"
import { ShopCartContext } from "../App"
import { FiShoppingCart } from "react-icons/fi";

export default function ShoppingCart() {

    const { count } = useContext(ShopCartContext)

    const [style, setStyle] = useState('with-zero')

    useEffect(() => {
        if (count !== 0) setStyle('non-zero')
    }, [count, style])

    return (
        <div className="shop-cart">
            <div className={`${style}`}>
                <div className="shop-number">{count}</div>
                <FiShoppingCart className="shop-cart-icon" />
            </div>
        </div>
    )
}