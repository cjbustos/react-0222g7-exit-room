import "../styles/ShoppingCart.css"
import { useContext, useEffect, useState } from "react"
import { FiShoppingCart } from "react-icons/fi";
import { BookingContext } from "../contexts/BookingContext";
import { ShopppingCartContext } from "../contexts/ShoppingCartContext";
import CustomModal from "./CustomModal";

export default function ShoppingCart() {

    const { orders } = useContext(BookingContext)
    //const { showOrders, display } = useContext(ShopppingCartContext);
    const [style, setStyle] = useState('with-zero')

    //const arrTest = ["Item1", "Item2", "Item3", "Item4", "Item5"]

    console.log(orders)

    useEffect(() => {
        if (orders.length !== 0) setStyle('non-zero')
    }, [orders, style])

    return (
      <div className="shop-container">
        <div>
          <li className="dropdown">
            <ol className="list">
              <a href={"#".concat("/")}>
                {<FiShoppingCart className="shop-cart-icon" />}
              </a>
              {/* <FiShoppingCart className="shop-cart-icon" /> */}
              {
                <div className="dropdown-content">
                  {orders.map((e) => (
                    <a key={e} href={"#".concat("/")}>
                      {e.episode}
                    </a>
                  ))}
                </div>
              }
            </ol>
          </li>
        </div>
        <div>
          <div className="shop-number">{orders.length}</div>
        </div>
      </div>
    );
}

{/* <div className="shop-cart">
    <div className={`${style}`}>
        <div className="shop-number">{count}</div>
        <FiShoppingCart className="shop-cart-icon" />
    </div>
</div> */}

//showOrders && <List list={orders} />
/*<div className={`${style}`}>
    <div className="shop-number">{orders.length}</div>
    <li><FiShoppingCart /></li>
</div>*/