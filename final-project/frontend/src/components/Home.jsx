import { Link } from "react-router-dom";
import Map from "./Map";
import FilterableMenuTable from "./FilterableMenuTable";
import useFetchData from "./useFetchData";

export default function Home() {
    const { status, foods } = useFetchData();

    return (
        <>
            <h1 className="mb-4">Welcome to our café</h1>
            <section className="bg-light rounded p-4 mb-4">
                <h2 className="h4">Who we are...</h2>
                <p>Enjoy freshly prepared food, homemade cakes and hot drinks at our cafés.
                    Explore our locations and browse today's menu.</p>
                <Link className="btn btn-primary" to="/orders">Order Food</Link>
            </section>
            <div className="row g-4">
                <section className="col-12 col-md-6">
                    <h2 className="h4">Where we are...</h2>
                    <Map />
                </section>
                <section className="col-12 col-md-6">
                    <h2 className="h4">Explore our menu...</h2>
                    {status === "fetched" ? <FilterableMenuTable items={foods} /> :
                        status === "error" ? <p role="alert">There is currently an issue displaying the food menu.</p> :
                        <p role="status">Loading menu...</p>}
                </section>
            </div>
        </>
    );
}
