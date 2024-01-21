import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { getPurchases } from '../../services/purchases.services';
import { calculateRewardPoints, sleep } from '../../utils/utils';
import RewardsFilter from './filter';
import './styles.css';
import RewardsTable from './table';
import RewardsTotal from './total';

const RewardPoints = () => {
    const [filter, setFilter] = useState(null);
    const [rewardsTotalPoints, setRewardsTotalPoints] = useState(null);
    const [rewardsTableData, setRewardsTableData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (filter) {
            (async () => {
                setLoading(true);
                await sleep(2000);
                const purchases = await getPurchases();
                setLoading(false);
                const filterCustPurchases = purchases && purchases.length && purchases?.filter((po) => po.custId === filter?.customer?.id);
                const custPurchasesAndRewards = filterCustPurchases && filterCustPurchases.length && filterCustPurchases.map((obj) => ({ ...obj, rewardPoints: calculateRewardPoints(obj.poAmount) }));
                setRewardsTableData(custPurchasesAndRewards || []);
                calculateTotalRewards(custPurchasesAndRewards);
                console.log(custPurchasesAndRewards);
            })();
        }
    }, [filter])

    const calculateTotalRewards = (custPurchasesAndRewards) => {
        const totalRewardPoints = custPurchasesAndRewards && custPurchasesAndRewards.reduce((accumulator, currentValue) => accumulator + currentValue.rewardPoints, 0)
        setRewardsTotalPoints(totalRewardPoints);
    }

    const updateFilter = (appliedFilter) => {
        setFilter(appliedFilter);
        console.log(appliedFilter);
    }

    return (
        <Container fluid className="p-3">
            <h2 className='header'>Customer Reward Points</h2>
            <RewardsFilter filter={filter} updateFilter={updateFilter} />
            {!loading && rewardsTotalPoints && <RewardsTotal total={rewardsTotalPoints} />}
            {loading ?
                (
                    <div className='loader'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) :
                <RewardsTable purchases={rewardsTableData} />}
        </Container>
    )
}

export default RewardPoints;