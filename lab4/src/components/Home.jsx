import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from "./Map";
import FilterableMenuTable from "./FilterableMenuTable";
import { items } from "../data/data";

export default function Home() {
    return (
        <Container as="main" className="py-4">
            <h1 className="mb-4">Welcome to our café</h1>
            <section className="bg-light rounded p-3 mb-4">
                <h2 className="h4">Who we are...</h2>
                <p>Welcome to our café, where you can enjoy freshly prepared food,
                    homemade cakes and hot drinks.</p>
                <p className="mb-0">Our menu includes light snacks, main meals and desserts.
                    We use seasonal local produce where possible.</p>
            </section>
            <Row className="g-4">
                <Col xs={12} md={6}>
                    <h2 className="h4">Where we are...</h2>
                    <Map />
                </Col>
                <Col xs={12} md={6}>
                    <h2 className="h4">Explore our menu...</h2>
                    <FilterableMenuTable items={items} />
                </Col>
            </Row>
        </Container>
    );
}
