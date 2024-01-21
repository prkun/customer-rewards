import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getCustomers } from "../../services/purchases.services";

const RewardsFilter = ({ filter, updateFilter }) => {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    useEffect(() => {
        (async () => {
            const customersList = await getCustomers();
            setCustomers(customersList);
            console.log("Customers: ", customersList);
        })();
    }, [])

    const handleApply = () => {
        const appliedFilter = {
            customer,
            fromDate,
            toDate
        }
        updateFilter(appliedFilter);
    }

    const handleCustomerSelect = (e) => {
        const selectedCustomer = customers?.find((cust) => cust.id === Number(e.target.value));
        setCustomer(selectedCustomer)
    }

    return (
        <Container fluid className="p-4 d-flex justify-content-center">
            <Row>
                <Col lg={4} className="p-1">
                    <Form.Label>Customer: </Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleCustomerSelect}>
                        <option>Select the Customer</option>
                        {customers?.map((cust, index) => (
                            <option key={index} value={cust?.id}>{cust?.name}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col lg={3} className="p-1">
                    <Form.Group controlId="fromDate" className="form">
                        <Form.Label>From: </Form.Label>
                        <Form.Control
                            type="date"
                            name="fromDate"
                            placeholder="Select Start Date"
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3} className="p-1">
                    <Form.Group controlId="toDate" className="form">
                        <Form.Label>To: </Form.Label>
                        <Form.Control
                            type="date"
                            name="toDate"
                            placeholder="Select Start Date"
                            onChange={(e) => setToDate(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col lg={2} className="pt-4 ">
                    <Button variant="primary" size="md" active onClick={handleApply} disabled={!(customer && fromDate && toDate)}>
                        Apply
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default RewardsFilter;