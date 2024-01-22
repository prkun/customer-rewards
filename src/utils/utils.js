
const SMALLER_REWARD_THRESHOLD = 50;
const SMALLER_REWARD_POINTS = 1;
const LARGER_REWARD_THRESHOLD = 100;
const LARGER_REWARD_POINTS = 2;

const calculateRewardPoints = (poAmount) => {
    try {
        let totalRewards = 0;

        if (SMALLER_REWARD_THRESHOLD < poAmount && poAmount < LARGER_REWARD_THRESHOLD) {
            const smallerReward = (poAmount - SMALLER_REWARD_THRESHOLD) * SMALLER_REWARD_POINTS;
            totalRewards += smallerReward;
        }

        if (poAmount > LARGER_REWARD_THRESHOLD) {
            const smallerReward = SMALLER_REWARD_THRESHOLD * SMALLER_REWARD_POINTS;
            const largerReward = (poAmount - LARGER_REWARD_THRESHOLD) * LARGER_REWARD_POINTS;
            totalRewards += smallerReward + largerReward;
        }

        return totalRewards;
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms));

const convertDateFormat = (dateStr) => {
    try {
        const date = new Date(dateStr);
        let day = date.getDate();
        day = day < 10 ? "0" + day : day;
        let month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        let year = date.getFullYear();
        return day + "-" + month + "-" + year;
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export {
    calculateRewardPoints,
    sleep,
    convertDateFormat
}