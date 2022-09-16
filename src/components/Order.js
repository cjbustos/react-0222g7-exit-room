import { ImBin } from "react-icons/im"

const Order = (props) => {

    const { order } = props;

    return (
        <div>
            <li>{order.episode}</li>
            <ImBin onClick={() => console.log(order.date)} />
            <br />
        </div>
    );
}

export default Order;