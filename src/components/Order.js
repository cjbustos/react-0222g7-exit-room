import { useState } from "react";
import useAxios from "../hooks/useAxios";
import "../styles/Order.css";

function Order({ name }) {
  const { data } = useAxios("http://localhost:8000/api");
  const { nav, reserve } = data;

  const today = new Date();
  let strToday = today.toLocaleDateString('es');

  const [update, setUpdate] = useState("");
  const [date, setDate] = useState(strToday);

  if (reserve === undefined) return null;

  const handleDate = (e) => {
    console.log(e.target.value);
    setUpdate(e.target.value);
  };

  const handleTime = (e) => {
    console.log(e.target.value);
  };

  const handleCity = (e) => {
    console.log(e.target.value);
  };

  const loadCities = () => {
    const options = [];
    nav.forEach((obj) => {
      if (obj.id === 2) {
        obj.content.forEach((item) => {
          options.push(item.name);
        });
      }
    });
    return options;
  };

  const cities = loadCities();

  return (
    <div>
      <label>Sala:{name}</label>
      <br />
      <label>Ciudad:</label>
      <select name="orders" id="orders" onChange={handleCity}>
      <option value="" selected disabled hidden>Elige una opción</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <label>Fecha:</label>
      <select name="date" id="date" onChange={handleDate}>
        <option value="" selected disabled hidden>Elige una opción</option>
        {reserve.map((item, index) => (
          <option key={index} value={item.date}>
            {item.date}
          </option>
        ))}
      </select>
      <label>Horario: </label>
      <select name="time" id="time" onChange={handleTime}>
      <option value="" selected disabled hidden>Elige una opción</option>
        {reserve
          .filter((f) => f.date === update)
          .map((i) =>
            i.info.map((s, index) => (
              <option key={index} value={s.time}>
                {s.time}
              </option>
            ))
          )}
      </select>
    </div>
  );
}

export default Order;
