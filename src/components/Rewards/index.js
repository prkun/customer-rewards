import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { getPurchases } from '../../services/purchases.services';
import RewardsFilter from './filter';
import RewardsTable from './table';
import RewardsTotal from './total';

const RewardPoints = () => {
    const [filter, setFilter] = useState(null);
    const [rewardsTotalPoints, setRewardsTotalPoints] = useState(null);
    const [rewardsTableData, setRewardsTableData] = useState(null);

    useEffect(() => {
        if (filter) {
            (async () => {
                const purchases = await getPurchases();
                const filterCustPurchases = purchases?.filter((po) => po.custId === filter?.customer?.id);
                setRewardsTableData(filterCustPurchases);
                setRewardsTotalPoints(100);
                console.log(filterCustPurchases);
            })();
        }
    }, [filter])

    const updateFilter = (appliedFilter) => {
        setFilter(appliedFilter);
        console.log(appliedFilter);
    }

    return (
        <Container fluid className="p-3">
            <h2 className='header'>Customer Reward Points</h2>
            <RewardsFilter filter={filter} updateFilter={updateFilter} />
            {rewardsTotalPoints && <RewardsTotal filter={filter} total={rewardsTotalPoints} />}
            <RewardsTable purchases={rewardsTableData} />
        </Container>
    )
}

export default RewardPoints;