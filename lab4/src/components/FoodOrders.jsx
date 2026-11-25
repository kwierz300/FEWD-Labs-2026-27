import { useState } from "react";
import { items } from "../data/data.js";
import DisplayFood from "./DisplayFood";
import OrderSummary from "./OrderSummary";
import OrderContext from "./OrderContext";

export default function FoodOrders() {
    const [selectedItems, setSelectedItems] = useState([]);

    const setOrderState = (event, selectedItem) => {
        setSelectedItems(previous => [...previous, selectedItem]);
    };

    return (
        <main className="container py-4">
            <h1 className="mb-4">Order Food</h1>
            <div className="row g-4">
                <div className="col-12 col-lg-8">
                    <DisplayFood items={items} handleOrder={setOrderState} />
                </div>
                <OrderContext.Provider value={[selectedItems, setSelectedItems]}>
                    <div className="col-12 col-lg-4">
                        <OrderSummary />
                    </div>
                </OrderContext.Provider>
            </div>
        </main>
    );
}
