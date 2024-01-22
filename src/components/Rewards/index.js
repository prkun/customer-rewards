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
    const [error, setError] = useState(null);

    useEffect(() => {
        if (filter) {
            (async () => {
                try {
                    setLoading(true);
                    await sleep(1000);

                    const purchases = await getPurchases();
                    setLoading(false);

                    const startDate = new Date(filter?.fromDate);
                    const endDate = new Date(filter?.toDate);
                    const filterCustPurchases = purchases
                        && purchases?.length
                        && purchases?.filter((po) => {
                            const date = new Date(po?.poDate);
                            if (po.custId === filter?.customer?.id)
                                debugger
                            return ((po.custId === filter?.customer?.id) && (date >= startDate && date <= endDate))
                        });


                    const custPurchasesAndRewards = filterCustPurchases
                        && filterCustPurchases?.length
                        && filterCustPurchases?.map((obj) => ({ ...obj, rewardPoints: calculateRewardPoints(obj.poAmount) }));

                    setRewardsTableData(custPurchasesAndRewards || []);

                    calculateTotalRewards(custPurchasesAndRewards);
                } catch (error) {
                    console.error('An error occurred:', error);
                    setError({ error });
                }
            })();
        }
    }, [filter])

    const calculateTotalRewards = (custPurchasesAndRewards) => {
        try {
            const totalRewardPoints = custPurchasesAndRewards
                && custPurchasesAndRewards?.reduce((accumulator, currentValue) => accumulator + currentValue?.rewardPoints, 0)

            setRewardsTotalPoints(totalRewardPoints);
        } catch (error) {
            console.error('An error occurred:', error);
            setError({ error });
        }
    }

    const updateFilter = (appliedFilter) => {
        setFilter(appliedFilter);
    }

    return (
        <Container fluid className='p-3'>
            <h2 className='header'>Customer Reward Points</h2>
            <RewardsFilter filter={filter} updateFilter={updateFilter} />
            {!loading && rewardsTotalPoints && <RewardsTotal total={rewardsTotalPoints} />}
            {loading ?
                (
                    <div className='loader'>
                        <Spinner animation='border' role='status'>
                            <span className='visually-hidden'>Loading...</span>
                        </Spinner>
                    </div>
                ) :
                <RewardsTable purchases={rewardsTableData} />}
            {error &&
                <div>An error occurred: {error.message}</div>
            }
        </Container>
    )
}

export default RewardPoints;