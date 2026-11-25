const FoodItem = ({ food }) => {
    return (
        <div>
            <p>{food.description}</p>
            <p className="mb-0">Price: £{Number(food.price).toFixed(2)}</p>
        </div>
    );
};

export default FoodItem;
