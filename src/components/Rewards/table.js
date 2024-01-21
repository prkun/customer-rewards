import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

const RewardsTable = ({ purchases }) => {
    return (
        <Container className='p-3'>
            <Row>
                <Col>
                    <Table responsive striped bordered hover>
                        <thead align='center'>
                            <tr>
                                <th>#</th>
                                <th>Customer Name</th>
                                <th>PO Number</th>
                                <th>PO Date</th>
                                <th>PO Amount</th>
                                <th>Reward Points</th>
                            </tr>
                        </thead>
                        <tbody align='center'>
                            {(purchases && purchases?.length) ?
                                purchases?.map((purchase, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{purchase?.custName}</td>
                                        <td>{purchase?.poNumber}</td>
                                        <td>{purchase?.poDate}</td>
                                        <td>${purchase?.poAmount}</td>
                                        <td>{purchase?.rewardPoints}</td>
                                    </tr>
                                )) :
                                <tr>
                                    <td colSpan={6}>No Data</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default RewardsTable