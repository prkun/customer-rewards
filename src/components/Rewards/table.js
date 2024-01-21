import React from "react"
import { Col, Container, Row, Table } from "react-bootstrap"

const RewardsTable = ({ purchases }) => {
    return (
        <Container className="p-3">
            <Row>
                <Col>
                    <Table responsive striped bordered hover>
                        <thead align="center">
                            <tr>
                                <th>#</th>
                                <th>Customer Name</th>
                                <th>PO Number</th>
                                <th>PO Date</th>
                                <th>Reward Points</th>
                            </tr>
                        </thead>
                        <tbody align="center">
                            {(!purchases || purchases.length === 0) && (
                                <tr>
                                    <td colSpan={5}>No Data</td>
                                </tr>
                            )}
                            {purchases && purchases.length > 0 && purchases?.map((purchase, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{purchase.custName}</td>
                                    <td>{purchase.poNumber}</td>
                                    <td>{purchase.poDate}</td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default RewardsTable