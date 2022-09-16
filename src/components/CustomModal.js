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
    const { reserve, navbar } = data;

    // Local variables
    // const today = new Date();
    // let strToday = today.toLocaleDateString('es');

    // Global context
    // const { updateCounter } = useContext(ShopppingCartContext);
    const { dispatch } = useContext(BookingContext);

    // Modal state
    const [isOpen, setIsOpen] = useState(false);
    // For active/inactive inputs
    const [active, setActive] = useState(false);
    const [shopCart, setShopCart] = useState({
        id: uuidv4(),
        episode: name,
        city: '',
        date: '',
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
            ...shopCart, [e.target.name] : e.target.value
        });
    };

    const updateShoppingCart = (order) => {
        //With 'dispatch' to 'reducer'
        dispatch({ type: ACTIONS.ADD_ORDER, payload: order })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert( `Desea realizar la siguiente reserva:
                Sala: ${shopCart.episode} 
                Sucursal: ${shopCart.city} 
                Fecha: ${shopCart.date} 
                Horario: ${shopCart.info}`
                )
        const finalCheck = window.confirm('¿Confirma la reserva?');
        if(!finalCheck){
            return
        } else {
            updateShoppingCart(shopCart)       
            setActive(!active);
        }
    };

    function fillComboLocation(emptyArr) {
        if (navbar) {
            navbar.forEach((item) => {
                if ('location' in item) {
                    for (let location of item.location) {
                        emptyArr.push(location);
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
    const dates = fillComboDates([]);
    const time = fillComboAvailableTime([]);
    const location = fillComboLocation([]);

    return (
        <div>
            <Button className={`button-${sizeButton}`} onClick={toggleModal}>{label}</Button>
            <ReactModal isOpen={isOpen} onRequestClose={toggleModal} className="Modal" overlayClassName="Overlay">
                <h1>{name}</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Seleccionar sucursal:
                        <select defaultValue={shopCart.city} name="city" disabled={active} onChange={handleChange}>
                            <option value={shopCart.city} disabled>Seleccionar opcion</option>
                            {location.map((el, index) => <option key={index} value={el}>{el}</option>)}
                        </select>
                    </label>
                    <label>
                        Seleccionar fecha:
                        <select defaultValue={shopCart.date} name="date" disabled={active} onChange={handleChange}>
                            <option value={shopCart.date} disabled>Seleccionar opcion</option>
                            {dates.map((el, index) => <option key={index} value={el}>{el}</option>)}
                        </select>
                    </label>
                    <label>
                        Seleccionar horario:
                        <select defaultValue={shopCart.info} name="info" disabled={active} onChange={handleChange}>
                            <option value={shopCart.info} disabled>Seleccionar opcion</option>
                            {time.map((el, index) => <option key={index} value={el}>{el}</option>)}
                        </select>
                    </label>
                    <div className="modal-dialog-ok-button">
                        <Button className={`button-${sizeButton}`} type="submit" disabled={active} onClick={handleSubmit}>{label}</Button>
                    </div>
                    <div className="modal-dialog-close-button">
                        <Button className={`button-${sizeButton}`} onClick={handleModalClose}>Cerrar</Button>
                    </div>
                </form>
            </ReactModal>
        </div>
    );
};

export default CustomModal;

/* function fillComboCities(emptyArr) {
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
    } */
