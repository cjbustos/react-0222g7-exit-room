import "../styles/CustomModal.css";
import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import Button from "./Button";
import { BookingContext } from "../contexts/BookingContext";
import useAxios from "../hooks/useAxios";
import { ACTIONS } from "../reducers/orderReducer";
import { v4 as uuidv4 } from 'uuid';

ReactModal.setAppElement("#root");

const CustomModal = ({ name, label, sizeButton }) => {

    const { data } = useAxios("http://localhost:8000/api");
    const { nav, reserve } = data;

    //Local variables
    const today = new Date();
    let strToday = today.toLocaleDateString('es');

    //Global context
    //const { updateCounter } = useContext(ShopppingCartContext);
    const { dispatch } = useContext(BookingContext);

    //Local states
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(false);
    const [shopCart, setShopCart] = useState({
        id: uuidv4(),
        episode: name,
        city: 'Palermo',
        date: strToday,
        info: ''
    })

    if (reserve === undefined) return null;

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const handleModalClose = () => {
        toggleModal();
        // updateCounter();
    };

    const handleChange = (e) => {
        setShopCart({
            ...shopCart,
            [e.target.name] : e.target.value
        });
    };

    const updateShoppingCart = (order) => {
        //uploadOrder(order)
        //With 'dispatch' to 'reducer'
        dispatch({type: ACTIONS.ADD_ORDER, payload: order})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert( `Chequee los datos antes de hacer su reserva:
                Sala: ${shopCart.episode} 
                Sucursal: ${shopCart.city} 
                Fecha: ${shopCart.date} 
                Horario: ${shopCart.info}`
                )
        const finalCheck = window.confirm('Confirma su reserva?');
        if(!finalCheck){
            return
        } else {
            updateShoppingCart(shopCart)       
            setActive(!active);
        }
    };

    function fillComboCities(emptyArr) {
        if (nav) {
            nav.forEach((item) => {
                if (item.id === 2) {
                    for (let city of item.content) {
                        emptyArr.push(city.name);
                    }
                }
            });
        }
        return emptyArr
    }

    function fillComboDates(emptyArr){
        if(reserve){
            reserve.forEach((item) => {
                emptyArr.push(item.date)
            })
        }
        return emptyArr
    }

    function fillComboAvailableTime(emptyArr){
        reserve
        .filter(f => f.date === shopCart.date)
        .map(e => e.info
            .filter(f => f.isFree)
            .map(e => emptyArr.push(e.time))
        )    
        return emptyArr
    }

    //Fill combos
    const cities = fillComboCities([]);
    const dates = fillComboDates([]);
    const time = fillComboAvailableTime([])

    return (
        <div>
            <Button className={`button-${sizeButton}`} onClick={toggleModal}>
                {label}
            </Button>
            <ReactModal isOpen={isOpen} onRequestClose={toggleModal} className="Modal" overlayClassName="Overlay">
                <h1>{name}</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Elija una sucursal:
                        <select value={shopCart.city} name="city" disabled={active} onChange={handleChange}>
                            {cities.map((el, index) => <option key={index} value={el}>{el}</option>)}
                        </select>
                    </label>
                    <label>
                        Elija la fecha:
                        <select value={shopCart.date} name="date" disabled={active} onChange={handleChange}>
                            {dates.map((el, index) => <option key={index} value={el}>{el}</option>)}
                        </select>
                    </label>
                    <label>
                        Elija un horario:
                        <select defaultValue={shopCart.info} name="info" disabled={active} onChange={handleChange}>
                            <option value={shopCart.info} disabled>Select an Option</option>
                            {time.map((el, index) => <option key={index} value={el}>{el}</option>)}
                        </select>
                    </label>
                    <div className="modal-dialog-ok-button">
                        <Button className={`button-${sizeButton}`} type="submit" disabled={active} onClick={handleSubmit}>
                            {label}
                        </Button>
                    </div>
                    <div className="modal-dialog-close-button">
                        <Button className={`button-${sizeButton}`} onClick={handleModalClose}>
                            Cerrar
                        </Button>
                    </div>
                </form>
            </ReactModal>
        </div>
    );
};

export default CustomModal;
