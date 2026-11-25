import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import useFetchData from "./useFetchData";

const ShowData = () => {
    const { status, foods } = useFetchData();
    const [selectedFood, setSelectedFood] = useState(null);

    if (status === "idle" || status === "loading") {
        return <p role="status">Loading menu...</p>;
    }
    if (status !== "fetched") {
        return <p role="alert">There is currently an issue displaying the food menu.</p>;
    }

    const availableFoods = foods.filter(food => food.available === "yes");

    return (
        <>
            <p aria-live="polite" className="alert alert-light border">
                {selectedFood ? "Selected: " + selectedFood.name : "Select an item from the menu."}
            </p>
            <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {availableFoods.map(food => (
                    <div className="col" key={food.id}>
                        <Card className="h-100">
                            <div className="ratio ratio-1x1 overflow-hidden m-3 mx-auto rounded-circle" style={{ width: "80%" }}>
                                <Card.Img src={food.url} alt={food.name} style={{ objectFit: "cover" }} />
                            </div>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-capitalize">{food.name}</Card.Title>
                                <Card.Text>{food.description}</Card.Text>
                                <Card.Text>£{Number(food.price).toFixed(2)}</Card.Text>
                                <Button className="mt-auto" onClick={() => setSelectedFood(food)}
                                    aria-pressed={selectedFood?.id === food.id}>
                                    Select
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ShowData;
