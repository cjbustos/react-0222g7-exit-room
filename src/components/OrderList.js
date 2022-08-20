import { useContext, useState } from "react"
import { BookingContext } from "../contexts/BookingContext"
import '../styles/OrderList.css'

const OrderList = ({ id, active, name }) => {

    //Se agregarán las órdenes al ctx correspondiente
    const { orders } = useContext(BookingContext)

    return (

        <div></div>
    )
}

export default OrderList