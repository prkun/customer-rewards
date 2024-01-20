import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./styles.css";

const RewardsFilter = () => {
    return (
        <Container fluid className="p-4 d-flex justify-content-center">
            <Row>
                <Col lg={4} className="p-1">
                    <Form.Label>Customer: </Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select the Customer</option>
                        <option value="1">ALL</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col lg={3} className="p-1">
                    <Form.Group controlId="fromDate" className="form">
                        <Form.Label>From: </Form.Label>
                        <Form.Control
                            type="date"
                            name="fromDate"
                            placeholder="Select Start Date"
                        // value={date}
                        // onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3} className="p-1">
                    <Form.Group controlId="fromDate" className="form">
                        <Form.Label>To: </Form.Label>
                        <Form.Control
                            type="date"
                            name="fromDate"
                            placeholder="Select Start Date"
                        // value={date}
                        // onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col lg={2} className="pt-4 ">
                    <Button variant="primary" size="md" active>
                        Apply
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default RewardsFilter;