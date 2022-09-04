import "../styles/ShoppingCart.css"
import { useContext, useEffect, useState } from "react"
import { FiShoppingCart } from "react-icons/fi";
import { BookingContext } from "../contexts/BookingContext";

export default function ShoppingCart() {

    const { orders } = useContext(BookingContext)

    const [style, setStyle] = useState('with-zero')

    useEffect(() => {
        if (orders.length !== 0) setStyle('non-zero')
    }, [orders, style])

    return (
        <div className={`${style}`}>
            <ul>
                <i style={{ padding: 2, fontSize: 24 }}><FiShoppingCart onClick={() => console.log(orders)} /></i>
                <i style={{ padding: 2, fontSize: 24 }}>{orders.length}</i>
            </ul>
        </div>
    )
}