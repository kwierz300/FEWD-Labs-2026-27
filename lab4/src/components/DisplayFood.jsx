export default function DisplayFood({ items, handleOrder }) {
    const availableItems = items.filter(item => item.available === "yes");

    const handleClick = (event, item) => {
        handleOrder(event, item.name);
        alert(item.name);
    };

    return (
        <div className="row g-3 row-cols-2 row-cols-md-3">
            {availableItems.map(item => (
                <div className="col" key={item.id}>
                    <button
                        type="button"
                        className="card food-card w-100 h-100 p-3 text-start"
                        onClick={event => handleClick(event, item)}
                        aria-label={"Add " + item.name}
                    >
                        <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                            <img src={import.meta.env.BASE_URL + item.url.slice(1)} className="img-cover" alt={item.name} />
                        </div>
                        <div className="card-body px-0 pb-0">
                            <p className="mb-1 text-capitalize">{item.name}</p>
                            <p className="mb-0">£{Number(item.price).toFixed(2)}</p>
                        </div>
                    </button>
                </div>
            ))}
        </div>
    );
}
