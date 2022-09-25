import "../styles/ShoppingCart.css"
import { useContext, useEffect, useState } from "react"
import { FiShoppingCart } from "react-icons/fi";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { BookingContext } from "../contexts/BookingContext";
import { ACTIONS } from "../reducers/orderReducer";

export default function ShoppingCart() {

  const { orders, dispatch } = useContext(BookingContext)
  const [style, setStyle] = useState('with-zero')

  useEffect(() => {
    orders.length !== 0 ? setStyle('non-zero') : setStyle('with-zero')
  }, [orders, style])

  const deleteOrder = (id) => {
    dispatch({ type: ACTIONS.REMOVE_ORDER, payload: id });
  };

  return (
    <div className={`${style}`}>
      <div className="shop-container">
        <div>
          <li className="dropdown">
            <ol className="list">
              <a href={"#".concat("/")}>
                {<FiShoppingCart className="shop-cart-icon" />}
              </a>
              {
                <div className="dropdown-content">
                  {orders.map((e, index) => (
                    <a key={index} href={"#".concat("/")}>
                      {e.episode}
                      {e.date}
                      <RiDeleteBin7Fill color="grey" onClick={() => deleteOrder(e.id)} />
                    </a>
                  ))}
                </div>
              }
            </ol>
          </li>
        </div>
        <div className={`${style}`}>
          <div className="shop-number">{orders.length}</div>
        </div>
      </div>
    </div>
  );
}