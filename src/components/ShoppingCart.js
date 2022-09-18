import "../styles/ShoppingCart.css"
import { useContext, useEffect, useState } from "react"
import { FiShoppingCart } from "react-icons/fi";
import { BookingContext } from "../contexts/BookingContext";
import { ShopppingCartContext } from "../contexts/ShoppingCartContext";
import List from "./List";

export default function ShoppingCart() {

    const { orders } = useContext(BookingContext)
    const { showOrders, display } = useContext(ShopppingCartContext);

    const [style, setStyle] = useState('with-zero')

    useEffect(() => {
        if (orders.length !== 0) setStyle('non-zero')
    }, [orders, style])

    return (
        <div className={`${style}`}>
            <li><FiShoppingCart onClick={() => display()} />
            <li>{orders.length}</li>
                {
                    showOrders && <List list={orders} />
                }
            </li>
        </div>
    )
}