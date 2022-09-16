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
            <ul>
                <li style={{ padding: 2, fontSize: 24 }}><FiShoppingCart onMouseOver={() => display()} /></li>
                {/* <li style={{ padding: 2, fontSize: 24 }}>{orders.length}</li> */}
                {
                    showOrders && <List orderList={orders} />
                }
            </ul>
        </div>
    )
}