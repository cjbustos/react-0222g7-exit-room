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
        <div className={`${style}`}>
            <FiShoppingCart size={22}/>
            {count}
        </div>
    )
}