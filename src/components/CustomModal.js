import "../styles/CustomModal.css";
import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import useAxios from "../hooks/useAxios";
import { ACTIONS } from "../reducers/orderReducer";
import Button from "./Button";
import { BookingContext } from "../contexts/BookingContext";

ReactModal.setAppElement("#root");

const CustomModal = ({ name, label, sizeButton }) => {

  const { data } = useAxios("http://localhost:8000/api");
  const { reserve, navbar } = data;
  const { dispatch } = useContext(BookingContext);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState({
    id: "",
    episode: name,
    city: "",
    date: "",
    info: "",
  });

  if (reserve === undefined) return null;

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const handleModalClose = () => {
    toggleModal();
  };

  const handleChange = (e) => {
    setShoppingCart({
      ...shoppingCart,
      [e.target.name]: e.target.value,
    });
  };

  const updateShoppingCart = (order) => {
    // With 'dispatch' to 'reducer'
    dispatch({ type: ACTIONS.ADD_ORDER, payload: order });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the id
    shoppingCart.id = uuidv4();
    updateShoppingCart(shoppingCart);
    // Close modal
    toggleModal()
  };

  function fillComboLocation(emptyArr) {
    if (navbar) {
      navbar.forEach((item) => {
        if ("location" in item) {
          for (let location of item.location) {
            emptyArr.push(location);
          }
        }
      });
    }
    return emptyArr;
  }

  function fillComboDates(emptyArr) {
    if (reserve) {
      reserve.forEach((item) => {
        emptyArr.push(item.date);
      });
    }
    return emptyArr;
  }

  function fillComboAvailableTime(emptyArr) {
    reserve
      .filter((f) => f.date === shoppingCart.date)
      .map((e) =>
        e.info.filter((f) => f.isFree).map((e) => emptyArr.push(e.time))
      );
    return emptyArr;
  }

  //Fill combos
  const dates = fillComboDates([]);
  const time = fillComboAvailableTime([]);
  const location = fillComboLocation([]);

  return (
    <div>
      <Button className={`button-${sizeButton}`} onClick={toggleModal}>
        {label}
      </Button>
      <ReactModal isOpen={isOpen} onRequestClose={toggleModal} className="Modal" overlayClassName="Overlay">
        <form onSubmit={handleSubmit}>
          <div className="box-content">
            <h1 className="box-name">{name}</h1>
            <select defaultValue={shoppingCart.city} name="city" onChange={handleChange}>
              <option value={shoppingCart.city} disabled>Seleccione sucursal</option>
              {location.map((location, index) => (
                <option key={index} value={location}>{location}</option>
                  ))}
            </select>
            <select defaultValue={shoppingCart.date} name="date" onChange={handleChange}>
              <option value={shoppingCart.date} disabled>Seleccione fecha</option>
              {dates.map((date, index) => (
                <option key={index} value={date}>{date}</option>
                  ))}
            </select>
            <select defaultValue={shoppingCart.info} name="info" onChange={handleChange}>
              <option value={shoppingCart.info} disabled>Seleccionar opcion</option>
              {time.map((time, index) => (
                <option key={index} value={time}>{time}</option>
                  ))}
            </select>
          </div>
          <div className="modal-dialog-ok-button">
            <Button className={`button-${sizeButton}`} type="submit" onClick={handleSubmit}>{label}</Button>
          </div>
          <div className="modal-dialog-close-button">
            <Button className={`button-${sizeButton}`} onClick={handleModalClose}>CERRAR</Button>
          </div>
        </form>
      </ReactModal>
    </div>
  );
};

export default CustomModal;
