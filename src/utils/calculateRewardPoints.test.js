import { calculateRewardPoints } from "./calculateRewardPoints";

test('calculates the reward points', () => {
    const rewardPoints = calculateRewardPoints(120);
    expect(rewardPoints).toBe(90);
});