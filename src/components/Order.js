const Order = (props) => {

    const { order } = props;

    return (
        <li>{order.episode}</li>
    );
}

export default Order;