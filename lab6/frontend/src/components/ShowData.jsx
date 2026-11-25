import { useState } from "react";
import Card from "react-bootstrap/Card";
import { nanoid } from "nanoid";
import useFetchData from "./useFetchData";
import SubmitOrder from "./SubmitOrder";

const ShowData = () => {
    const { status, foods } = useFetchData();
    const [selectedItems, setSelectedItems] = useState([]);
    const [submitting, setSubmitting] = useState(false);

    const handleClickSelect = (food) => {
        const selected = { key: nanoid(), name: food.name };
        setSelectedItems(previous => [...previous, selected]);
    };

    const handleClickDeselect = (key) => {
        setSelectedItems(previous => previous.filter(item => item.key !== key));
    };

    if (status === "idle" || status === "loading") {
        return <p role="status">Loading menu...</p>;
    }
    if (status !== "fetched") {
        return <p role="alert">There is currently an issue displaying the food menu.</p>;
    }

    const availableItems = foods.filter(food => food.available === "yes");

    return (
        <div className="row g-4">
            <div className="col-12 col-lg-7">
                <h2 className="h4">Select food</h2>
                <div className="row g-3 row-cols-2 row-cols-md-3">
                    {availableItems.map(food => (
                        <div className="col" key={food.id}>
                            <Card as="button" type="button"
                                className="w-100 h-100 text-start"
                                disabled={submitting}
                                onClick={() => handleClickSelect(food)}
                                aria-label={"Add " + food.name}>
                                <div className="ratio ratio-1x1 rounded-circle overflow-hidden mx-auto mt-3" style={{ width: "80%" }}>
                                    <Card.Img src={food.url} alt={food.name} style={{ objectFit: "cover" }} />
                                </div>
                                <Card.Body>
                                    <Card.Title className="text-capitalize">{food.name}</Card.Title>
                                    <Card.Text>£{Number(food.price).toFixed(2)}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-12 col-lg-5">
                <h2 className="h4">Your order</h2>
                {selectedItems.length === 0 ? <p>No items selected.</p> : (
                    <ul className="list-group mb-3">
                        {selectedItems.map(selected => (
                            <li className="list-group-item p-0" key={selected.key}>
                                <button type="button" className="btn w-100 text-start"
                                    disabled={submitting}
                                    onClick={() => handleClickDeselect(selected.key)}
                                    aria-label={"Remove " + selected.name}>
                                    {selected.name}<span className="float-end" aria-hidden="true">×</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                <SubmitOrder selectedItems={selectedItems} onSendOrder={setSelectedItems}
                    submitting={submitting} setSubmitting={setSubmitting} />
            </div>
        </div>
    );
};

export default ShowData;
