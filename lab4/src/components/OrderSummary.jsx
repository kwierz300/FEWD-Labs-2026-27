import { useContext } from "react";
import OrderContext from "./OrderContext";

export default function OrderSummary() {
    const [order, setOrder] = useContext(OrderContext);

    const removeItem = (event, index) => {
        setOrder(previous => previous.filter((item, itemIndex) => itemIndex !== index));
    };

    return (
        <section className="border rounded p-3">
            <h2>Your Order</h2>
            {order.length === 0 ? <p>No items selected.</p> : (
                <>
                    <p className="text-secondary">Click an item to remove it.</p>
                    <ul className="list-group">
                        {order.map((item, index) => (
                            <li className="order-list list-group-item p-0" key={index}>
                                <button type="button" className="btn w-100 text-start"
                                    onClick={event => removeItem(event, index)}>
                                    {item} <span className="float-end" aria-hidden="true">×</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
}
