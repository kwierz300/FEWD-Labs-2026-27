import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuTable from "./components/MenuTable";
import { items } from "./data/data";

export default function App() {
    return (
        <Container fluid as="main" className="p-4">
            <h1 className="mb-4">Welcome to our café</h1>
            <Row className="g-4">
                <Col xs={12} md={4}>
                    <h2 className="h4">Who we are...</h2>
                    <p>Welcome to our café, where you can enjoy freshly prepared
                        food, homemade cakes and hot drinks.</p>
                    <p>Our menu includes light snacks, main meals and desserts.
                        We use seasonal local produce where possible.</p>
                    <p>Take a look at our current menu to see what is available today.</p>
                </Col>
                <Col xs={12} md={4}>
                    <h2 className="h4">Where we are...</h2>
                    <div className="border rounded bg-light p-4 text-center text-secondary">
                        Map will be displayed here.
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <h2 className="h4">Explore our menu...</h2>
                    <MenuTable items={items} />
                </Col>
            </Row>
        </Container>
    );
}
