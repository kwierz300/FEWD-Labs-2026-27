import { useState } from "react";
import Toast from "react-bootstrap/Toast";

const SubmitOrder = ({ selectedItems, onSendOrder, submitting, setSubmitting }) => {
    const [nameField, setNameField] = useState("");
    const [tableField, setTableField] = useState("");
    const [message, setMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [error, setError] = useState("");

    const addOrder = async (event) => {
        event.preventDefault();
        if (submitting) return;
        setError("");
        if (!nameField.trim() || !tableField.trim() || selectedItems.length === 0) {
            setError("Please enter your name, table number and select at least one item.");
            return;
        }

        setSubmitting(true);
        setShowMessage(false);
        const newOrder = [nameField.trim(), tableField.trim(), selectedItems.map(item => item.name)];

        try {
            const response = await fetch("http://localhost:3001/addOrder", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newOrder)
            });
            const incomingData = await response.json();
            if (!response.ok) {
                throw new Error(incomingData.message || "Unable to submit order.");
            }
            setMessage(incomingData.message);
            setShowMessage(true);
            setNameField("");
            setTableField("");
            onSendOrder([]);
        } catch (err) {
            setError(err.message || "Unable to contact the server.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="border rounded p-3">
            <form onSubmit={addOrder}>
                <label htmlFor="customer-name" className="form-label">Enter your name:</label>
                <input id="customer-name" className="form-control mb-3" type="text"
                    placeholder="Enter your name here ..." value={nameField}
                    onChange={e => setNameField(e.target.value)} required disabled={submitting} />
                <label htmlFor="table-number" className="form-label">Enter your table number:</label>
                <input id="table-number" className="form-control mb-3" type="text"
                    placeholder="Enter your table number here ..." value={tableField}
                    onChange={e => setTableField(e.target.value)} required disabled={submitting} />
                <button type="submit" className="btn btn-primary" disabled={submitting || selectedItems.length === 0}>
                    {submitting ? "Submitting..." : "Submit order"}
                </button>
            </form>
            {error && <p className="text-danger mt-2" role="alert">{error}</p>}
            <Toast className="mt-3" onClose={() => setShowMessage(false)}
                show={showMessage} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Order confirmed</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </div>
    );
};

export default SubmitOrder;
