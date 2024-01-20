import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { getPurchases } from '../../services/purchases.services';
import RewardsFilter from './filter';
import RewardsTable from './table';
import RewardsTotal from './total';
import './styles.css'

const RewardPoints = () => {

    useEffect(() => {
        (async () => {
            const purchases = await getPurchases();
            console.log("Purchases: ", purchases);
        })();
    }, [])

    return (
        <Container fluid className="p-3">
            <h2 className='header'>Customer Reward Points</h2>
            <RewardsFilter />
            <RewardsTotal />
            <RewardsTable />
        </Container>
    )
}

export default RewardPoints;