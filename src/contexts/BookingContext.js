import { createContext, useState } from "react";

export const BookingContext = createContext()

const BookingContextProvider = (props) => {

    const [orders, setOrders] = useState(['order1', 'order2', 'order3'])

    return (
        <BookingContext.Provider value={{ orders, setOrders }}>
            {props.children}
        </BookingContext.Provider>
    )
}

export default BookingContextProvider

/* 
{
    id: 0,
    episodeName: 'Without name!',
    cityName: 'Buenos Aires',
    playingDate: '',
    numberOfPlayers: 2,
    reserveDate: ''
} */