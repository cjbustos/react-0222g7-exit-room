import "../styles/ShoppingCart.css"
import { useContext } from "react"
import { ShopCartContext } from "../App"

export default function ShoppingCart() {

    const { count } = useContext(ShopCartContext)

    return (
        <li>{count}</li>
    )
}