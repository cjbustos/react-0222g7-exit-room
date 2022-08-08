import "../styles/ShoppingCart.css"
import { useContext } from "react"
import { ShopCartContext } from "../App"

export default function ShoppingCart() {

    const { count } = useContext(ShopCartContext)

    return (
        <div className="counter">
            <li>{count}</li>
        </div>
    )
}