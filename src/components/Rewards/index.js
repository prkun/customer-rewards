import React, { useEffect } from 'react'
import { getPurchases } from '../../services/purchases.services';

const RewardPoints = () => {

    useEffect(() => {
        (async () => {
            const purchases = await getPurchases();
            console.log("Puschases: ", purchases);
        })();
    }, [])

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Reward Points</h2>
        </>
    )
}

export default RewardPoints;