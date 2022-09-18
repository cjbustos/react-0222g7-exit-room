import Order from "./Order";

const List = (props) => {

    const { list: orderList } = props;

    return (
        <ul>
            {orderList.map((elem, index) => {
                return (
                    <Order key={index} order={elem} />
                )
            })}
        </ul>
    );
}

export default List;