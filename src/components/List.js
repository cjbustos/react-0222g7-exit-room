import { useContext } from "react";
import { BookingContext } from "../contexts/BookingContext";
import "../styles/List.css"
import Order from "./Order";

const List = (props) => {

    const { orderList } = props;
    const { orders } = useContext(BookingContext)

    return (
        <ul id="checkout">
            <li>
                <a href={"#".concat("/")}>{orders.length}</a>
                <ul id="itemList">
                    {orderList.map((elem, index) => {
                        return (
                            <Order key={index} order={elem} />
                        )
                    })}
                </ul>
            </li>
        </ul>
    );
}

export default List;