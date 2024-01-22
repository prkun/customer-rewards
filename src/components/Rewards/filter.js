import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { getCustomers } from '../../services/purchases.services';
import { sleep } from '../../utils/sleep';

const RewardsFilter = ({ updateFilter }) => {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                await sleep(1000);
                const customersList = await getCustomers();
                setCustomers(customersList);
            } catch (error) {
                console.error('An error occurred:', error);
                setError({ error });
            }
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
        const selectedCustomer = customers && customers?.find((cust) => cust?.id === Number(e.target.value));
        setCustomer(selectedCustomer)
    }

    return (
        <Container fluid className='p-4 d-flex justify-content-center'>
            <Row>
                <Col lg={4} className='p-1'>
                    <Form.Label>Customer: </Form.Label>
                    <Form.Select aria-label='Default select example' onChange={handleCustomerSelect}>
                        <option>Select the Customer</option>
                        {customers?.map((cust, index) => (
                            <option key={index} value={cust?.id}>{cust?.name}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col lg={3} className='p-1'>
                    <Form.Group controlId='fromDate' className='form'>
                        <Form.Label>From: </Form.Label>
                        <Form.Control
                            type='date'
                            name='fromDate'
                            placeholder='Select Start Date'
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3} className='p-1'>
                    <Form.Group controlId='toDate' className='form'>
                        <Form.Label>To: </Form.Label>
                        <Form.Control
                            type='date'
                            name='toDate'
                            placeholder='Select Start Date'
                            onChange={(e) => setToDate(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col lg={2} className='pt-4'>
                    <Button variant='primary' size='md' active onClick={handleApply} disabled={!(customer && fromDate && toDate)}>
                        Apply
                    </Button>
                </Col>
            </Row>
            {error &&
                <div>An error occurred: {error.message}</div>
            }
        </Container>
    )
}

export default RewardsFilter;