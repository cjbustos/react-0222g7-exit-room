import { createContext, useReducer} from "react";
import orderReducer from "../reducers/orderReducer";

export const BookingContext = createContext()

const BookingContextProvider = (props) => {

    //----With 'state' implementation----
    //const [orders, setOrders] = useState([])
    //const uploadOrder = (obj) => setOrders([...orders, obj])

    //----With 'reducer' implementation----
    const [orders, dispatch] = useReducer(orderReducer, [])

    return (
        <BookingContext.Provider value={{ orders, dispatch }}>
            {props.children}
        </BookingContext.Provider>
    )
}

export default BookingContextProvider